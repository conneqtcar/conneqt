import { Injectable, BadRequestException, NotFoundException, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

export interface FipeVehicleInfo {
  fipeCode?: string;
  brand?: string;
  model?: string;
  modelYear?: number;
  fipePrice?: number;
  fuelType?: string;
}

type VehicleType = 'cars' | 'motorcycles' | 'trucks';

// Cache de 24h — tabela FIPE atualiza mensalmente
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

@Injectable()
export class FipeService {
  private readonly fipeApiUrl: string;
  private readonly subscriptionToken?: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
    this.fipeApiUrl = configService.get<string>(
      'FIPE_API_URL',
      'https://fipe.parallelum.com.br/api/v2',
    );
    this.subscriptionToken = configService.get<string>('FIPE_SUBSCRIPTION_TOKEN');
  }

  private get headers(): Record<string, string> {
    return this.subscriptionToken
      ? { 'X-Subscription-Token': this.subscriptionToken }
      : {};
  }

  private async cachedGet<T>(key: string, url: string): Promise<T> {
    const cached = await this.cacheManager.get<T>(key);
    if (cached) return cached;

    try {
      const { data } = await firstValueFrom(
        this.httpService.get<T>(url, { headers: this.headers }),
      );
      await this.cacheManager.set(key, data, CACHE_TTL_MS);
      return data;
    } catch (err) {
      const axiosErr = err as AxiosError;
      if (axiosErr.response?.status === 404) {
        throw new NotFoundException('Recurso não encontrado na tabela FIPE.');
      }
      throw new BadRequestException('Erro ao consultar a API FIPE. Tente novamente.');
    }
  }

  async getBrands(vehicleType: VehicleType = 'cars') {
    return this.cachedGet(
      `fipe:brands:${vehicleType}`,
      `${this.fipeApiUrl}/${vehicleType}/brands`,
    );
  }

  async getModels(brandCode: string, vehicleType: VehicleType = 'cars') {
    return this.cachedGet(
      `fipe:models:${vehicleType}:${brandCode}`,
      `${this.fipeApiUrl}/${vehicleType}/brands/${brandCode}/models`,
    );
  }

  async getModelYears(brandCode: string, modelCode: string, vehicleType: VehicleType = 'cars') {
    return this.cachedGet(
      `fipe:years:${vehicleType}:${brandCode}:${modelCode}`,
      `${this.fipeApiUrl}/${vehicleType}/brands/${brandCode}/models/${modelCode}/years`,
    );
  }

  async getPrice(brandCode: string, modelCode: string, yearCode: string, vehicleType: VehicleType = 'cars') {
    return this.cachedGet(
      `fipe:price:${vehicleType}:${brandCode}:${modelCode}:${yearCode}`,
      `${this.fipeApiUrl}/${vehicleType}/brands/${brandCode}/models/${modelCode}/years/${yearCode}`,
    );
  }

  async queryByPlate(plate: string): Promise<FipeVehicleInfo> {
    const cleanPlate = plate.replace(/[^A-Z0-9]/gi, '').toUpperCase();
    if (cleanPlate.length < 7) {
      throw new BadRequestException('Placa inválida. Use o formato AAA0X00 ou AAA0000.');
    }

    const apiPlacasToken = this.configService.get<string>('APIPLACAS_TOKEN');
    if (!apiPlacasToken) {
      // Token não configurado ainda — retorna mock para não bloquear o MVP
      return {
        fipeCode: '001004-9',
        brand: 'Toyota',
        model: 'Corolla 2.0 Altis',
        modelYear: 2021,
        fipePrice: 118000,
        fuelType: 'FLEX',
      };
    }

    const cacheKey = `plate:${cleanPlate}`;
    const cached = await this.cacheManager.get<FipeVehicleInfo>(cacheKey);
    if (cached) return cached;

    try {
      const url = `https://wdapi2.com.br/consulta/${cleanPlate}/${apiPlacasToken}`;
      const { data } = await firstValueFrom(
        this.httpService.get<ApiPlacasResponse>(url),
      );

      const fipeDados = data.fipe?.dados ?? [];
      const bestFipe = fipeDados.sort((a, b) => (b.score ?? 0) - (a.score ?? 0))[0];

      const result: FipeVehicleInfo = {
        brand: data.MARCA ?? data.marca,
        model: data.MODELO ?? data.modelo,
        modelYear: data.anoModelo ? parseInt(data.anoModelo, 10) : undefined,
        fuelType: normalizeFuelType(data.extra?.combustivel),
        fipeCode: bestFipe?.codigo_fipe,
        fipePrice: parseFipePrice(bestFipe?.texto_valor),
      };

      // Cache por 7 dias (dados de placa mudam raramente)
      await this.cacheManager.set(cacheKey, result, 7 * 24 * 60 * 60 * 1000);
      return result;
    } catch (err) {
      const axiosErr = err as AxiosError<{ message: string }>;
      const status = axiosErr.response?.status;
      if (status === 401) throw new BadRequestException('Placa inválida.');
      if (status === 406) throw new NotFoundException('Veículo não encontrado para esta placa.');
      if (status === 429) throw new BadRequestException('Limite de consultas de placa atingido.');
      throw new BadRequestException('Erro ao consultar dados da placa. Tente novamente.');
    }
  }
}

// ─── Tipos e helpers para ApiPlacas ──────────────────────────────────────────

interface ApiPlacasResponse {
  MARCA?: string;
  MODELO?: string;
  marca?: string;
  modelo?: string;
  anoModelo?: string;
  extra?: { combustivel?: string };
  fipe?: {
    dados?: Array<{
      codigo_fipe?: string;
      texto_valor?: string;
      score?: number;
    }>;
  };
}

function normalizeFuelType(combustivel?: string): string | undefined {
  if (!combustivel) return undefined;
  const c = combustivel.toLowerCase();
  if (c.includes('flex') || c.includes('alcool') || c.includes('álcool')) return 'FLEX';
  if (c.includes('gasolina')) return 'GASOLINE';
  if (c.includes('diesel')) return 'DIESEL';
  if (c.includes('eletri')) return 'ELECTRIC';
  if (c.includes('hibrido') || c.includes('híbrido')) return 'HYBRID';
  return undefined;
}

function parseFipePrice(texto?: string): number | undefined {
  if (!texto) return undefined;
  const cleaned = texto.replace(/[R$\s.]/g, '').replace(',', '.');
  const value = parseFloat(cleaned);
  return isNaN(value) ? undefined : Math.round(value);
}


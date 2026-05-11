"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FipeService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const cache_manager_1 = require("@nestjs/cache-manager");
const rxjs_1 = require("rxjs");
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
let FipeService = class FipeService {
    httpService;
    configService;
    cacheManager;
    fipeApiUrl;
    subscriptionToken;
    constructor(httpService, configService, cacheManager) {
        this.httpService = httpService;
        this.configService = configService;
        this.cacheManager = cacheManager;
        this.fipeApiUrl = configService.get('FIPE_API_URL', 'https://fipe.parallelum.com.br/api/v2');
        this.subscriptionToken = configService.get('FIPE_SUBSCRIPTION_TOKEN');
    }
    get headers() {
        return this.subscriptionToken
            ? { 'X-Subscription-Token': this.subscriptionToken }
            : {};
    }
    async cachedGet(key, url) {
        const cached = await this.cacheManager.get(key);
        if (cached)
            return cached;
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, { headers: this.headers }));
            await this.cacheManager.set(key, data, CACHE_TTL_MS);
            return data;
        }
        catch (err) {
            const axiosErr = err;
            if (axiosErr.response?.status === 404) {
                throw new common_1.NotFoundException('Recurso não encontrado na tabela FIPE.');
            }
            throw new common_1.BadRequestException('Erro ao consultar a API FIPE. Tente novamente.');
        }
    }
    async getBrands(vehicleType = 'cars') {
        return this.cachedGet(`fipe:brands:${vehicleType}`, `${this.fipeApiUrl}/${vehicleType}/brands`);
    }
    async getModels(brandCode, vehicleType = 'cars') {
        return this.cachedGet(`fipe:models:${vehicleType}:${brandCode}`, `${this.fipeApiUrl}/${vehicleType}/brands/${brandCode}/models`);
    }
    async getModelYears(brandCode, modelCode, vehicleType = 'cars') {
        return this.cachedGet(`fipe:years:${vehicleType}:${brandCode}:${modelCode}`, `${this.fipeApiUrl}/${vehicleType}/brands/${brandCode}/models/${modelCode}/years`);
    }
    async getPrice(brandCode, modelCode, yearCode, vehicleType = 'cars') {
        return this.cachedGet(`fipe:price:${vehicleType}:${brandCode}:${modelCode}:${yearCode}`, `${this.fipeApiUrl}/${vehicleType}/brands/${brandCode}/models/${modelCode}/years/${yearCode}`);
    }
    async queryByPlate(plate) {
        const cleanPlate = plate.replace(/[^A-Z0-9]/gi, '').toUpperCase();
        if (cleanPlate.length < 7) {
            throw new common_1.BadRequestException('Placa inválida. Use o formato AAA0X00 ou AAA0000.');
        }
        const apiPlacasToken = this.configService.get('APIPLACAS_TOKEN');
        if (!apiPlacasToken) {
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
        const cached = await this.cacheManager.get(cacheKey);
        if (cached)
            return cached;
        try {
            const url = `https://wdapi2.com.br/consulta/${cleanPlate}/${apiPlacasToken}`;
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            const fipeDados = data.fipe?.dados ?? [];
            const bestFipe = fipeDados.sort((a, b) => (b.score ?? 0) - (a.score ?? 0))[0];
            const result = {
                brand: data.MARCA ?? data.marca,
                model: data.MODELO ?? data.modelo,
                modelYear: data.anoModelo ? parseInt(data.anoModelo, 10) : undefined,
                fuelType: normalizeFuelType(data.extra?.combustivel),
                fipeCode: bestFipe?.codigo_fipe,
                fipePrice: parseFipePrice(bestFipe?.texto_valor),
            };
            await this.cacheManager.set(cacheKey, result, 7 * 24 * 60 * 60 * 1000);
            return result;
        }
        catch (err) {
            const axiosErr = err;
            const status = axiosErr.response?.status;
            if (status === 401)
                throw new common_1.BadRequestException('Placa inválida.');
            if (status === 406)
                throw new common_1.NotFoundException('Veículo não encontrado para esta placa.');
            if (status === 429)
                throw new common_1.BadRequestException('Limite de consultas de placa atingido.');
            throw new common_1.BadRequestException('Erro ao consultar dados da placa. Tente novamente.');
        }
    }
};
exports.FipeService = FipeService;
exports.FipeService = FipeService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService, Object])
], FipeService);
function normalizeFuelType(combustivel) {
    if (!combustivel)
        return undefined;
    const c = combustivel.toLowerCase();
    if (c.includes('flex') || c.includes('alcool') || c.includes('álcool'))
        return 'FLEX';
    if (c.includes('gasolina'))
        return 'GASOLINE';
    if (c.includes('diesel'))
        return 'DIESEL';
    if (c.includes('eletri'))
        return 'ELECTRIC';
    if (c.includes('hibrido') || c.includes('híbrido'))
        return 'HYBRID';
    return undefined;
}
function parseFipePrice(texto) {
    if (!texto)
        return undefined;
    const cleaned = texto.replace(/[R$\s.]/g, '').replace(',', '.');
    const value = parseFloat(cleaned);
    return isNaN(value) ? undefined : Math.round(value);
}

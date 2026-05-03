import { Injectable, Inject, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaClient } from '@conneqtcar/database';
import { PRISMA_SERVICE } from '../database/database.module';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { FipeService } from '../fipe/fipe.service';

@Injectable()
export class VehiclesService {
  constructor(
    @Inject(PRISMA_SERVICE) private readonly prisma: PrismaClient,
    private readonly fipeService: FipeService,
  ) {}

  async create(ownerId: string, dto: CreateVehicleDto) {
    // Consulta automática FIPE/DETRAN pela placa
    let fipeData: { fipeCode?: string; modelYear?: number; brand?: string; model?: string } = {};
    if (dto.plate) {
      try {
        fipeData = await this.fipeService.queryByPlate(dto.plate);
      } catch {
        // Dados FIPE opcionais, prosseguir sem eles
      }
    }

    return this.prisma.vehicle.create({
      data: {
        ownerId,
        plate: dto.plate,
        chassis: dto.chassis,
        renavam: dto.renavam,
        brand: dto.brand ?? fipeData.brand,
        model: dto.model ?? fipeData.model,
        year: dto.year ?? fipeData.modelYear,
        color: dto.color,
        mileage: dto.mileage,
        fuelType: dto.fuelType as any,
        transmission: dto.transmission as any,
        fipeCode: fipeData.fipeCode,
        status: 'DRAFT',
      },
    });
  }

  async findByOwner(ownerId: string) {
    return this.prisma.vehicle.findMany({
      where: { ownerId },
      include: { inspections: { select: { id: true, status: true, score: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: { id },
      include: {
        owner: { select: { id: true, name: true, kycStatus: true } },
        inspections: {
          include: { media: true, items: true },
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
        listings: { where: { status: 'ACTIVE' }, take: 1 },
      },
    });

    if (!vehicle) throw new NotFoundException('Veículo não encontrado.');
    return vehicle;
  }

  async update(id: string, ownerId: string, dto: UpdateVehicleDto) {
    const vehicle = await this.prisma.vehicle.findUnique({ where: { id } });
    if (!vehicle) throw new NotFoundException('Veículo não encontrado.');
    if (vehicle.ownerId !== ownerId) throw new ForbiddenException('Acesso negado.');

    return this.prisma.vehicle.update({ where: { id }, data: dto as any });
  }

  async getFipeSuggestion(plate: string) {
    return this.fipeService.queryByPlate(plate);
  }
}


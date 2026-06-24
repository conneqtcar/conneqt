import {
  Injectable,
  Inject,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaClient } from '@conneqtcar/database';
import { PRISMA_SERVICE } from '../database/database.module';
import { CreateListingDto } from './dto/create-listing.dto';
import { SearchListingsDto } from './dto/search-listings.dto';

@Injectable()
export class ListingsService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaClient) {}

  async create(ownerId: string, dto: CreateListingDto) {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: { id: dto.vehicleId },
      include: {
        inspections: {
          where: { status: 'APPROVED' },
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!vehicle) throw new NotFoundException('Veículo não encontrado.');
    if (vehicle.ownerId !== ownerId) throw new ForbiddenException('Acesso negado.');
    if (vehicle.inspections.length === 0) {
      throw new BadRequestException(
        'O veículo precisa ter uma inspeção aprovada antes de ser publicado.',
      );
    }

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 90); // anúncio válido por 90 dias

    return this.prisma.listing.create({
      data: {
        vehicleId: dto.vehicleId,
        sellerId: ownerId,
        price: dto.price,
        description: dto.description,
        acceptsFinancing: dto.acceptsFinancing ?? false,
        acceptsTrade: dto.acceptsTrade ?? false,
        status: 'ACTIVE',
        expiresAt,
      },
      include: { vehicle: true },
    });
  }

  async search(dto: SearchListingsDto) {
    const {
      page = 1,
      limit = 20,
      brand,
      model,
      yearMin,
      yearMax,
      priceMin,
      priceMax,
      mileageMax,
      city,
      fuelType,
      transmission,
    } = dto;

    const skip = (page - 1) * limit;

    const where = {
      status: 'ACTIVE' as const,
      vehicle: {
        ...(brand && { brand: { contains: brand, mode: 'insensitive' as const } }),
        ...(model && { model: { contains: model, mode: 'insensitive' as const } }),
        ...(yearMin && { year: { gte: yearMin } }),
        ...(yearMax && { year: { lte: yearMax } }),
        ...(mileageMax && { mileage: { lte: mileageMax } }),
        ...(fuelType && { fuelType }),
        ...(transmission && { transmission }),
      },
      ...(priceMin && { price: { gte: priceMin } }),
      ...(priceMax && { price: { lte: priceMax } }),
    } as any;

    const [total, listings] = await Promise.all([
      this.prisma.listing.count({ where }),
      this.prisma.listing.findMany({
        where,
        include: {
          vehicle: {
            include: {
              inspections: {
                where: { status: 'APPROVED' },
                select: {
                  id: true,
                  score: true,
                  media: {
                    where: { type: 'PHOTO' },
                    select: { url: true, type: true },
                    take: 1,
                    // createdAt sozinho empata em inserts em lote (createMany); id garante ordem estável
                    orderBy: [{ createdAt: 'asc' as const }, { id: 'asc' as const }],
                  },
                },
                take: 1,
              },
            },
          },
          seller: { select: { id: true, name: true, kycStatus: true } },
        },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    return { data: listings, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findById(id: string) {
    const listing = await this.prisma.listing.findUnique({
      where: { id },
      include: {
        vehicle: {
          include: {
            inspections: {
              where: { status: 'APPROVED' },
              include: {
                // Apenas fotos, sem vídeos pesados no primeiro load
                media: { where: { type: 'PHOTO' }, orderBy: [{ createdAt: 'asc' }, { id: 'asc' }] },
                // Limite de 50 itens (suficiente para exibir o laudo completo)
                items: { orderBy: [{ category: 'asc' }, { item: 'asc' }], take: 50 },
              },
              take: 1,
            },
          },
        },
        seller: { select: { id: true, name: true, kycStatus: true, phone: true } },
        // Apenas contagem de propostas pendentes, sem materializar os registros
        _count: { select: { proposals: true } },
      },
    });

    if (!listing) throw new NotFoundException('Anúncio não encontrado.');

    // Incrementa visualizações de forma assíncrona (fire-and-forget) — não bloqueia a resposta
    this.prisma.listing
      .update({ where: { id }, data: { views: { increment: 1 } } })
      .catch(() => undefined);

    return listing;
  }

  async deactivate(id: string, ownerId: string) {
    const listing = await this.prisma.listing.findUnique({ where: { id } });
    if (!listing) throw new NotFoundException('Anúncio não encontrado.');
    if (listing.sellerId !== ownerId) throw new ForbiddenException('Acesso negado.');

    return this.prisma.listing.update({
      where: { id },
      data: { status: 'INACTIVE' },
    });
  }
}


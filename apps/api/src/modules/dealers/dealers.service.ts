import { Injectable, Inject, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@conneqtcar/database';
import { PRISMA_SERVICE } from '../database/database.module';
import { CreateDealerDto } from './dto/create-dealer.dto';

@Injectable()
export class DealersService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaClient) {}

  async create(userId: string, dto: CreateDealerDto) {
    const existing = await this.prisma.dealer.findUnique({ where: { userId } });
    if (existing) throw new ConflictException('Usuário já possui cadastro de lojista.');

    return this.prisma.dealer.create({
      data: {
        userId,
        companyName: dto.companyName,
        cnpj: dto.cnpj,
        plan: dto.plan ?? 'STARTER',
        status: 'PENDING',
      },
    });
  }

  async findById(id: string) {
    const dealer = await this.prisma.dealer.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true } },
        listings: {
          where: { listing: { status: 'ACTIVE' } },
          select: { id: true, listing: { select: { price: true, vehicle: { select: { brand: true, model: true } } } } },
          take: 10,
        },
      },
    });
    if (!dealer) throw new NotFoundException('Lojista não encontrado.');
    return dealer;
  }

  async findByUser(userId: string) {
    return this.prisma.dealer.findUnique({
      where: { userId },
      include: { user: { select: { id: true, name: true } } },
    });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [total, dealers] = await Promise.all([
      this.prisma.dealer.count(),
      this.prisma.dealer.findMany({
        skip,
        take: limit,
        include: { user: { select: { id: true, name: true, email: true } } },
        orderBy: { createdAt: 'desc' },
      }),
    ]);
    return { data: dealers, total, page, limit, totalPages: Math.ceil(total / limit) };
  }
}


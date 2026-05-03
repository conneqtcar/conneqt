import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { PrismaClient } from '@conneqtcar/database';
import { PRISMA_SERVICE } from '../database/database.module';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaClient) {}

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        type: true,
        kycStatus: true,
        status: true,
        avatarUrl: true,
        cpf: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) throw new NotFoundException('Usuário não encontrado.');
    return user;
  }

  async update(id: string, dto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: dto,
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        type: true,
        kycStatus: true,
        avatarUrl: true,
        updatedAt: true,
      },
    });
  }

  async submitKyc(userId: string, data: { cpf: string; selfieUrl: string }) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        cpf: data.cpf,
        kycStatus: 'PENDING',
        kycSubmittedAt: new Date(),
      },
      select: { id: true, kycStatus: true },
    });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [total, users] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.user.findMany({
        skip,
        take: limit,
        select: {
          id: true,
          email: true,
          name: true,
          type: true,
          kycStatus: true,
          status: true,
          createdAt: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    return { data: users, total, page, limit, totalPages: Math.ceil(total / limit) };
  }
}


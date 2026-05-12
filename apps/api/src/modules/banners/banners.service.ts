import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@conneqtcar/database';
import { PRISMA_SERVICE } from '../database/database.module';

@Injectable()
export class BannersService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaClient) {}

  /** Listagem pública — apenas banners ativos, ordenados */
  findActive() {
    return this.prisma.banner.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
      select: { id: true, title: true, imageUrl: true, order: true },
    });
  }

  /** Listagem completa para o admin */
  findAll() {
    return this.prisma.banner.findMany({
      orderBy: { order: 'asc' },
    });
  }

  create(data: { title?: string; imageUrl: string; order?: number; active?: boolean }) {
    return this.prisma.banner.create({ data });
  }

  update(id: string, data: { title?: string; imageUrl?: string; order?: number; active?: boolean }) {
    return this.prisma.banner.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.banner.delete({ where: { id } });
  }
}

import { Injectable, Inject, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaClient, Prisma } from '@conneqtcar/database';
import * as bcrypt from 'bcryptjs';
import { PRISMA_SERVICE } from '../database/database.module';

@Injectable()
export class AdminService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaClient) {}

  async getDashboardStats() {
    const [
      totalUsers,
      totalListings,
      activeListings,
      pendingInspections,
      awaitingReviewInspections,
      totalDealers,
    ] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.listing.count(),
      this.prisma.listing.count({ where: { status: 'ACTIVE' } }),
      this.prisma.inspection.count({ where: { status: 'PENDING' } }),
      this.prisma.inspection.count({ where: { status: 'AWAITING_REVIEW' } }),
      this.prisma.dealer.count(),
    ]);

    return {
      totalUsers,
      totalListings,
      activeListings,
      pendingInspections,
      awaitingReviewInspections,
      totalDealers,
      updatedAt: new Date(),
    };
  }

  async getUsers(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [total, users] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.user.findMany({
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          email: true,
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

  async blockUser(userId: string, reason: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { status: 'BLOCKED', blockReason: reason },
      select: { id: true, status: true },
    });
  }

  async approveKyc(userId: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { kycStatus: 'APPROVED', kycApprovedAt: new Date() },
      select: { id: true, kycStatus: true },
    });
  }

  async rejectKyc(userId: string, reason: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { kycStatus: 'REJECTED', kycRejectionReason: reason },
      select: { id: true, kycStatus: true },
    });
  }

  async createDealer(dto: {
    companyName: string;
    cnpj: string;
    plan: 'STARTER' | 'PRO' | 'ENTERPRISE';
    name: string;
    email: string;
    phone?: string;
    password: string;
  }) {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existing) throw new ConflictException('E-mail já cadastrado.');

    const passwordHash = await bcrypt.hash(dto.password, 12);

    return this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const user = await tx.user.create({
        data: {
          email: dto.email,
          passwordHash,
          name: dto.name,
          phone: dto.phone,
          type: 'PF',
          status: 'ACTIVE',
          kycStatus: 'APPROVED',
        },
      });

      const dealer = await tx.dealer.create({
        data: {
          companyName: dto.companyName,
          cnpj: dto.cnpj,
          plan: dto.plan ?? 'STARTER',
          userId: user.id,
        },
        select: {
          id: true,
          companyName: true,
          cnpj: true,
          plan: true,
          status: true,
          createdAt: true,
          user: { select: { id: true, name: true, email: true } },
        },
      });

      return dealer;
    });
  }

  async promoteToAdmin(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('Usuário não encontrado.');
    if (user.type === 'ADMIN') throw new ConflictException('Usuário já é administrador.');

    return this.prisma.user.update({
      where: { id: userId },
      data: { type: 'ADMIN' },
      select: { id: true, name: true, email: true, type: true },
    });
  }

  async getListing(listingId: string) {
    const listing = await this.prisma.listing.findUnique({
      where: { id: listingId },
      include: {
        vehicle: {
          include: {
            inspections: {
              where: { status: 'APPROVED' },
              include: { media: { where: { type: 'PHOTO' }, orderBy: [{ createdAt: 'asc' }, { id: 'asc' }] } },
              take: 1,
            },
          },
        },
        seller: { select: { id: true, name: true, email: true } },
      },
    });
    if (!listing) throw new NotFoundException('Anúncio não encontrado.');
    return listing;
  }

  async updateListing(
    listingId: string,
    dto: {
      brand?: string; model?: string; year?: number; color?: string; mileage?: number;
      fuelType?: string; transmission?: string; bodyType?: string; doors?: number;
      plate?: string; chassis?: string; renavam?: string;
      price?: number; description?: string;
      acceptsFinancing?: boolean; acceptsTrade?: boolean;
      photoUrls?: string[];
    },
  ) {
    const listing = await this.prisma.listing.findUnique({
      where: { id: listingId },
      include: {
        vehicle: {
          include: {
            inspections: { where: { status: 'APPROVED' }, take: 1 },
          },
        },
      },
    });
    if (!listing) throw new NotFoundException('Anúncio não encontrado.');

    const { brand, model, year, color, mileage, fuelType, transmission, bodyType, doors,
            plate, chassis, renavam, price, description, acceptsFinancing, acceptsTrade, photoUrls } = dto;

    await this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.vehicle.update({
        where: { id: listing.vehicleId },
        data: {
          ...(brand !== undefined && { brand }),
          ...(model !== undefined && { model }),
          ...(year !== undefined && { year }),
          ...(color !== undefined && { color }),
          ...(mileage !== undefined && { mileage }),
          ...(fuelType !== undefined && { fuelType: fuelType as any }),
          ...(transmission !== undefined && { transmission: transmission as any }),
          ...(plate !== undefined && { plate: plate || null }),
          ...(chassis !== undefined && { chassis: chassis || null }),
          ...(renavam !== undefined && { renavam: renavam || null }),
        },
      });

      const extras: string[] = [];
      if (bodyType) extras.push(bodyType);
      if (doors) extras.push(`${doors} portas`);
      const descriptionFinal = description !== undefined
        ? [description, extras.join(' · ')].filter(Boolean).join('\n') || null
        : undefined;

      await tx.listing.update({
        where: { id: listingId },
        data: {
          ...(price !== undefined && { price }),
          ...(descriptionFinal !== undefined && { description: descriptionFinal }),
          ...(acceptsFinancing !== undefined && { acceptsFinancing }),
          ...(acceptsTrade !== undefined && { acceptsTrade }),
        },
      });

      if (photoUrls !== undefined) {
        const inspection = listing.vehicle.inspections[0];
        if (inspection) {
          await tx.inspectionMedia.deleteMany({ where: { inspectionId: inspection.id } });
          if (photoUrls.length > 0) {
            await tx.inspectionMedia.createMany({
              data: photoUrls.map((url, i) => ({
                inspectionId: inspection.id,
                type: /\.(mp4|mov|avi|webm)$/i.test(url) ? 'VIDEO' : ('PHOTO' as any),
                url,
                key: `admin/${listing.vehicleId}/edit-${i}-${Date.now()}`,
                hash: `edit-${listing.vehicleId}-${i}`,
              })),
            });
          }
        }
      }
    });

    return this.getListing(listingId);
  }

  async deactivateListing(listingId: string) {
    return this.prisma.listing.update({
      where: { id: listingId },
      data: { status: 'INACTIVE' },
      select: { id: true, status: true },
    });
  }

  async getAllInspections(page = 1, limit = 50, status?: string) {
    const skip = (page - 1) * limit;
    const where = status ? { status: status as any } : {};
    const [total, inspections] = await Promise.all([
      this.prisma.inspection.count({ where }),
      this.prisma.inspection.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          status: true,
          score: true,
          type: true,
          createdAt: true,
          vehicle: {
            select: {
              id: true,
              brand: true,
              model: true,
              year: true,
              plate: true,
              owner: { select: { name: true } },
            },
          },
          _count: { select: { media: true } },
        },
      }),
    ]);
    return { data: inspections, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async createListing(
    dto: {
      brand: string;
      model: string;
      year: number;
      color: string;
      mileage: number;
      fuelType: string;
      transmission: string;
      bodyType?: string;
      doors?: number;
      plate?: string;
      chassis?: string;
      renavam?: string;
      price: number;
      description?: string;
      acceptsFinancing: boolean;
      acceptsTrade: boolean;
      sellerEmail?: string;
      photoUrls?: string[];
    },
    adminUserId: string,
  ) {
    // Resolve seller
    let seller = dto.sellerEmail
      ? await this.prisma.user.findUnique({ where: { email: dto.sellerEmail } })
      : null;

    if (!seller) {
      // Use the authenticated admin's own account first
      seller = await this.prisma.user.findUnique({ where: { id: adminUserId } });
    }
    if (!seller) {
      seller = await this.prisma.user.findFirst({ where: { type: 'ADMIN' } });
    }
    if (!seller) throw new NotFoundException('Nenhum usuário disponível para associar ao anúncio.');

    // Build description with extra fields
    const extras: string[] = [];
    if (dto.bodyType) extras.push(dto.bodyType);
    if (dto.doors) extras.push(`${dto.doors} portas`);
    const description = [dto.description, extras.join(' · ')].filter(Boolean).join('\n');

    return this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // 1. Create vehicle
      const vehicle = await tx.vehicle.create({
        data: {
          ownerId: seller!.id,
          brand: dto.brand,
          model: dto.model,
          year: dto.year,
          color: dto.color,
          mileage: dto.mileage,
          fuelType: dto.fuelType as any,
          transmission: dto.transmission as any,
          plate: dto.plate || null,
          chassis: dto.chassis || null,
          renavam: dto.renavam || null,
          status: 'LISTED',
        },
      });

      // 2. Create auto-approved inspection with media (required for listing)
      const inspection = await tx.inspection.create({
        data: {
          vehicleId: vehicle.id,
          type: 'PRESENTIAL',
          status: 'APPROVED',
          score: 100,
          reviewedAt: new Date(),
          reviewNotes: 'Cadastrado manualmente pelo administrador.',
        },
      });

      if (dto.photoUrls?.length) {
        await tx.inspectionMedia.createMany({
          data: dto.photoUrls.map((url, i) => ({
            inspectionId: inspection.id,
            type: /\.(mp4|mov|avi|webm)$/i.test(url) ? 'VIDEO' : ('PHOTO' as any),
            url,
            key: `admin/${vehicle.id}/${i}-${Date.now()}`,
            hash: `admin-${vehicle.id}-${i}`,
          })),
        });
      }

      // 3. Create listing
      const expiresAt = new Date();
      expiresAt.setFullYear(expiresAt.getFullYear() + 1);

      const listing = await tx.listing.create({
        data: {
          vehicleId: vehicle.id,
          sellerId: seller!.id,
          price: dto.price,
          description: description || null,
          acceptsFinancing: dto.acceptsFinancing,
          acceptsTrade: dto.acceptsTrade,
          status: 'ACTIVE',
          expiresAt,
        },
        include: {
          vehicle: { select: { brand: true, model: true, year: true, plate: true } },
          seller: { select: { name: true, email: true } },
        },
      });

      return listing;
    });
  }
}


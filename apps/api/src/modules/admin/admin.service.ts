import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@conneqtcar/database';
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
}


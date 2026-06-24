"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@conneqtcar/database");
const bcrypt = __importStar(require("bcryptjs"));
const database_module_1 = require("../database/database.module");
let AdminService = class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboardStats() {
        const [totalUsers, totalListings, activeListings, pendingInspections, awaitingReviewInspections, totalDealers,] = await Promise.all([
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
    async blockUser(userId, reason) {
        return this.prisma.user.update({
            where: { id: userId },
            data: { status: 'BLOCKED', blockReason: reason },
            select: { id: true, status: true },
        });
    }
    async approveKyc(userId) {
        return this.prisma.user.update({
            where: { id: userId },
            data: { kycStatus: 'APPROVED', kycApprovedAt: new Date() },
            select: { id: true, kycStatus: true },
        });
    }
    async rejectKyc(userId, reason) {
        return this.prisma.user.update({
            where: { id: userId },
            data: { kycStatus: 'REJECTED', kycRejectionReason: reason },
            select: { id: true, kycStatus: true },
        });
    }
    async createDealer(dto) {
        const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (existing)
            throw new common_1.ConflictException('E-mail já cadastrado.');
        const passwordHash = await bcrypt.hash(dto.password, 12);
        return this.prisma.$transaction(async (tx) => {
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
    async promoteToAdmin(userId) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('Usuário não encontrado.');
        if (user.type === 'ADMIN')
            throw new common_1.ConflictException('Usuário já é administrador.');
        return this.prisma.user.update({
            where: { id: userId },
            data: { type: 'ADMIN' },
            select: { id: true, name: true, email: true, type: true },
        });
    }
    async getListing(listingId) {
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
        if (!listing)
            throw new common_1.NotFoundException('Anúncio não encontrado.');
        return listing;
    }
    async updateListing(listingId, dto) {
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
        if (!listing)
            throw new common_1.NotFoundException('Anúncio não encontrado.');
        const { brand, model, year, color, mileage, fuelType, transmission, bodyType, doors, plate, chassis, renavam, price, description, acceptsFinancing, acceptsTrade, photoUrls } = dto;
        await this.prisma.$transaction(async (tx) => {
            await tx.vehicle.update({
                where: { id: listing.vehicleId },
                data: {
                    ...(brand !== undefined && { brand }),
                    ...(model !== undefined && { model }),
                    ...(year !== undefined && { year }),
                    ...(color !== undefined && { color }),
                    ...(mileage !== undefined && { mileage }),
                    ...(fuelType !== undefined && { fuelType: fuelType }),
                    ...(transmission !== undefined && { transmission: transmission }),
                    ...(plate !== undefined && { plate: plate || null }),
                    ...(chassis !== undefined && { chassis: chassis || null }),
                    ...(renavam !== undefined && { renavam: renavam || null }),
                },
            });
            const extras = [];
            if (bodyType)
                extras.push(bodyType);
            if (doors)
                extras.push(`${doors} portas`);
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
                                type: /\.(mp4|mov|avi|webm)$/i.test(url) ? 'VIDEO' : 'PHOTO',
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
    async deactivateListing(listingId) {
        return this.prisma.listing.update({
            where: { id: listingId },
            data: { status: 'INACTIVE' },
            select: { id: true, status: true },
        });
    }
    async getAllInspections(page = 1, limit = 50, status) {
        const skip = (page - 1) * limit;
        const where = status ? { status: status } : {};
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
    async createListing(dto, adminUserId) {
        let seller = dto.sellerEmail
            ? await this.prisma.user.findUnique({ where: { email: dto.sellerEmail } })
            : null;
        if (!seller) {
            seller = await this.prisma.user.findUnique({ where: { id: adminUserId } });
        }
        if (!seller) {
            seller = await this.prisma.user.findFirst({ where: { type: 'ADMIN' } });
        }
        if (!seller)
            throw new common_1.NotFoundException('Nenhum usuário disponível para associar ao anúncio.');
        const extras = [];
        if (dto.bodyType)
            extras.push(dto.bodyType);
        if (dto.doors)
            extras.push(`${dto.doors} portas`);
        const description = [dto.description, extras.join(' · ')].filter(Boolean).join('\n');
        return this.prisma.$transaction(async (tx) => {
            const vehicle = await tx.vehicle.create({
                data: {
                    ownerId: seller.id,
                    brand: dto.brand,
                    model: dto.model,
                    year: dto.year,
                    color: dto.color,
                    mileage: dto.mileage,
                    fuelType: dto.fuelType,
                    transmission: dto.transmission,
                    plate: dto.plate || null,
                    chassis: dto.chassis || null,
                    renavam: dto.renavam || null,
                    status: 'LISTED',
                },
            });
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
                        type: /\.(mp4|mov|avi|webm)$/i.test(url) ? 'VIDEO' : 'PHOTO',
                        url,
                        key: `admin/${vehicle.id}/${i}-${Date.now()}`,
                        hash: `admin-${vehicle.id}-${i}`,
                    })),
                });
            }
            const expiresAt = new Date();
            expiresAt.setFullYear(expiresAt.getFullYear() + 1);
            const listing = await tx.listing.create({
                data: {
                    vehicleId: vehicle.id,
                    sellerId: seller.id,
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
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_module_1.PRISMA_SERVICE)),
    __metadata("design:paramtypes", [database_1.PrismaClient])
], AdminService);

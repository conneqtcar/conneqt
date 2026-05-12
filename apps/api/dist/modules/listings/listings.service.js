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
exports.ListingsService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@conneqtcar/database");
const database_module_1 = require("../database/database.module");
let ListingsService = class ListingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(ownerId, dto) {
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
        if (!vehicle)
            throw new common_1.NotFoundException('Veículo não encontrado.');
        if (vehicle.ownerId !== ownerId)
            throw new common_1.ForbiddenException('Acesso negado.');
        if (vehicle.inspections.length === 0) {
            throw new common_1.BadRequestException('O veículo precisa ter uma inspeção aprovada antes de ser publicado.');
        }
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 90);
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
    async search(dto) {
        const { page = 1, limit = 20, brand, model, yearMin, yearMax, priceMin, priceMax, mileageMax, city, fuelType, transmission, } = dto;
        const skip = (page - 1) * limit;
        const where = {
            status: 'ACTIVE',
            vehicle: {
                ...(brand && { brand: { contains: brand, mode: 'insensitive' } }),
                ...(model && { model: { contains: model, mode: 'insensitive' } }),
                ...(yearMin && { year: { gte: yearMin } }),
                ...(yearMax && { year: { lte: yearMax } }),
                ...(mileageMax && { mileage: { lte: mileageMax } }),
                ...(fuelType && { fuelType }),
                ...(transmission && { transmission }),
            },
            ...(priceMin && { price: { gte: priceMin } }),
            ...(priceMax && { price: { lte: priceMax } }),
        };
        const [total, listings] = await Promise.all([
            this.prisma.listing.count({ where }),
            this.prisma.listing.findMany({
                where,
                include: {
                    vehicle: {
                        include: {
                            inspections: {
                                where: { status: 'APPROVED' },
                                select: { id: true, score: true },
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
    async findById(id) {
        const listing = await this.prisma.listing.findUnique({
            where: { id },
            include: {
                vehicle: {
                    include: {
                        inspections: {
                            where: { status: 'APPROVED' },
                            include: {
                                media: { where: { type: 'PHOTO' }, orderBy: { createdAt: 'asc' } },
                                items: { orderBy: [{ category: 'asc' }, { item: 'asc' }], take: 50 },
                            },
                            take: 1,
                        },
                    },
                },
                seller: { select: { id: true, name: true, kycStatus: true, phone: true } },
                _count: { select: { proposals: true } },
            },
        });
        if (!listing)
            throw new common_1.NotFoundException('Anúncio não encontrado.');
        this.prisma.listing
            .update({ where: { id }, data: { views: { increment: 1 } } })
            .catch(() => undefined);
        return listing;
    }
    async deactivate(id, ownerId) {
        const listing = await this.prisma.listing.findUnique({ where: { id } });
        if (!listing)
            throw new common_1.NotFoundException('Anúncio não encontrado.');
        if (listing.sellerId !== ownerId)
            throw new common_1.ForbiddenException('Acesso negado.');
        return this.prisma.listing.update({
            where: { id },
            data: { status: 'INACTIVE' },
        });
    }
};
exports.ListingsService = ListingsService;
exports.ListingsService = ListingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_module_1.PRISMA_SERVICE)),
    __metadata("design:paramtypes", [database_1.PrismaClient])
], ListingsService);

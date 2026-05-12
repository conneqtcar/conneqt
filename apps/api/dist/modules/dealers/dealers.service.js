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
exports.DealersService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@conneqtcar/database");
const database_module_1 = require("../database/database.module");
let DealersService = class DealersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        const existing = await this.prisma.dealer.findUnique({ where: { userId } });
        if (existing)
            throw new common_1.ConflictException('Usuário já possui cadastro de lojista.');
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
    async findById(id) {
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
        if (!dealer)
            throw new common_1.NotFoundException('Lojista não encontrado.');
        return dealer;
    }
    async findByUser(userId) {
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
};
exports.DealersService = DealersService;
exports.DealersService = DealersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_module_1.PRISMA_SERVICE)),
    __metadata("design:paramtypes", [database_1.PrismaClient])
], DealersService);

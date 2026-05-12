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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@conneqtcar/database");
const database_module_1 = require("../database/database.module");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
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
        if (!user)
            throw new common_1.NotFoundException('Usuário não encontrado.');
        return user;
    }
    async update(id, dto) {
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
    async submitKyc(userId, data) {
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
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_module_1.PRISMA_SERVICE)),
    __metadata("design:paramtypes", [database_1.PrismaClient])
], UsersService);

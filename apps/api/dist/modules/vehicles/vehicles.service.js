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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@conneqtcar/database");
const database_module_1 = require("../database/database.module");
const fipe_service_1 = require("../fipe/fipe.service");
let VehiclesService = class VehiclesService {
    prisma;
    fipeService;
    constructor(prisma, fipeService) {
        this.prisma = prisma;
        this.fipeService = fipeService;
    }
    async create(ownerId, dto) {
        let fipeData = {};
        if (dto.plate) {
            try {
                fipeData = await this.fipeService.queryByPlate(dto.plate);
            }
            catch {
            }
        }
        return this.prisma.vehicle.create({
            data: {
                ownerId,
                plate: dto.plate,
                chassis: dto.chassis,
                renavam: dto.renavam,
                brand: dto.brand ?? fipeData.brand,
                model: dto.model ?? fipeData.model,
                year: dto.year ?? fipeData.modelYear,
                color: dto.color,
                mileage: dto.mileage,
                fuelType: dto.fuelType,
                transmission: dto.transmission,
                fipeCode: fipeData.fipeCode,
                status: 'DRAFT',
            },
        });
    }
    async findByOwner(ownerId) {
        return this.prisma.vehicle.findMany({
            where: { ownerId },
            include: { inspections: { select: { id: true, status: true, score: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findById(id) {
        const vehicle = await this.prisma.vehicle.findUnique({
            where: { id },
            include: {
                owner: { select: { id: true, name: true, kycStatus: true } },
                inspections: {
                    include: { media: true, items: true },
                    orderBy: { createdAt: 'desc' },
                    take: 1,
                },
                listings: { where: { status: 'ACTIVE' }, take: 1 },
            },
        });
        if (!vehicle)
            throw new common_1.NotFoundException('Veículo não encontrado.');
        return vehicle;
    }
    async update(id, ownerId, dto) {
        const vehicle = await this.prisma.vehicle.findUnique({ where: { id } });
        if (!vehicle)
            throw new common_1.NotFoundException('Veículo não encontrado.');
        if (vehicle.ownerId !== ownerId)
            throw new common_1.ForbiddenException('Acesso negado.');
        return this.prisma.vehicle.update({ where: { id }, data: dto });
    }
    async getFipeSuggestion(plate) {
        return this.fipeService.queryByPlate(plate);
    }
};
exports.VehiclesService = VehiclesService;
exports.VehiclesService = VehiclesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_module_1.PRISMA_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.PrismaClient !== "undefined" && database_1.PrismaClient) === "function" ? _a : Object, fipe_service_1.FipeService])
], VehiclesService);

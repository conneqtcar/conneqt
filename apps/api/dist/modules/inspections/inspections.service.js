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
exports.InspectionsService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const database_1 = require("@conneqtcar/database");
const database_module_1 = require("../database/database.module");
const storage_service_1 = require("../storage/storage.service");
const INSPECTION_AI_THRESHOLD = 85;
let InspectionsService = class InspectionsService {
    prisma;
    storageService;
    eventEmitter;
    constructor(prisma, storageService, eventEmitter) {
        this.prisma = prisma;
        this.storageService = storageService;
        this.eventEmitter = eventEmitter;
    }
    async create(ownerId, dto) {
        const vehicle = await this.prisma.vehicle.findUnique({
            where: { id: dto.vehicleId },
        });
        if (!vehicle)
            throw new common_1.NotFoundException('Veículo não encontrado.');
        if (vehicle.ownerId !== ownerId)
            throw new common_1.ForbiddenException('Acesso negado.');
        const activeInspection = await this.prisma.inspection.findFirst({
            where: { vehicleId: dto.vehicleId, status: { in: ['PENDING', 'IN_PROGRESS'] } },
        });
        if (activeInspection) {
            throw new common_1.BadRequestException('Já existe uma inspeção ativa para este veículo.');
        }
        return this.prisma.inspection.create({
            data: {
                vehicleId: dto.vehicleId,
                type: dto.type ?? 'REMOTE',
                status: 'PENDING',
            },
        });
    }
    async getUploadUrl(inspectionId, ownerId, fileName, mimeType) {
        const inspection = await this.assertOwnership(inspectionId, ownerId);
        const key = `inspections/${inspectionId}/${Date.now()}-${fileName}`;
        const presignedUrl = await this.storageService.getPresignedPutUrl(key, mimeType);
        return { uploadUrl: presignedUrl, key };
    }
    async submitMedia(inspectionId, ownerId, dto) {
        const inspection = await this.assertOwnership(inspectionId, ownerId);
        if (inspection.status === 'APPROVED' || inspection.status === 'REJECTED') {
            throw new common_1.BadRequestException('Esta inspeção já foi finalizada.');
        }
        await this.prisma.inspection.update({
            where: { id: inspectionId },
            data: { status: 'IN_PROGRESS' },
        });
        const media = await this.prisma.inspectionMedia.createMany({
            data: dto.media.map((m) => ({
                inspectionId,
                type: m.type,
                url: m.url,
                key: m.key,
                hash: m.hash,
                metadata: m.metadata,
            })),
        });
        this.eventEmitter.emit('inspection.media_submitted', {
            inspectionId,
            vehicleId: inspection.vehicleId,
        });
        return { message: 'Mídia recebida. Análise em andamento.', count: media.count };
    }
    async getStatus(inspectionId) {
        const inspection = await this.prisma.inspection.findUnique({
            where: { id: inspectionId },
            include: {
                media: { select: { id: true, type: true, url: true } },
                items: true,
                reviewer: { select: { id: true, name: true } },
            },
        });
        if (!inspection)
            throw new common_1.NotFoundException('Inspeção não encontrada.');
        return inspection;
    }
    async reviewByAdmin(inspectionId, reviewerId, dto) {
        const inspection = await this.prisma.inspection.findUnique({
            where: { id: inspectionId },
        });
        if (!inspection)
            throw new common_1.NotFoundException('Inspeção não encontrada.');
        const updatedInspection = await this.prisma.inspection.update({
            where: { id: inspectionId },
            data: {
                status: dto.approved ? 'APPROVED' : 'REJECTED',
                score: dto.score,
                reviewerId,
                reviewedAt: new Date(),
                reviewNotes: dto.notes,
            },
        });
        this.eventEmitter.emit('inspection.reviewed', {
            inspectionId,
            vehicleId: inspection.vehicleId,
            approved: dto.approved,
        });
        return updatedInspection;
    }
    async getPendingReviewQueue(page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [total, inspections] = await Promise.all([
            this.prisma.inspection.count({ where: { status: 'AWAITING_REVIEW' } }),
            this.prisma.inspection.findMany({
                where: { status: 'AWAITING_REVIEW' },
                include: {
                    vehicle: { select: { id: true, brand: true, model: true, year: true, plate: true } },
                    media: { select: { id: true, type: true, url: true }, take: 5 },
                },
                skip,
                take: limit,
                orderBy: { createdAt: 'asc' },
            }),
        ]);
        return { data: inspections, total, page, limit, totalPages: Math.ceil(total / limit) };
    }
    async assertOwnership(inspectionId, ownerId) {
        const inspection = await this.prisma.inspection.findUnique({
            where: { id: inspectionId },
            include: { vehicle: { select: { ownerId: true } } },
        });
        if (!inspection)
            throw new common_1.NotFoundException('Inspeção não encontrada.');
        if (inspection.vehicle.ownerId !== ownerId)
            throw new common_1.ForbiddenException('Acesso negado.');
        return inspection;
    }
};
exports.InspectionsService = InspectionsService;
exports.InspectionsService = InspectionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_module_1.PRISMA_SERVICE)),
    __metadata("design:paramtypes", [database_1.PrismaClient,
        storage_service_1.StorageService,
        event_emitter_1.EventEmitter2])
], InspectionsService);

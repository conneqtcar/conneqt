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
exports.ProposalsService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const database_1 = require("@conneqtcar/database");
const database_module_1 = require("../database/database.module");
let ProposalsService = class ProposalsService {
    prisma;
    eventEmitter;
    constructor(prisma, eventEmitter) {
        this.prisma = prisma;
        this.eventEmitter = eventEmitter;
    }
    async create(buyerId, dto) {
        const listing = await this.prisma.listing.findUnique({
            where: { id: dto.listingId, status: 'ACTIVE' },
        });
        if (!listing)
            throw new common_1.NotFoundException('Anúncio não encontrado ou inativo.');
        if (listing.sellerId === buyerId) {
            throw new common_1.BadRequestException('Você não pode fazer uma proposta no próprio anúncio.');
        }
        const proposal = await this.prisma.proposal.create({
            data: {
                listingId: dto.listingId,
                buyerId,
                amount: dto.amount,
                message: dto.message,
                status: 'PENDING',
            },
            include: {
                listing: { select: { sellerId: true, price: true } },
                buyer: { select: { id: true, name: true } },
            },
        });
        this.eventEmitter.emit('proposal.created', { proposal });
        return proposal;
    }
    async respond(proposalId, sellerId, action, counterAmount) {
        const proposal = await this.prisma.proposal.findUnique({
            where: { id: proposalId },
            include: { listing: true },
        });
        if (!proposal)
            throw new common_1.NotFoundException('Proposta não encontrada.');
        if (proposal.listing.sellerId !== sellerId)
            throw new common_1.ForbiddenException('Acesso negado.');
        if (proposal.status !== 'PENDING')
            throw new common_1.BadRequestException('Esta proposta já foi respondida.');
        const updated = await this.prisma.proposal.update({
            where: { id: proposalId },
            data: {
                status: action,
                counterAmount: action === 'COUNTER' ? counterAmount : undefined,
                respondedAt: new Date(),
            },
        });
        this.eventEmitter.emit('proposal.responded', { proposalId, action });
        return updated;
    }
    async findByListing(listingId, sellerId) {
        const listing = await this.prisma.listing.findUnique({ where: { id: listingId } });
        if (!listing)
            throw new common_1.NotFoundException('Anúncio não encontrado.');
        if (listing.sellerId !== sellerId)
            throw new common_1.ForbiddenException('Acesso negado.');
        return this.prisma.proposal.findMany({
            where: { listingId },
            include: { buyer: { select: { id: true, name: true, kycStatus: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findByBuyer(buyerId) {
        return this.prisma.proposal.findMany({
            where: { buyerId },
            include: {
                listing: {
                    include: {
                        vehicle: { select: { brand: true, model: true, year: true } },
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
};
exports.ProposalsService = ProposalsService;
exports.ProposalsService = ProposalsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_module_1.PRISMA_SERVICE)),
    __metadata("design:paramtypes", [database_1.PrismaClient,
        event_emitter_1.EventEmitter2])
], ProposalsService);

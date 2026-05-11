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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const event_emitter_1 = require("@nestjs/event-emitter");
let NotificationsService = class NotificationsService {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    async send(payload) {
        console.log(`[Notification][${payload.type.toUpperCase()}] Para: ${payload.to} | ${payload.message}`);
    }
    async onProposalCreated(event) {
        await this.send({
            to: event.proposal.listing.sellerId,
            message: `Nova proposta de R$ ${event.proposal.amount.toLocaleString('pt-BR')} recebida para o seu veículo!`,
            type: 'push',
        });
    }
    async onInspectionReviewed(event) {
        const message = event.approved
            ? 'Sua inspeção foi aprovada! Seu veículo já está disponível para publicação.'
            : 'Sua inspeção precisa de ajustes. Verifique o laudo para detalhes.';
        console.log(`[Notification] Veículo ${event.vehicleId}: ${message}`);
    }
};
exports.NotificationsService = NotificationsService;
__decorate([
    (0, event_emitter_1.OnEvent)('proposal.created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsService.prototype, "onProposalCreated", null);
__decorate([
    (0, event_emitter_1.OnEvent)('inspection.reviewed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsService.prototype, "onInspectionReviewed", null);
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], NotificationsService);

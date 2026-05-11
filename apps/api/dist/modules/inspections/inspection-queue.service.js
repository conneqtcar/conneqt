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
exports.InspectionQueueService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const inspection_ai_service_1 = require("./inspection-ai.service");
const inspections_service_1 = require("./inspections.service");
const AI_APPROVAL_THRESHOLD = 85;
let InspectionQueueService = class InspectionQueueService {
    aiService;
    inspectionsService;
    constructor(aiService, inspectionsService) {
        this.aiService = aiService;
        this.inspectionsService = inspectionsService;
    }
    async handleMediaSubmitted(event) {
        console.log(`[InspectionQueue] Processando inspeção ${event.inspectionId} com IA...`);
        try {
            const result = await this.aiService.analyzeInspection(event.inspectionId);
            if (result.score >= AI_APPROVAL_THRESHOLD) {
                await this.inspectionsService.reviewByAdmin(event.inspectionId, 'SYSTEM_AI', {
                    approved: true,
                    score: result.score,
                    notes: `Aprovação automática por IA. Score: ${result.score}/100`,
                });
                console.log(`[InspectionQueue] Inspeção ${event.inspectionId} APROVADA pela IA (score: ${result.score})`);
            }
            else {
                console.log(`[InspectionQueue] Inspeção ${event.inspectionId} encaminhada para revisão humana (score: ${result.score})`);
            }
        }
        catch (error) {
            console.error(`[InspectionQueue] Erro ao processar inspeção ${event.inspectionId}:`, error);
        }
    }
    async handleReviewed(event) {
        if (event.approved) {
            console.log(`[InspectionQueue] Veículo ${event.vehicleId} aprovado — publicando anúncio...`);
        }
    }
};
exports.InspectionQueueService = InspectionQueueService;
__decorate([
    (0, event_emitter_1.OnEvent)('inspection.media_submitted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InspectionQueueService.prototype, "handleMediaSubmitted", null);
__decorate([
    (0, event_emitter_1.OnEvent)('inspection.reviewed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InspectionQueueService.prototype, "handleReviewed", null);
exports.InspectionQueueService = InspectionQueueService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [inspection_ai_service_1.InspectionAiService,
        inspections_service_1.InspectionsService])
], InspectionQueueService);

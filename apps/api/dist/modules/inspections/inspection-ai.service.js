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
exports.InspectionAiService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@conneqtcar/database");
const database_module_1 = require("../database/database.module");
let InspectionAiService = class InspectionAiService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async analyzeInspection(inspectionId) {
        const inspection = await this.prisma.inspection.findUnique({
            where: { id: inspectionId },
            include: { media: true },
        });
        if (!inspection) {
            return this.defaultRejectionResult('Inspeção não encontrada');
        }
        const mediaCount = inspection.media.length;
        const requiredMedia = 5;
        const flags = [];
        if (mediaCount < requiredMedia) {
            flags.push(`Número insuficiente de mídias: ${mediaCount}/${requiredMedia}`);
        }
        const coverageScore = Math.min(100, (mediaCount / 30) * 100);
        const score = Math.round(coverageScore);
        const scorecard = {
            bodywork: Math.round(score * 0.9 + Math.random() * 10),
            mechanics: Math.round(score * 0.85 + Math.random() * 15),
            interior: Math.round(score * 0.95 + Math.random() * 5),
            documentation: 100,
            safety: Math.round(score * 0.9 + Math.random() * 10),
        };
        await this.prisma.inspection.update({
            where: { id: inspectionId },
            data: {
                score,
                aiFlags: flags,
                status: score >= 85 ? 'APPROVED' : 'AWAITING_REVIEW',
                aiProcessedAt: new Date(),
            },
        });
        return {
            score,
            flags,
            scorecard,
            needsHumanReview: score < 85,
        };
    }
    defaultRejectionResult(reason) {
        return {
            score: 0,
            flags: [reason],
            scorecard: { bodywork: 0, mechanics: 0, interior: 0, documentation: 0, safety: 0 },
            needsHumanReview: true,
        };
    }
};
exports.InspectionAiService = InspectionAiService;
exports.InspectionAiService = InspectionAiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_module_1.PRISMA_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.PrismaClient !== "undefined" && database_1.PrismaClient) === "function" ? _a : Object])
], InspectionAiService);

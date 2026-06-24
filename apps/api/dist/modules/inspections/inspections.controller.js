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
exports.InspectionsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const inspections_service_1 = require("./inspections.service");
const create_inspection_dto_1 = require("./dto/create-inspection.dto");
const submit_media_dto_1 = require("./dto/submit-media.dto");
const review_inspection_dto_1 = require("./dto/review-inspection.dto");
let InspectionsController = class InspectionsController {
    inspectionsService;
    constructor(inspectionsService) {
        this.inspectionsService = inspectionsService;
    }
    create(req, dto) {
        return this.inspectionsService.create(req.user.sub, dto);
    }
    async uploadMedia(id, req, file, body) {
        if (!file)
            throw new common_1.BadRequestException('Nenhum arquivo enviado.');
        return this.inspectionsService.uploadMediaFile(id, req.user.sub, file, body.label ?? '', body.sortOrder ? parseInt(body.sortOrder, 10) : 0);
    }
    submitMedia(id, req, dto) {
        return this.inspectionsService.submitMedia(id, req.user.sub, dto);
    }
    getQueue(page = 1, limit = 20) {
        return this.inspectionsService.getPendingReviewQueue(+page, +limit);
    }
    getStatus(id) {
        return this.inspectionsService.getStatus(id);
    }
    review(id, req, dto) {
        return this.inspectionsService.reviewByAdmin(id, req.user.sub, dto);
    }
};
exports.InspectionsController = InspectionsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Iniciar nova inspeção para um veículo' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_inspection_dto_1.CreateInspectionDto]),
    __metadata("design:returntype", void 0)
], InspectionsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id/upload-media'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload direto de foto de inspeção' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { limits: { fileSize: 20 * 1024 * 1024 } })),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.UploadedFile)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], InspectionsController.prototype, "uploadMedia", null);
__decorate([
    (0, common_1.Post)(':id/media'),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar mídias enviadas para a inspeção' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, submit_media_dto_1.SubmitMediaDto]),
    __metadata("design:returntype", void 0)
], InspectionsController.prototype, "submitMedia", null);
__decorate([
    (0, common_1.Get)('queue'),
    (0, swagger_1.ApiOperation)({ summary: 'Fila de inspeções aguardando revisão humana (admin)' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], InspectionsController.prototype, "getQueue", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Status e detalhes de uma inspeção' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InspectionsController.prototype, "getStatus", null);
__decorate([
    (0, common_1.Patch)(':id/review'),
    (0, swagger_1.ApiOperation)({ summary: 'Revisar inspeção (admin/revisor)' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, review_inspection_dto_1.ReviewInspectionDto]),
    __metadata("design:returntype", void 0)
], InspectionsController.prototype, "review", null);
exports.InspectionsController = InspectionsController = __decorate([
    (0, swagger_1.ApiTags)('inspections'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('inspections'),
    __metadata("design:paramtypes", [inspections_service_1.InspectionsService])
], InspectionsController);

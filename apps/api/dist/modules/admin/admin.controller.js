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
exports.AdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const admin_service_1 = require("./admin.service");
const storage_service_1 = require("../storage/storage.service");
let AdminController = class AdminController {
    adminService;
    storageService;
    constructor(adminService, storageService) {
        this.adminService = adminService;
        this.storageService = storageService;
    }
    dashboard() {
        return this.adminService.getDashboardStats();
    }
    getUsers(page = 1, limit = 20) {
        return this.adminService.getUsers(+page, +limit);
    }
    blockUser(id, body) {
        return this.adminService.blockUser(id, body.reason);
    }
    approveKyc(id) {
        return this.adminService.approveKyc(id);
    }
    rejectKyc(id, body) {
        return this.adminService.rejectKyc(id, body.reason);
    }
    promoteToAdmin(id) {
        return this.adminService.promoteToAdmin(id);
    }
    createDealer(body) {
        return this.adminService.createDealer(body);
    }
    createListing(req, body) {
        return this.adminService.createListing(body, req.user.sub);
    }
    getListing(id) {
        return this.adminService.getListing(id);
    }
    updateListing(id, body) {
        return this.adminService.updateListing(id, body);
    }
    deactivateListing(id) {
        return this.adminService.deactivateListing(id);
    }
    getInspections(page = 1, limit = 50, status) {
        return this.adminService.getAllInspections(+page, +limit, status);
    }
    async uploadPhoto(file) {
        if (!file)
            throw new common_1.BadRequestException('Nenhum arquivo enviado.');
        if (!file.mimetype.startsWith('image/') && !file.mimetype.startsWith('video/')) {
            throw new common_1.BadRequestException('Apenas imagens e vídeos são permitidos.');
        }
        const ext = file.originalname.split('.').pop() ?? 'jpg';
        const key = `vehicles/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const url = await this.storageService.uploadBuffer(key, file.buffer, file.mimetype);
        return { url };
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, swagger_1.ApiOperation)({ summary: 'Dashboard — métricas em tempo real' }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "dashboard", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os usuários (admin)' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Patch)('users/:id/block'),
    (0, swagger_1.ApiOperation)({ summary: 'Bloquear usuário' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "blockUser", null);
__decorate([
    (0, common_1.Patch)('users/:id/kyc/approve'),
    (0, swagger_1.ApiOperation)({ summary: 'Aprovar KYC de usuário' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "approveKyc", null);
__decorate([
    (0, common_1.Patch)('users/:id/kyc/reject'),
    (0, swagger_1.ApiOperation)({ summary: 'Reprovar KYC de usuário' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "rejectKyc", null);
__decorate([
    (0, common_1.Patch)('users/:id/promote-admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Promover usuário a administrador' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "promoteToAdmin", null);
__decorate([
    (0, common_1.Post)('dealers'),
    (0, swagger_1.ApiOperation)({ summary: 'Cadastrar lojista manualmente (admin)' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createDealer", null);
__decorate([
    (0, common_1.Post)('listings'),
    (0, swagger_1.ApiOperation)({ summary: 'Criar anúncio manualmente (admin)' }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "createListing", null);
__decorate([
    (0, common_1.Get)('listings/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar anúncio por ID (admin)' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getListing", null);
__decorate([
    (0, common_1.Patch)('listings/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Editar anúncio (admin)' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateListing", null);
__decorate([
    (0, common_1.Patch)('listings/:id/deactivate'),
    (0, swagger_1.ApiOperation)({ summary: 'Desativar anúncio (admin)' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "deactivateListing", null);
__decorate([
    (0, common_1.Get)('inspections'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as inspeções (admin)' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getInspections", null);
__decorate([
    (0, common_1.Post)('upload-photo'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload de foto de veículo (admin)' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { limits: { fileSize: 20 * 1024 * 1024 } })),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "uploadPhoto", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('admin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        storage_service_1.StorageService])
], AdminController);

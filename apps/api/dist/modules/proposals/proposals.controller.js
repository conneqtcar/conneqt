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
exports.ProposalsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const proposals_service_1 = require("./proposals.service");
const create_proposal_dto_1 = require("./dto/create-proposal.dto");
const respond_proposal_dto_1 = require("./dto/respond-proposal.dto");
let ProposalsController = class ProposalsController {
    proposalsService;
    constructor(proposalsService) {
        this.proposalsService = proposalsService;
    }
    create(req, dto) {
        return this.proposalsService.create(req.user.sub, dto);
    }
    myProposals(req) {
        return this.proposalsService.findByBuyer(req.user.sub);
    }
    byListing(listingId, req) {
        return this.proposalsService.findByListing(listingId, req.user.sub);
    }
    respond(id, req, dto) {
        return this.proposalsService.respond(id, req.user.sub, dto.action, dto.counterAmount);
    }
};
exports.ProposalsController = ProposalsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Enviar proposta de compra' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_proposal_dto_1.CreateProposalDto]),
    __metadata("design:returntype", void 0)
], ProposalsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('mine'),
    (0, swagger_1.ApiOperation)({ summary: 'Propostas enviadas pelo comprador' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProposalsController.prototype, "myProposals", null);
__decorate([
    (0, common_1.Get)('listing/:listingId'),
    (0, swagger_1.ApiOperation)({ summary: 'Propostas recebidas para um anúncio (vendedor)' }),
    __param(0, (0, common_1.Param)('listingId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProposalsController.prototype, "byListing", null);
__decorate([
    (0, common_1.Patch)(':id/respond'),
    (0, swagger_1.ApiOperation)({ summary: 'Aceitar, recusar ou fazer contra-proposta' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, respond_proposal_dto_1.RespondProposalDto]),
    __metadata("design:returntype", void 0)
], ProposalsController.prototype, "respond", null);
exports.ProposalsController = ProposalsController = __decorate([
    (0, swagger_1.ApiTags)('proposals'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('proposals'),
    __metadata("design:paramtypes", [proposals_service_1.ProposalsService])
], ProposalsController);

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
exports.FipeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const fipe_service_1 = require("./fipe.service");
let FipeController = class FipeController {
    fipeService;
    constructor(fipeService) {
        this.fipeService = fipeService;
    }
    getBrands(type = 'cars') {
        return this.fipeService.getBrands(type);
    }
    getModels(brandCode, type = 'cars') {
        return this.fipeService.getModels(brandCode, type);
    }
    getYears(brandCode, modelCode, type = 'cars') {
        return this.fipeService.getModelYears(brandCode, modelCode, type);
    }
    getPrice(brandCode, modelCode, yearCode, type = 'cars') {
        return this.fipeService.getPrice(brandCode, modelCode, yearCode, type);
    }
    queryByPlate(plate) {
        return this.fipeService.queryByPlate(plate);
    }
};
exports.FipeController = FipeController;
__decorate([
    (0, common_1.Get)('brands'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar marcas (FIPE)' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FipeController.prototype, "getBrands", null);
__decorate([
    (0, common_1.Get)('brands/:brandCode/models'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar modelos por marca (FIPE)' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('brandCode')),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FipeController.prototype, "getModels", null);
__decorate([
    (0, common_1.Get)('brands/:brandCode/models/:modelCode/years'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar anos do modelo (FIPE)' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('brandCode')),
    __param(1, (0, common_1.Param)('modelCode')),
    __param(2, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], FipeController.prototype, "getYears", null);
__decorate([
    (0, common_1.Get)('brands/:brandCode/models/:modelCode/years/:yearCode/price'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar preço FIPE' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('brandCode')),
    __param(1, (0, common_1.Param)('modelCode')),
    __param(2, (0, common_1.Param)('yearCode')),
    __param(3, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], FipeController.prototype, "getPrice", null);
__decorate([
    (0, common_1.Get)('plate/:plate'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar dados do veículo pela placa' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('plate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FipeController.prototype, "queryByPlate", null);
exports.FipeController = FipeController = __decorate([
    (0, swagger_1.ApiTags)('fipe'),
    (0, common_1.Controller)('fipe'),
    __metadata("design:paramtypes", [fipe_service_1.FipeService])
], FipeController);

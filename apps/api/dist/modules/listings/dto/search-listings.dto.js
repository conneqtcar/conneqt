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
exports.SearchListingsDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class SearchListingsDto {
    brand;
    model;
    yearMin;
    yearMax;
    priceMin;
    priceMax;
    mileageMax;
    city;
    fuelType;
    transmission;
    page;
    limit;
}
exports.SearchListingsDto = SearchListingsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Toyota' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchListingsDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Corolla' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchListingsDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 2018 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], SearchListingsDto.prototype, "yearMin", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 2024 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], SearchListingsDto.prototype, "yearMax", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 40000 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], SearchListingsDto.prototype, "priceMin", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 120000 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], SearchListingsDto.prototype, "priceMax", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 80000 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], SearchListingsDto.prototype, "mileageMax", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchListingsDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['FLEX', 'GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID'] }),
    (0, class_validator_1.IsEnum)(['FLEX', 'GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchListingsDto.prototype, "fuelType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['MANUAL', 'AUTOMATIC', 'CVT', 'SEMI_AUTO'] }),
    (0, class_validator_1.IsEnum)(['MANUAL', 'AUTOMATIC', 'CVT', 'SEMI_AUTO']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchListingsDto.prototype, "transmission", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], SearchListingsDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 20 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], SearchListingsDto.prototype, "limit", void 0);

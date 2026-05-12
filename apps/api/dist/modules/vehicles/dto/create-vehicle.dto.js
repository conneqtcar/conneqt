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
exports.CreateVehicleDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateVehicleDto {
    plate;
    chassis;
    renavam;
    brand;
    model;
    year;
    color;
    mileage;
    fuelType;
    transmission;
    static _OPENAPI_METADATA_FACTORY() {
        return { plate: { required: false, type: () => String }, chassis: { required: false, type: () => String }, renavam: { required: false, type: () => String }, brand: { required: false, type: () => String }, model: { required: false, type: () => String }, year: { required: false, type: () => Number, minimum: 1900 }, color: { required: false, type: () => String }, mileage: { required: true, type: () => Number, minimum: 0 }, fuelType: { required: false, type: () => String }, transmission: { required: false, type: () => String } };
    }
}
exports.CreateVehicleDto = CreateVehicleDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'ABC1D23' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "plate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '9BWZZZ377VT004251' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "chassis", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '12345678901' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "renavam", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Toyota' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Corolla' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 2022 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1900),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateVehicleDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Branco' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 45000 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateVehicleDto.prototype, "mileage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['FLEX', 'GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID'] }),
    (0, class_validator_1.IsEnum)(['FLEX', 'GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "fuelType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['MANUAL', 'AUTOMATIC', 'CVT', 'SEMI_AUTO'] }),
    (0, class_validator_1.IsEnum)(['MANUAL', 'AUTOMATIC', 'CVT', 'SEMI_AUTO']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVehicleDto.prototype, "transmission", void 0);

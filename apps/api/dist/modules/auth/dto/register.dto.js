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
exports.RegisterDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class RegisterDto {
    email;
    password;
    name;
    phone;
    type;
    role;
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'carlos@exemplo.com.br' }),
    (0, class_validator_1.IsEmail)({}, { message: 'E-mail inválido.' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SenhaForte@2026', minLength: 8 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8, { message: 'A senha deve ter no mínimo 8 caracteres.' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Carlos Souza' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '+5511999998888' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['PF', 'PJ'], default: 'PF' }),
    (0, class_validator_1.IsEnum)(['PF', 'PJ']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ['BUYER', 'SELLER'], default: 'BUYER', description: 'BUYER = aprovado automaticamente; SELLER = KYC PENDING até análise.' }),
    (0, class_validator_1.IsEnum)(['BUYER', 'SELLER']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "role", void 0);

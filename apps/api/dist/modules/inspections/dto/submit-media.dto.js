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
exports.SubmitMediaDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class MediaItemDto {
    type;
    url;
    key;
    hash;
    metadata;
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => Object }, url: { required: true, type: () => String }, key: { required: true, type: () => String }, hash: { required: true, type: () => String }, metadata: { required: false, type: () => Object } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['PHOTO', 'VIDEO', 'DOCUMENT'] }),
    (0, class_validator_1.IsEnum)(['PHOTO', 'VIDEO', 'DOCUMENT']),
    __metadata("design:type", String)
], MediaItemDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL pública ou S3 key do arquivo' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MediaItemDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'S3 key do arquivo' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MediaItemDto.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'SHA-256 do arquivo para verificação de integridade' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MediaItemDto.prototype, "hash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], MediaItemDto.prototype, "metadata", void 0);
class SubmitMediaDto {
    media;
    static _OPENAPI_METADATA_FACTORY() {
        return { media: { required: true, type: () => [MediaItemDto] } };
    }
}
exports.SubmitMediaDto = SubmitMediaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [MediaItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MediaItemDto),
    __metadata("design:type", Array)
], SubmitMediaDto.prototype, "media", void 0);

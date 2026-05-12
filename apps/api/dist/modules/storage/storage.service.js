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
exports.StorageService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let StorageService = class StorageService {
    configService;
    supabaseUrl;
    serviceKey;
    bucket;
    constructor(configService) {
        this.configService = configService;
        this.supabaseUrl = configService.get('SUPABASE_URL', '');
        this.serviceKey = configService.get('SUPABASE_SERVICE_ROLE_KEY', '');
        this.bucket = configService.get('SUPABASE_STORAGE_BUCKET', 'banners');
    }
    async uploadBuffer(key, buffer, contentType) {
        if (!this.supabaseUrl || !this.serviceKey) {
            throw new common_1.InternalServerErrorException('Supabase Storage nao configurado. Defina SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY.');
        }
        const url = `${this.supabaseUrl}/storage/v1/object/${this.bucket}/${key}`;
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.serviceKey}`,
                'Content-Type': contentType,
                'x-upsert': 'true',
            },
            body: buffer,
        });
        if (!res.ok) {
            const body = await res.text();
            throw new common_1.InternalServerErrorException(`Supabase Storage error: ${res.status} - ${body}`);
        }
        return this.getPublicUrl(key);
    }
    getPublicUrl(key) {
        return `${this.supabaseUrl}/storage/v1/object/public/${this.bucket}/${key}`;
    }
    async getPresignedPutUrl(_key, _contentType) {
        throw new common_1.InternalServerErrorException('Use uploadBuffer com Supabase Storage.');
    }
};
exports.StorageService = StorageService;
exports.StorageService = StorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], StorageService);

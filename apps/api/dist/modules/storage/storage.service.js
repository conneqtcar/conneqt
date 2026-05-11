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
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
let StorageService = class StorageService {
    configService;
    s3;
    bucket;
    cdnUrl;
    constructor(configService) {
        this.configService = configService;
        this.s3 = new client_s3_1.S3Client({
            region: configService.get('AWS_REGION', 'us-east-1'),
            credentials: {
                accessKeyId: configService.get('AWS_ACCESS_KEY_ID', ''),
                secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY', ''),
            },
        });
        this.bucket = configService.get('AWS_S3_BUCKET', 'conneqtcar-media-dev');
        this.cdnUrl = configService.get('AWS_CLOUDFRONT_URL', '');
    }
    async getPresignedPutUrl(key, contentType, expiresIn = 3600) {
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            ContentType: contentType,
        });
        return (0, s3_request_presigner_1.getSignedUrl)(this.s3, command, { expiresIn });
    }
    async getPresignedGetUrl(key, expiresIn = 3600) {
        const command = new client_s3_1.GetObjectCommand({ Bucket: this.bucket, Key: key });
        return (0, s3_request_presigner_1.getSignedUrl)(this.s3, command, { expiresIn });
    }
    async deleteObject(key) {
        await this.s3.send(new client_s3_1.DeleteObjectCommand({ Bucket: this.bucket, Key: key }));
    }
    getPublicUrl(key) {
        if (this.cdnUrl) {
            return `${this.cdnUrl}/${key}`;
        }
        return `https://${this.bucket}.s3.amazonaws.com/${key}`;
    }
};
exports.StorageService = StorageService;
exports.StorageService = StorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], StorageService);

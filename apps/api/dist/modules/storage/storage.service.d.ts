import { ConfigService } from '@nestjs/config';
export declare class StorageService {
    private readonly configService;
    private readonly s3;
    private readonly bucket;
    private readonly cdnUrl;
    constructor(configService: ConfigService);
    getPresignedPutUrl(key: string, contentType: string, expiresIn?: number): Promise<string>;
    getPresignedGetUrl(key: string, expiresIn?: number): Promise<string>;
    deleteObject(key: string): Promise<void>;
    getPublicUrl(key: string): string;
}
//# sourceMappingURL=storage.service.d.ts.map
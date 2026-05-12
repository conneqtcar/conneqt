import { ConfigService } from '@nestjs/config';
export declare class StorageService {
    private readonly configService;
    private readonly supabaseUrl;
    private readonly serviceKey;
    private readonly bucket;
    constructor(configService: ConfigService);
    uploadBuffer(key: string, buffer: Buffer, contentType: string): Promise<string>;
    getPublicUrl(key: string): string;
    getPresignedPutUrl(_key: string, _contentType: string): Promise<string>;
}
//# sourceMappingURL=storage.service.d.ts.map
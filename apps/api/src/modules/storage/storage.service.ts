import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StorageService {
  private readonly supabaseUrl: string;
  private readonly serviceKey: string;
  private readonly bucket: string;

  constructor(private readonly configService: ConfigService) {
    this.supabaseUrl = configService.get<string>('SUPABASE_URL', '');
    this.serviceKey = configService.get<string>('SUPABASE_SERVICE_ROLE_KEY', '');
    this.bucket = configService.get<string>('SUPABASE_STORAGE_BUCKET', 'banners');
  }

  /** Upload de um buffer diretamente para o Supabase Storage (bucket publico). */
  async uploadBuffer(key: string, buffer: Buffer, contentType: string): Promise<string> {
    if (!this.supabaseUrl || !this.serviceKey) {
      throw new InternalServerErrorException(
        'Supabase Storage nao configurado. Defina SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY.',
      );
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
      throw new InternalServerErrorException(`Supabase Storage error: ${res.status} - ${body}`);
    }

    return this.getPublicUrl(key);
  }

  getPublicUrl(key: string): string {
    return `${this.supabaseUrl}/storage/v1/object/public/${this.bucket}/${key}`;
  }

  /** Mantido para compatibilidade — nao usa presigned URL com Supabase. */
  async getPresignedPutUrl(_key: string, _contentType: string): Promise<string> {
    throw new InternalServerErrorException('Use uploadBuffer com Supabase Storage.');
  }
}

import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class MediaItemDto {
  @ApiProperty({ enum: ['PHOTO', 'VIDEO', 'DOCUMENT'] })
  @IsEnum(['PHOTO', 'VIDEO', 'DOCUMENT'])
  type: 'PHOTO' | 'VIDEO' | 'DOCUMENT';

  @ApiProperty({ description: 'URL pública ou S3 key do arquivo' })
  @IsString()
  url: string;

  @ApiProperty({ description: 'S3 key do arquivo' })
  @IsString()
  key: string;

  @ApiProperty({ description: 'SHA-256 do arquivo para verificação de integridade' })
  @IsString()
  hash: string;

  @ApiProperty()
  @IsOptional()
  metadata?: Record<string, unknown>;
}

export class SubmitMediaDto {
  @ApiProperty({ type: [MediaItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MediaItemDto)
  media: MediaItemDto[];
}


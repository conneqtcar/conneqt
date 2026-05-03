import { IsString, IsNotEmpty, IsEnum, IsOptional, Matches } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDealerDto {
  @ApiProperty({ example: 'Auto Center Rogério' })
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty({ example: '12.345.678/0001-90' })
  @IsString()
  @Matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, { message: 'CNPJ inválido. Use o formato 00.000.000/0000-00.' })
  cnpj: string;

  @ApiPropertyOptional({ enum: ['STARTER', 'PRO', 'ENTERPRISE'], default: 'STARTER' })
  @IsEnum(['STARTER', 'PRO', 'ENTERPRISE'])
  @IsOptional()
  plan?: 'STARTER' | 'PRO' | 'ENTERPRISE';
}


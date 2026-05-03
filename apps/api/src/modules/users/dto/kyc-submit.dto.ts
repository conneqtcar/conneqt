import { IsString, IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class KycSubmitDto {
  @ApiProperty({ example: '123.456.789-00' })
  @IsString()
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'CPF inválido. Use o formato 000.000.000-00.' })
  cpf: string;

  @ApiProperty({ description: 'URL da selfie enviada para o S3' })
  @IsString()
  @IsNotEmpty()
  selfieUrl: string;
}


import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateInspectionDto {
  @ApiProperty({ description: 'ID do veículo a ser inspecionado' })
  @IsString()
  @IsNotEmpty()
  vehicleId: string;

  @ApiPropertyOptional({ enum: ['REMOTE', 'PRESENTIAL', 'PARTNER'], default: 'REMOTE' })
  @IsEnum(['REMOTE', 'PRESENTIAL', 'PARTNER'])
  @IsOptional()
  type?: 'REMOTE' | 'PRESENTIAL' | 'PARTNER';
}


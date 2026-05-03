import { IsString, IsOptional, IsInt, Min, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVehicleDto {
  @ApiPropertyOptional({ example: 'ABC1D23' })
  @IsString()
  @IsOptional()
  plate?: string;

  @ApiPropertyOptional({ example: '9BWZZZ377VT004251' })
  @IsString()
  @IsOptional()
  chassis?: string;

  @ApiPropertyOptional({ example: '12345678901' })
  @IsString()
  @IsOptional()
  renavam?: string;

  @ApiPropertyOptional({ example: 'Toyota' })
  @IsString()
  @IsOptional()
  brand?: string;

  @ApiPropertyOptional({ example: 'Corolla' })
  @IsString()
  @IsOptional()
  model?: string;

  @ApiPropertyOptional({ example: 2022 })
  @IsInt()
  @Min(1900)
  @IsOptional()
  year?: number;

  @ApiPropertyOptional({ example: 'Branco' })
  @IsString()
  @IsOptional()
  color?: string;

  @ApiProperty({ example: 45000 })
  @IsInt()
  @Min(0)
  mileage: number;

  @ApiPropertyOptional({ enum: ['FLEX', 'GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID'] })
  @IsEnum(['FLEX', 'GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID'])
  @IsOptional()
  fuelType?: string;

  @ApiPropertyOptional({ enum: ['MANUAL', 'AUTOMATIC', 'CVT', 'SEMI_AUTO'] })
  @IsEnum(['MANUAL', 'AUTOMATIC', 'CVT', 'SEMI_AUTO'])
  @IsOptional()
  transmission?: string;
}


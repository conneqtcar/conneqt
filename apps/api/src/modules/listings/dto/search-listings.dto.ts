import { IsString, IsOptional, IsInt, IsEnum, Min, Max } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class SearchListingsDto {
  @ApiPropertyOptional({ example: 'Toyota' })
  @IsString()
  @IsOptional()
  brand?: string;

  @ApiPropertyOptional({ example: 'Corolla' })
  @IsString()
  @IsOptional()
  model?: string;

  @ApiPropertyOptional({ example: 2018 })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  yearMin?: number;

  @ApiPropertyOptional({ example: 2024 })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  yearMax?: number;

  @ApiPropertyOptional({ example: 40000 })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  priceMin?: number;

  @ApiPropertyOptional({ example: 120000 })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  priceMax?: number;

  @ApiPropertyOptional({ example: 80000 })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  mileageMax?: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  city?: string;

  @ApiPropertyOptional({ enum: ['FLEX', 'GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID'] })
  @IsEnum(['FLEX', 'GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID'])
  @IsOptional()
  fuelType?: string;

  @ApiPropertyOptional({ enum: ['MANUAL', 'AUTOMATIC', 'CVT', 'SEMI_AUTO'] })
  @IsEnum(['MANUAL', 'AUTOMATIC', 'CVT', 'SEMI_AUTO'])
  @IsOptional()
  transmission?: string;

  @ApiPropertyOptional({ default: 1 })
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  page?: number;

  @ApiPropertyOptional({ default: 20 })
  @IsInt()
  @Min(1)
  @Max(100)
  @IsOptional()
  @Type(() => Number)
  limit?: number;
}


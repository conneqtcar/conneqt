import { IsString, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProposalDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  listingId: string;

  @ApiProperty({ example: 70000 })
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiPropertyOptional({ example: 'Tenho interesse. Posso pagar à vista.' })
  @IsString()
  @IsOptional()
  message?: string;
}


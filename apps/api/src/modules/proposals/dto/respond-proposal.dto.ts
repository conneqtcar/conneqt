import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RespondProposalDto {
  @ApiProperty({ enum: ['ACCEPTED', 'REJECTED', 'COUNTER'] })
  @IsEnum(['ACCEPTED', 'REJECTED', 'COUNTER'])
  action: 'ACCEPTED' | 'REJECTED' | 'COUNTER';

  @ApiPropertyOptional({ description: 'Valor da contra-proposta (apenas se action=COUNTER)', example: 72000 })
  @IsNumber()
  @Min(1)
  @IsOptional()
  counterAmount?: number;
}


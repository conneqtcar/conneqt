import { IsEmail, IsString, MinLength, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'carlos@exemplo.com.br' })
  @IsEmail({}, { message: 'E-mail inválido.' })
  email: string;

  @ApiProperty({ example: 'SenhaForte@2026', minLength: 8 })
  @IsString()
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres.' })
  password: string;

  @ApiProperty({ example: 'Carlos Souza' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: '+5511999998888' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional({ enum: ['PF', 'PJ'], default: 'PF' })
  @IsEnum(['PF', 'PJ'])
  @IsOptional()
  type?: 'PF' | 'PJ';
}


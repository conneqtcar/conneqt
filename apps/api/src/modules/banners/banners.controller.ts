import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  Header,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsInt, IsUrl, Min } from 'class-validator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { BannersService } from './banners.service';

class CreateBannerDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsUrl()
  imageUrl: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

class UpdateBannerDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

@ApiTags('banners')
@Controller('banners')
export class BannersController {
  constructor(private readonly bannersService: BannersService) {}

  /** Rota pública — usada pela home do web */
  @Get()
  @Header('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120')
  @ApiOperation({ summary: 'Listar banners ativos (público)' })
  findActive() {
    return this.bannersService.findActive();
  }

  /** Rotas admin — requerem autenticação */
  @Get('admin')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Listar todos os banners (admin)' })
  findAll() {
    return this.bannersService.findAll();
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Criar banner' })
  create(@Body() dto: CreateBannerDto) {
    return this.bannersService.create(dto);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Atualizar banner' })
  update(@Param('id') id: string, @Body() dto: UpdateBannerDto) {
    return this.bannersService.update(id, dto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Remover banner' })
  remove(@Param('id') id: string) {
    return this.bannersService.remove(id);
  }
}

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
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsInt, IsUrl, Min } from 'class-validator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { BannersService } from './banners.service';
import { StorageService } from '../storage/storage.service';

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
  constructor(
    private readonly bannersService: BannersService,
    private readonly storageService: StorageService,
  ) {}

  /** Rota pública — usada pela home do web */
  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(60_000)
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

  @Post('upload')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload de imagem para banner (retorna URL)' })
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
      fileFilter: (_req, file, cb) => {
        if (!file.mimetype.startsWith('image/')) {
          return cb(new BadRequestException('Apenas imagens são permitidas.'), false);
        }
        cb(null, true);
      },
    }),
  )
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Nenhum arquivo enviado.');
    const ext = file.originalname.split('.').pop()?.toLowerCase() ?? 'jpg';
    const key = `banners/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const url = await this.storageService.uploadBuffer(key, file.buffer, file.mimetype);
    return { url };
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

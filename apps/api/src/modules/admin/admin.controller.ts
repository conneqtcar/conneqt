import {
  Controller, Get, Patch, Post, Body, Param, UseGuards, Query,
  UseInterceptors, UploadedFile, BadRequestException, Request,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminService } from './admin.service';
import { StorageService } from '../storage/storage.service';

@ApiTags('admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly storageService: StorageService,
  ) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Dashboard — métricas em tempo real' })
  dashboard() {
    return this.adminService.getDashboardStats();
  }

  @Get('users')
  @ApiOperation({ summary: 'Listar todos os usuários (admin)' })
  getUsers(@Query('page') page = 1, @Query('limit') limit = 20) {
    return this.adminService.getUsers(+page, +limit);
  }

  @Patch('users/:id/block')
  @ApiOperation({ summary: 'Bloquear usuário' })
  blockUser(@Param('id') id: string, @Body() body: { reason: string }) {
    return this.adminService.blockUser(id, body.reason);
  }

  @Patch('users/:id/kyc/approve')
  @ApiOperation({ summary: 'Aprovar KYC de usuário' })
  approveKyc(@Param('id') id: string) {
    return this.adminService.approveKyc(id);
  }

  @Patch('users/:id/kyc/reject')
  @ApiOperation({ summary: 'Reprovar KYC de usuário' })
  rejectKyc(@Param('id') id: string, @Body() body: { reason: string }) {
    return this.adminService.rejectKyc(id, body.reason);
  }

  @Patch('users/:id/promote-admin')
  @ApiOperation({ summary: 'Promover usuário a administrador' })
  promoteToAdmin(@Param('id') id: string) {
    return this.adminService.promoteToAdmin(id);
  }

  @Post('dealers')
  @ApiOperation({ summary: 'Cadastrar lojista manualmente (admin)' })
  createDealer(@Body() body: {
    companyName: string;
    cnpj: string;
    plan: 'STARTER' | 'PRO' | 'ENTERPRISE';
    name: string;
    email: string;
    phone?: string;
    password: string;
  }) {
    return this.adminService.createDealer(body);
  }

  @Post('listings')
  @ApiOperation({ summary: 'Criar anúncio manualmente (admin)' })
  createListing(
    @Request() req: { user: { sub: string } },
    @Body() body: {
      brand: string; model: string; year: number; color: string; mileage: number;
      fuelType: string; transmission: string; bodyType?: string; doors?: number;
      plate?: string; chassis?: string; renavam?: string;
      price: number; description?: string;
      acceptsFinancing: boolean; acceptsTrade: boolean;
      sellerEmail?: string; photoUrls?: string[];
    },
  ) {
    return this.adminService.createListing(body, req.user.sub);
  }

  @Patch('listings/:id/deactivate')
  @ApiOperation({ summary: 'Desativar anúncio (admin)' })
  deactivateListing(@Param('id') id: string) {
    return this.adminService.deactivateListing(id);
  }

  @Get('inspections')
  @ApiOperation({ summary: 'Listar todas as inspeções (admin)' })
  getInspections(
    @Query('page') page = 1,
    @Query('limit') limit = 50,
    @Query('status') status?: string,
  ) {
    return this.adminService.getAllInspections(+page, +limit, status);
  }

  @Post('upload-photo')
  @ApiOperation({ summary: 'Upload de foto de veículo (admin)' })
  @UseInterceptors(FileInterceptor('file', { limits: { fileSize: 20 * 1024 * 1024 } }))
  async uploadPhoto(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Nenhum arquivo enviado.');
    if (!file.mimetype.startsWith('image/') && !file.mimetype.startsWith('video/')) {
      throw new BadRequestException('Apenas imagens e vídeos são permitidos.');
    }
    const ext = file.originalname.split('.').pop() ?? 'jpg';
    const key = `vehicles/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const url = await this.storageService.uploadBuffer(key, file.buffer, file.mimetype);
    return { url };
  }
}


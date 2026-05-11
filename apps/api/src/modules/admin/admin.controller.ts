import { Controller, Get, Patch, Post, Body, Param, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminService } from './admin.service';

@ApiTags('admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

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
  createListing(@Body() body: {
    brand: string; model: string; year: number; color: string; mileage: number;
    fuelType: string; transmission: string; bodyType?: string; doors?: number;
    plate?: string; chassis?: string; renavam?: string;
    price: number; description?: string;
    acceptsFinancing: boolean; acceptsTrade: boolean;
    sellerEmail?: string; photoUrls?: string[];
  }) {
    return this.adminService.createListing(body);
  }

  @Patch('listings/:id/deactivate')
  @ApiOperation({ summary: 'Desativar anúncio (admin)' })
  deactivateListing(@Param('id') id: string) {
    return this.adminService.deactivateListing(id);
  }
}


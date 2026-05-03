import { Controller, Post, Get, Body, Param, Request, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { DealersService } from './dealers.service';
import { CreateDealerDto } from './dto/create-dealer.dto';

@ApiTags('dealers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('dealers')
export class DealersController {
  constructor(private readonly dealersService: DealersService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar como lojista' })
  create(@Request() req: { user: { sub: string } }, @Body() dto: CreateDealerDto) {
    return this.dealersService.create(req.user.sub, dto);
  }

  @Get('me')
  @ApiOperation({ summary: 'Perfil do lojista do usuário autenticado' })
  findMine(@Request() req: { user: { sub: string } }) {
    return this.dealersService.findByUser(req.user.sub);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Detalhes de um lojista' })
  findOne(@Param('id') id: string) {
    return this.dealersService.findById(id);
  }
}


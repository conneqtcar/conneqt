import {
  Controller,
  Get,
  Patch,
  Body,
  Request,
  Param,
  UseGuards,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { KycSubmitDto } from './dto/kyc-submit.dto';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @ApiOperation({ summary: 'Perfil do usuário autenticado' })
  getProfile(@Request() req: { user: { sub: string } }) {
    return this.usersService.findById(req.user.sub);
  }

  @Patch('me')
  @ApiOperation({ summary: 'Atualizar dados do perfil' })
  updateProfile(
    @Request() req: { user: { sub: string } },
    @Body() dto: UpdateUserDto,
  ) {
    return this.usersService.update(req.user.sub, dto);
  }

  @Post('me/kyc')
  @ApiOperation({ summary: 'Submeter dados para verificação KYC' })
  submitKyc(
    @Request() req: { user: { sub: string } },
    @Body() dto: KycSubmitDto,
  ) {
    return this.usersService.submitKyc(req.user.sub, dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar usuário por ID' })
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }
}


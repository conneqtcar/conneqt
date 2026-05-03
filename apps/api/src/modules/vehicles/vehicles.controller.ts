import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Request,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@ApiTags('vehicles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar novo veículo' })
  create(
    @Request() req: { user: { sub: string } },
    @Body() dto: CreateVehicleDto,
  ) {
    return this.vehiclesService.create(req.user.sub, dto);
  }

  @Get('mine')
  @ApiOperation({ summary: 'Listar meus veículos' })
  findMine(@Request() req: { user: { sub: string } }) {
    return this.vehiclesService.findByOwner(req.user.sub);
  }

  @Get('fipe')
  @ApiOperation({ summary: 'Consultar dados FIPE por placa' })
  fipeByPlate(@Query('plate') plate: string) {
    return this.vehiclesService.getFipeSuggestion(plate);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Detalhes de um veículo' })
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar dados do veículo' })
  update(
    @Param('id') id: string,
    @Request() req: { user: { sub: string } },
    @Body() dto: UpdateVehicleDto,
  ) {
    return this.vehiclesService.update(id, req.user.sub, dto);
  }
}


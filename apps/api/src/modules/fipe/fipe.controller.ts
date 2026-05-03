import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { FipeService } from './fipe.service';

@ApiTags('fipe')
@Controller('fipe')
export class FipeController {
  constructor(private readonly fipeService: FipeService) {}

  @Get('brands')
  @ApiOperation({ summary: 'Listar marcas (FIPE)' })
  getBrands(@Query('type') type: 'cars' | 'motorcycles' | 'trucks' = 'cars') {
    return this.fipeService.getBrands(type);
  }

  @Get('brands/:brandCode/models')
  @ApiOperation({ summary: 'Listar modelos por marca (FIPE)' })
  getModels(
    @Param('brandCode') brandCode: string,
    @Query('type') type: 'cars' | 'motorcycles' | 'trucks' = 'cars',
  ) {
    return this.fipeService.getModels(brandCode, type);
  }

  @Get('brands/:brandCode/models/:modelCode/years')
  @ApiOperation({ summary: 'Listar anos do modelo (FIPE)' })
  getYears(
    @Param('brandCode') brandCode: string,
    @Param('modelCode') modelCode: string,
    @Query('type') type: 'cars' | 'motorcycles' | 'trucks' = 'cars',
  ) {
    return this.fipeService.getModelYears(brandCode, modelCode, type);
  }

  @Get('brands/:brandCode/models/:modelCode/years/:yearCode/price')
  @ApiOperation({ summary: 'Consultar preço FIPE' })
  getPrice(
    @Param('brandCode') brandCode: string,
    @Param('modelCode') modelCode: string,
    @Param('yearCode') yearCode: string,
    @Query('type') type: 'cars' | 'motorcycles' | 'trucks' = 'cars',
  ) {
    return this.fipeService.getPrice(brandCode, modelCode, yearCode, type);
  }

  @Get('plate/:plate')
  @ApiOperation({ summary: 'Consultar dados do veículo pela placa' })
  queryByPlate(@Param('plate') plate: string) {
    return this.fipeService.queryByPlate(plate);
  }
}


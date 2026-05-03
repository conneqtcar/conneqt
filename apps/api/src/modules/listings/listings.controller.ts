import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Request,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ListingsService } from './listings.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { SearchListingsDto } from './dto/search-listings.dto';

@ApiTags('listings')
@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get()
  @ApiOperation({ summary: 'Buscar anúncios (marketplace público)' })
  search(@Query() dto: SearchListingsDto) {
    return this.listingsService.search(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Detalhes de um anúncio com laudo' })
  findOne(@Param('id') id: string) {
    return this.listingsService.findById(id);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Publicar anúncio de venda' })
  create(
    @Request() req: { user: { sub: string } },
    @Body() dto: CreateListingDto,
  ) {
    return this.listingsService.create(req.user.sub, dto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Desativar anúncio' })
  deactivate(
    @Param('id') id: string,
    @Request() req: { user: { sub: string } },
  ) {
    return this.listingsService.deactivate(id, req.user.sub);
  }
}


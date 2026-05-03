import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  Request,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { InspectionsService } from './inspections.service';
import { CreateInspectionDto } from './dto/create-inspection.dto';
import { SubmitMediaDto } from './dto/submit-media.dto';
import { ReviewInspectionDto } from './dto/review-inspection.dto';
import { GetUploadUrlDto } from './dto/get-upload-url.dto';

@ApiTags('inspections')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('inspections')
export class InspectionsController {
  constructor(private readonly inspectionsService: InspectionsService) {}

  @Post()
  @ApiOperation({ summary: 'Iniciar nova inspeção para um veículo' })
  create(
    @Request() req: { user: { sub: string } },
    @Body() dto: CreateInspectionDto,
  ) {
    return this.inspectionsService.create(req.user.sub, dto);
  }

  @Post(':id/upload-url')
  @ApiOperation({ summary: 'Obter URL pré-assinada para upload de mídia' })
  getUploadUrl(
    @Param('id') id: string,
    @Request() req: { user: { sub: string } },
    @Body() dto: GetUploadUrlDto,
  ) {
    return this.inspectionsService.getUploadUrl(id, req.user.sub, dto.fileName, dto.mimeType);
  }

  @Post(':id/media')
  @ApiOperation({ summary: 'Registrar mídias enviadas para a inspeção' })
  submitMedia(
    @Param('id') id: string,
    @Request() req: { user: { sub: string } },
    @Body() dto: SubmitMediaDto,
  ) {
    return this.inspectionsService.submitMedia(id, req.user.sub, dto);
  }

  @Get('queue')
  @ApiOperation({ summary: 'Fila de inspeções aguardando revisão humana (admin)' })
  getQueue(
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ) {
    return this.inspectionsService.getPendingReviewQueue(+page, +limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Status e detalhes de uma inspeção' })
  getStatus(@Param('id') id: string) {
    return this.inspectionsService.getStatus(id);
  }

  @Patch(':id/review')
  @ApiOperation({ summary: 'Revisar inspeção (admin/revisor)' })
  review(
    @Param('id') id: string,
    @Request() req: { user: { sub: string } },
    @Body() dto: ReviewInspectionDto,
  ) {
    return this.inspectionsService.reviewByAdmin(id, req.user.sub, dto);
  }
}


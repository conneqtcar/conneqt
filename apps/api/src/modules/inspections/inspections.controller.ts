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
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { InspectionsService } from './inspections.service';
import { CreateInspectionDto } from './dto/create-inspection.dto';
import { SubmitMediaDto } from './dto/submit-media.dto';
import { ReviewInspectionDto } from './dto/review-inspection.dto';

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

  @Post(':id/upload-media')
  @ApiOperation({ summary: 'Upload direto de foto de inspeção' })
  @UseInterceptors(FileInterceptor('file', { limits: { fileSize: 20 * 1024 * 1024 } }))
  async uploadMedia(
    @Param('id') id: string,
    @Request() req: { user: { sub: string } },
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { label?: string; sortOrder?: string },
  ) {
    if (!file) throw new BadRequestException('Nenhum arquivo enviado.');
    return this.inspectionsService.uploadMediaFile(
      id,
      req.user.sub,
      file,
      body.label ?? '',
      body.sortOrder ? parseInt(body.sortOrder, 10) : 0,
    );
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


import {
  Injectable,
  Inject,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaClient } from '@conneqtcar/database';
import { PRISMA_SERVICE } from '../database/database.module';
import { CreateInspectionDto } from './dto/create-inspection.dto';
import { SubmitMediaDto } from './dto/submit-media.dto';
import { ReviewInspectionDto } from './dto/review-inspection.dto';
import { StorageService } from '../storage/storage.service';

const INSPECTION_AI_THRESHOLD = 85;

@Injectable()
export class InspectionsService {
  constructor(
    @Inject(PRISMA_SERVICE) private readonly prisma: PrismaClient,
    private readonly storageService: StorageService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async create(ownerId: string, dto: CreateInspectionDto) {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: { id: dto.vehicleId },
    });
    if (!vehicle) throw new NotFoundException('Veículo não encontrado.');
    if (vehicle.ownerId !== ownerId) throw new ForbiddenException('Acesso negado.');

    const activeInspection = await this.prisma.inspection.findFirst({
      where: { vehicleId: dto.vehicleId, status: { in: ['PENDING', 'IN_PROGRESS'] } },
    });
    if (activeInspection) {
      throw new BadRequestException('Já existe uma inspeção ativa para este veículo.');
    }

    return this.prisma.inspection.create({
      data: {
        vehicleId: dto.vehicleId,
        type: dto.type ?? 'REMOTE',
        status: 'PENDING',
      },
    });
  }

  async getUploadUrl(inspectionId: string, ownerId: string, fileName: string, mimeType: string) {
    const inspection = await this.assertOwnership(inspectionId, ownerId);

    const key = `inspections/${inspectionId}/${Date.now()}-${fileName}`;
    const presignedUrl = await this.storageService.getPresignedPutUrl(key, mimeType);

    return { uploadUrl: presignedUrl, key };
  }

  async submitMedia(inspectionId: string, ownerId: string, dto: SubmitMediaDto) {
    const inspection = await this.assertOwnership(inspectionId, ownerId);

    if (inspection.status === 'APPROVED' || inspection.status === 'REJECTED') {
      throw new BadRequestException('Esta inspeção já foi finalizada.');
    }

    await this.prisma.inspection.update({
      where: { id: inspectionId },
      data: { status: 'IN_PROGRESS' },
    });

    const media = await this.prisma.inspectionMedia.createMany({
      data: dto.media.map((m) => ({
        inspectionId,
        type: m.type,
        url: m.url,
        key: m.key,
        hash: m.hash,
        metadata: m.metadata as any,
      })),
    });

    // Emite evento para processamento assíncrono pela IA
    this.eventEmitter.emit('inspection.media_submitted', {
      inspectionId,
      vehicleId: inspection.vehicleId,
    });

    return { message: 'Mídia recebida. Análise em andamento.', count: media.count };
  }

  async getStatus(inspectionId: string) {
    const inspection = await this.prisma.inspection.findUnique({
      where: { id: inspectionId },
      include: {
        media: { select: { id: true, type: true, url: true } },
        items: true,
        reviewer: { select: { id: true, name: true } },
      },
    });
    if (!inspection) throw new NotFoundException('Inspeção não encontrada.');
    return inspection;
  }

  async reviewByAdmin(
    inspectionId: string,
    reviewerId: string,
    dto: ReviewInspectionDto,
  ) {
    const inspection = await this.prisma.inspection.findUnique({
      where: { id: inspectionId },
    });
    if (!inspection) throw new NotFoundException('Inspeção não encontrada.');

    const updatedInspection = await this.prisma.inspection.update({
      where: { id: inspectionId },
      data: {
        status: dto.approved ? 'APPROVED' : 'REJECTED',
        score: dto.score,
        reviewerId,
        reviewedAt: new Date(),
        reviewNotes: dto.notes,
      },
    });

    this.eventEmitter.emit('inspection.reviewed', {
      inspectionId,
      vehicleId: inspection.vehicleId,
      approved: dto.approved,
    });

    return updatedInspection;
  }

  async getPendingReviewQueue(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [total, inspections] = await Promise.all([
      this.prisma.inspection.count({ where: { status: 'AWAITING_REVIEW' } }),
      this.prisma.inspection.findMany({
        where: { status: 'AWAITING_REVIEW' },
        include: {
          vehicle: { select: { id: true, brand: true, model: true, year: true, plate: true } },
          media: { select: { id: true, type: true, url: true }, take: 5 },
        },
        skip,
        take: limit,
        orderBy: { createdAt: 'asc' },
      }),
    ]);

    return { data: inspections, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  private async assertOwnership(inspectionId: string, ownerId: string) {
    const inspection = await this.prisma.inspection.findUnique({
      where: { id: inspectionId },
      include: { vehicle: { select: { ownerId: true } } },
    });

    if (!inspection) throw new NotFoundException('Inspeção não encontrada.');
    if (inspection.vehicle.ownerId !== ownerId) throw new ForbiddenException('Acesso negado.');

    return inspection;
  }
}


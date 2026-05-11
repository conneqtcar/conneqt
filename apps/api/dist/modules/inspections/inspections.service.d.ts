import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaClient } from '@conneqtcar/database';
import { CreateInspectionDto } from './dto/create-inspection.dto';
import { SubmitMediaDto } from './dto/submit-media.dto';
import { ReviewInspectionDto } from './dto/review-inspection.dto';
import { StorageService } from '../storage/storage.service';
export declare class InspectionsService {
    private readonly prisma;
    private readonly storageService;
    private readonly eventEmitter;
    constructor(prisma: PrismaClient, storageService: StorageService, eventEmitter: EventEmitter2);
    create(ownerId: string, dto: CreateInspectionDto): Promise<any>;
    getUploadUrl(inspectionId: string, ownerId: string, fileName: string, mimeType: string): Promise<{
        uploadUrl: string;
        key: string;
    }>;
    submitMedia(inspectionId: string, ownerId: string, dto: SubmitMediaDto): Promise<{
        message: string;
        count: any;
    }>;
    getStatus(inspectionId: string): Promise<any>;
    reviewByAdmin(inspectionId: string, reviewerId: string, dto: ReviewInspectionDto): Promise<any>;
    getPendingReviewQueue(page?: number, limit?: number): Promise<{
        data: any;
        total: any;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    private assertOwnership;
}
//# sourceMappingURL=inspections.service.d.ts.map
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
    create(ownerId: string, dto: CreateInspectionDto): Promise<{
        type: import("packages/database/dist/generated").$Enums.InspectionType;
        id: string;
        status: import("packages/database/dist/generated").$Enums.InspectionStatus;
        createdAt: Date;
        updatedAt: Date;
        vehicleId: string;
        score: number | null;
        reviewerId: string | null;
        reviewedAt: Date | null;
        reviewNotes: string | null;
        aiFlags: string[];
        aiProcessedAt: Date | null;
    }>;
    getUploadUrl(inspectionId: string, ownerId: string, fileName: string, mimeType: string): Promise<{
        uploadUrl: string;
        key: string;
    }>;
    submitMedia(inspectionId: string, ownerId: string, dto: SubmitMediaDto): Promise<{
        message: string;
        count: number;
    }>;
    getStatus(inspectionId: string): Promise<{
        items: {
            id: string;
            createdAt: Date;
            result: string;
            score: number | null;
            inspectionId: string;
            category: string;
            item: string;
            notes: string | null;
        }[];
        vehicle: {
            id: string;
            plate: string | null;
            brand: string | null;
            model: string | null;
            year: number | null;
            color: string | null;
            mileage: number;
            owner: {
                name: string;
                email: string;
                id: string;
            };
        };
        reviewer: {
            name: string;
            id: string;
        } | null;
        media: {
            type: import("packages/database/dist/generated").$Enums.MediaType;
            id: string;
            createdAt: Date;
            url: string;
        }[];
    } & {
        type: import("packages/database/dist/generated").$Enums.InspectionType;
        id: string;
        status: import("packages/database/dist/generated").$Enums.InspectionStatus;
        createdAt: Date;
        updatedAt: Date;
        vehicleId: string;
        score: number | null;
        reviewerId: string | null;
        reviewedAt: Date | null;
        reviewNotes: string | null;
        aiFlags: string[];
        aiProcessedAt: Date | null;
    }>;
    reviewByAdmin(inspectionId: string, reviewerId: string, dto: ReviewInspectionDto): Promise<{
        type: import("packages/database/dist/generated").$Enums.InspectionType;
        id: string;
        status: import("packages/database/dist/generated").$Enums.InspectionStatus;
        createdAt: Date;
        updatedAt: Date;
        vehicleId: string;
        score: number | null;
        reviewerId: string | null;
        reviewedAt: Date | null;
        reviewNotes: string | null;
        aiFlags: string[];
        aiProcessedAt: Date | null;
    }>;
    getPendingReviewQueue(page?: number, limit?: number): Promise<{
        data: ({
            vehicle: {
                id: string;
                plate: string | null;
                brand: string | null;
                model: string | null;
                year: number | null;
            };
            media: {
                type: import("packages/database/dist/generated").$Enums.MediaType;
                id: string;
                url: string;
            }[];
        } & {
            type: import("packages/database/dist/generated").$Enums.InspectionType;
            id: string;
            status: import("packages/database/dist/generated").$Enums.InspectionStatus;
            createdAt: Date;
            updatedAt: Date;
            vehicleId: string;
            score: number | null;
            reviewerId: string | null;
            reviewedAt: Date | null;
            reviewNotes: string | null;
            aiFlags: string[];
            aiProcessedAt: Date | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    private assertOwnership;
}
//# sourceMappingURL=inspections.service.d.ts.map
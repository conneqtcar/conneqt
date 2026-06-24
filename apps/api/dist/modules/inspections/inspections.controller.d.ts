import { InspectionsService } from './inspections.service';
import { CreateInspectionDto } from './dto/create-inspection.dto';
import { SubmitMediaDto } from './dto/submit-media.dto';
import { ReviewInspectionDto } from './dto/review-inspection.dto';
export declare class InspectionsController {
    private readonly inspectionsService;
    constructor(inspectionsService: InspectionsService);
    create(req: {
        user: {
            sub: string;
        };
    }, dto: CreateInspectionDto): Promise<{
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
    uploadMedia(id: string, req: {
        user: {
            sub: string;
        };
    }, file: Express.Multer.File, body: {
        label?: string;
        sortOrder?: string;
    }): Promise<{
        url: string;
        mediaId: string;
    }>;
    submitMedia(id: string, req: {
        user: {
            sub: string;
        };
    }, dto: SubmitMediaDto): Promise<{
        message: string;
        count: number;
    }>;
    getQueue(page?: number, limit?: number): Promise<{
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
    getStatus(id: string): Promise<{
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
    review(id: string, req: {
        user: {
            sub: string;
        };
    }, dto: ReviewInspectionDto): Promise<{
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
}
//# sourceMappingURL=inspections.controller.d.ts.map
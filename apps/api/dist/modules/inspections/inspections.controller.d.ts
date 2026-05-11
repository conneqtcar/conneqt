import { InspectionsService } from './inspections.service';
import { CreateInspectionDto } from './dto/create-inspection.dto';
import { SubmitMediaDto } from './dto/submit-media.dto';
import { ReviewInspectionDto } from './dto/review-inspection.dto';
import { GetUploadUrlDto } from './dto/get-upload-url.dto';
export declare class InspectionsController {
    private readonly inspectionsService;
    constructor(inspectionsService: InspectionsService);
    create(req: {
        user: {
            sub: string;
        };
    }, dto: CreateInspectionDto): Promise<any>;
    getUploadUrl(id: string, req: {
        user: {
            sub: string;
        };
    }, dto: GetUploadUrlDto): Promise<{
        uploadUrl: string;
        key: string;
    }>;
    submitMedia(id: string, req: {
        user: {
            sub: string;
        };
    }, dto: SubmitMediaDto): Promise<{
        message: string;
        count: any;
    }>;
    getQueue(page?: number, limit?: number): Promise<{
        data: any;
        total: any;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getStatus(id: string): Promise<any>;
    review(id: string, req: {
        user: {
            sub: string;
        };
    }, dto: ReviewInspectionDto): Promise<any>;
}
//# sourceMappingURL=inspections.controller.d.ts.map
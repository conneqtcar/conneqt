import { InspectionAiService } from './inspection-ai.service';
import { InspectionsService } from './inspections.service';
interface MediaSubmittedEvent {
    inspectionId: string;
    vehicleId: string;
}
interface ReviewedEvent {
    inspectionId: string;
    vehicleId: string;
    approved: boolean;
}
export declare class InspectionQueueService {
    private readonly aiService;
    private readonly inspectionsService;
    constructor(aiService: InspectionAiService, inspectionsService: InspectionsService);
    handleMediaSubmitted(event: MediaSubmittedEvent): Promise<void>;
    handleReviewed(event: ReviewedEvent): Promise<void>;
}
export {};
//# sourceMappingURL=inspection-queue.service.d.ts.map
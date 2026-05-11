import { PrismaClient } from '@conneqtcar/database';
interface AiAnalysisResult {
    score: number;
    flags: string[];
    scorecard: {
        bodywork: number;
        mechanics: number;
        interior: number;
        documentation: number;
        safety: number;
    };
    needsHumanReview: boolean;
}
export declare class InspectionAiService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    analyzeInspection(inspectionId: string): Promise<AiAnalysisResult>;
    private defaultRejectionResult;
}
export {};
//# sourceMappingURL=inspection-ai.service.d.ts.map
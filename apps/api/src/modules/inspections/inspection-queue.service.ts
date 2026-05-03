import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
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

const AI_APPROVAL_THRESHOLD = 85;

@Injectable()
export class InspectionQueueService {
  constructor(
    private readonly aiService: InspectionAiService,
    private readonly inspectionsService: InspectionsService,
  ) {}

  @OnEvent('inspection.media_submitted')
  async handleMediaSubmitted(event: MediaSubmittedEvent) {
    console.log(`[InspectionQueue] Processando inspeção ${event.inspectionId} com IA...`);

    try {
      const result = await this.aiService.analyzeInspection(event.inspectionId);

      if (result.score >= AI_APPROVAL_THRESHOLD) {
        // Aprovação automática
        await this.inspectionsService.reviewByAdmin(
          event.inspectionId,
          'SYSTEM_AI',
          {
            approved: true,
            score: result.score,
            notes: `Aprovação automática por IA. Score: ${result.score}/100`,
          },
        );
        console.log(`[InspectionQueue] Inspeção ${event.inspectionId} APROVADA pela IA (score: ${result.score})`);
      } else {
        // Encaminhar para revisão humana
        console.log(`[InspectionQueue] Inspeção ${event.inspectionId} encaminhada para revisão humana (score: ${result.score})`);
      }
    } catch (error) {
      console.error(`[InspectionQueue] Erro ao processar inspeção ${event.inspectionId}:`, error);
    }
  }

  @OnEvent('inspection.reviewed')
  async handleReviewed(event: ReviewedEvent) {
    if (event.approved) {
      console.log(`[InspectionQueue] Veículo ${event.vehicleId} aprovado — publicando anúncio...`);
      // Emitir evento para auto-publicação do anúncio
    }
  }
}


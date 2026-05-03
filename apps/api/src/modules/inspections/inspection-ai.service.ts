import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@conneqtcar/database';
import { PRISMA_SERVICE } from '../database/database.module';

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

/**
 * Serviço de IA para análise de inspeções.
 *
 * MVP V1: Implementação básica com heurística simples.
 * Futuro: Integração com microserviço Python/FastAPI
 * usando YOLOv8, ViT e modelos de detecção de anomalias.
 */
@Injectable()
export class InspectionAiService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaClient) {}

  async analyzeInspection(inspectionId: string): Promise<AiAnalysisResult> {
    const inspection = await this.prisma.inspection.findUnique({
      where: { id: inspectionId },
      include: { media: true },
    });

    if (!inspection) {
      return this.defaultRejectionResult('Inspeção não encontrada');
    }

    const mediaCount = inspection.media.length;
    const requiredMedia = 5; // mínimo de mídias para análise válida
    const flags: string[] = [];

    if (mediaCount < requiredMedia) {
      flags.push(`Número insuficiente de mídias: ${mediaCount}/${requiredMedia}`);
    }

    // V1: Score baseado na quantidade de mídias (simulação)
    // TODO: Substituir por chamada ao microserviço Python de IA
    const coverageScore = Math.min(100, (mediaCount / 30) * 100);
    const score = Math.round(coverageScore);

    const scorecard = {
      bodywork: Math.round(score * 0.9 + Math.random() * 10),
      mechanics: Math.round(score * 0.85 + Math.random() * 15),
      interior: Math.round(score * 0.95 + Math.random() * 5),
      documentation: 100, // documentação verificada separadamente
      safety: Math.round(score * 0.9 + Math.random() * 10),
    };

    await this.prisma.inspection.update({
      where: { id: inspectionId },
      data: {
        score,
        aiFlags: flags,
        status: score >= 85 ? 'APPROVED' : 'AWAITING_REVIEW',
        aiProcessedAt: new Date(),
      },
    });

    return {
      score,
      flags,
      scorecard,
      needsHumanReview: score < 85,
    };
  }

  private defaultRejectionResult(reason: string): AiAnalysisResult {
    return {
      score: 0,
      flags: [reason],
      scorecard: { bodywork: 0, mechanics: 0, interior: 0, documentation: 0, safety: 0 },
      needsHumanReview: true,
    };
  }
}


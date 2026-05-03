import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OnEvent } from '@nestjs/event-emitter';

export interface NotificationPayload {
  to: string;
  subject?: string;
  message: string;
  type: 'email' | 'sms' | 'push';
}

/**
 * Serviço de notificações — MVP usa log.
 * Produção: SendGrid (email), Twilio (SMS), Firebase (push).
 */
@Injectable()
export class NotificationsService {
  constructor(private readonly configService: ConfigService) {}

  async send(payload: NotificationPayload): Promise<void> {
    // TODO: Integrar com SendGrid, Twilio e Firebase na produção
    console.log(`[Notification][${payload.type.toUpperCase()}] Para: ${payload.to} | ${payload.message}`);
  }

  @OnEvent('proposal.created')
  async onProposalCreated(event: { proposal: { listing: { sellerId: string }; amount: number } }) {
    await this.send({
      to: event.proposal.listing.sellerId,
      message: `Nova proposta de R$ ${event.proposal.amount.toLocaleString('pt-BR')} recebida para o seu veículo!`,
      type: 'push',
    });
  }

  @OnEvent('inspection.reviewed')
  async onInspectionReviewed(event: { inspectionId: string; vehicleId: string; approved: boolean }) {
    const message = event.approved
      ? 'Sua inspeção foi aprovada! Seu veículo já está disponível para publicação.'
      : 'Sua inspeção precisa de ajustes. Verifique o laudo para detalhes.';

    console.log(`[Notification] Veículo ${event.vehicleId}: ${message}`);
  }
}


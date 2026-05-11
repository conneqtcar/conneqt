import { ConfigService } from '@nestjs/config';
export interface NotificationPayload {
    to: string;
    subject?: string;
    message: string;
    type: 'email' | 'sms' | 'push';
}
export declare class NotificationsService {
    private readonly configService;
    constructor(configService: ConfigService);
    send(payload: NotificationPayload): Promise<void>;
    onProposalCreated(event: {
        proposal: {
            listing: {
                sellerId: string;
            };
            amount: number;
        };
    }): Promise<void>;
    onInspectionReviewed(event: {
        inspectionId: string;
        vehicleId: string;
        approved: boolean;
    }): Promise<void>;
}
//# sourceMappingURL=notifications.service.d.ts.map
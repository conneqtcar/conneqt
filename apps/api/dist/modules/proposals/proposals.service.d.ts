import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaClient } from '@conneqtcar/database';
import { CreateProposalDto } from './dto/create-proposal.dto';
export declare class ProposalsService {
    private readonly prisma;
    private readonly eventEmitter;
    constructor(prisma: PrismaClient, eventEmitter: EventEmitter2);
    create(buyerId: string, dto: CreateProposalDto): Promise<{
        listing: {
            price: number;
            sellerId: string;
        };
        buyer: {
            name: string;
            id: string;
        };
    } & {
        message: string | null;
        id: string;
        status: import("@prisma/client").$Enums.ProposalStatus;
        createdAt: Date;
        updatedAt: Date;
        listingId: string;
        amount: number;
        counterAmount: number | null;
        respondedAt: Date | null;
        buyerId: string;
    }>;
    respond(proposalId: string, sellerId: string, action: 'ACCEPTED' | 'REJECTED' | 'COUNTER', counterAmount?: number): Promise<{
        message: string | null;
        id: string;
        status: import("@prisma/client").$Enums.ProposalStatus;
        createdAt: Date;
        updatedAt: Date;
        listingId: string;
        amount: number;
        counterAmount: number | null;
        respondedAt: Date | null;
        buyerId: string;
    }>;
    findByListing(listingId: string, sellerId: string): Promise<({
        buyer: {
            name: string;
            id: string;
            kycStatus: import("@prisma/client").$Enums.KycStatus;
        };
    } & {
        message: string | null;
        id: string;
        status: import("@prisma/client").$Enums.ProposalStatus;
        createdAt: Date;
        updatedAt: Date;
        listingId: string;
        amount: number;
        counterAmount: number | null;
        respondedAt: Date | null;
        buyerId: string;
    })[]>;
    findByBuyer(buyerId: string): Promise<({
        listing: {
            vehicle: {
                brand: string | null;
                model: string | null;
                year: number | null;
            };
        } & {
            description: string | null;
            id: string;
            status: import("@prisma/client").$Enums.ListingStatus;
            createdAt: Date;
            updatedAt: Date;
            expiresAt: Date | null;
            vehicleId: string;
            price: number;
            acceptsFinancing: boolean;
            acceptsTrade: boolean;
            views: number;
            soldAt: Date | null;
            sellerId: string;
        };
    } & {
        message: string | null;
        id: string;
        status: import("@prisma/client").$Enums.ProposalStatus;
        createdAt: Date;
        updatedAt: Date;
        listingId: string;
        amount: number;
        counterAmount: number | null;
        respondedAt: Date | null;
        buyerId: string;
    })[]>;
}
//# sourceMappingURL=proposals.service.d.ts.map
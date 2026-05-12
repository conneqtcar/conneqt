import { ProposalsService } from './proposals.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { RespondProposalDto } from './dto/respond-proposal.dto';
export declare class ProposalsController {
    private readonly proposalsService;
    constructor(proposalsService: ProposalsService);
    create(req: {
        user: {
            sub: string;
        };
    }, dto: CreateProposalDto): Promise<{
        listing: {
            sellerId: string;
            price: number;
        };
        buyer: {
            name: string;
            id: string;
        };
    } & {
        message: string | null;
        id: string;
        status: import("packages/database/dist/generated").$Enums.ProposalStatus;
        createdAt: Date;
        updatedAt: Date;
        listingId: string;
        amount: number;
        counterAmount: number | null;
        respondedAt: Date | null;
        buyerId: string;
    }>;
    myProposals(req: {
        user: {
            sub: string;
        };
    }): Promise<({
        listing: {
            vehicle: {
                brand: string | null;
                model: string | null;
                year: number | null;
            };
        } & {
            description: string | null;
            id: string;
            status: import("packages/database/dist/generated").$Enums.ListingStatus;
            createdAt: Date;
            updatedAt: Date;
            expiresAt: Date | null;
            vehicleId: string;
            sellerId: string;
            price: number;
            acceptsFinancing: boolean;
            acceptsTrade: boolean;
            views: number;
            soldAt: Date | null;
        };
    } & {
        message: string | null;
        id: string;
        status: import("packages/database/dist/generated").$Enums.ProposalStatus;
        createdAt: Date;
        updatedAt: Date;
        listingId: string;
        amount: number;
        counterAmount: number | null;
        respondedAt: Date | null;
        buyerId: string;
    })[]>;
    byListing(listingId: string, req: {
        user: {
            sub: string;
        };
    }): Promise<({
        buyer: {
            name: string;
            id: string;
            kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
        };
    } & {
        message: string | null;
        id: string;
        status: import("packages/database/dist/generated").$Enums.ProposalStatus;
        createdAt: Date;
        updatedAt: Date;
        listingId: string;
        amount: number;
        counterAmount: number | null;
        respondedAt: Date | null;
        buyerId: string;
    })[]>;
    respond(id: string, req: {
        user: {
            sub: string;
        };
    }, dto: RespondProposalDto): Promise<{
        message: string | null;
        id: string;
        status: import("packages/database/dist/generated").$Enums.ProposalStatus;
        createdAt: Date;
        updatedAt: Date;
        listingId: string;
        amount: number;
        counterAmount: number | null;
        respondedAt: Date | null;
        buyerId: string;
    }>;
}
//# sourceMappingURL=proposals.controller.d.ts.map
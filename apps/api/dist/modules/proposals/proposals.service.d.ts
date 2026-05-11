import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaClient } from '@conneqtcar/database';
import { CreateProposalDto } from './dto/create-proposal.dto';
export declare class ProposalsService {
    private readonly prisma;
    private readonly eventEmitter;
    constructor(prisma: PrismaClient, eventEmitter: EventEmitter2);
    create(buyerId: string, dto: CreateProposalDto): Promise<any>;
    respond(proposalId: string, sellerId: string, action: 'ACCEPTED' | 'REJECTED' | 'COUNTER', counterAmount?: number): Promise<any>;
    findByListing(listingId: string, sellerId: string): Promise<any>;
    findByBuyer(buyerId: string): Promise<any>;
}
//# sourceMappingURL=proposals.service.d.ts.map
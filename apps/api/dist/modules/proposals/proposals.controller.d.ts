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
    }, dto: CreateProposalDto): Promise<any>;
    myProposals(req: {
        user: {
            sub: string;
        };
    }): Promise<any>;
    byListing(listingId: string, req: {
        user: {
            sub: string;
        };
    }): Promise<any>;
    respond(id: string, req: {
        user: {
            sub: string;
        };
    }, dto: RespondProposalDto): Promise<any>;
}
//# sourceMappingURL=proposals.controller.d.ts.map
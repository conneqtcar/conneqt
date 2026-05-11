import { ListingsService } from './listings.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { SearchListingsDto } from './dto/search-listings.dto';
export declare class ListingsController {
    private readonly listingsService;
    constructor(listingsService: ListingsService);
    search(dto: SearchListingsDto): Promise<{
        data: any;
        total: any;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<any>;
    create(req: {
        user: {
            sub: string;
        };
    }, dto: CreateListingDto): Promise<any>;
    deactivate(id: string, req: {
        user: {
            sub: string;
        };
    }): Promise<any>;
}
//# sourceMappingURL=listings.controller.d.ts.map
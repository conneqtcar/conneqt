import { PrismaClient } from '@conneqtcar/database';
import { CreateListingDto } from './dto/create-listing.dto';
import { SearchListingsDto } from './dto/search-listings.dto';
export declare class ListingsService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    create(ownerId: string, dto: CreateListingDto): Promise<any>;
    search(dto: SearchListingsDto): Promise<{
        data: any;
        total: any;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findById(id: string): Promise<any>;
    deactivate(id: string, ownerId: string): Promise<any>;
}
//# sourceMappingURL=listings.service.d.ts.map
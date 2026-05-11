import { PrismaClient } from '@conneqtcar/database';
import { CreateDealerDto } from './dto/create-dealer.dto';
export declare class DealersService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    create(userId: string, dto: CreateDealerDto): Promise<any>;
    findById(id: string): Promise<any>;
    findByUser(userId: string): Promise<any>;
    findAll(page?: number, limit?: number): Promise<{
        data: any;
        total: any;
        page: number;
        limit: number;
        totalPages: number;
    }>;
}
//# sourceMappingURL=dealers.service.d.ts.map
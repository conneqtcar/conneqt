import { PrismaClient } from '@conneqtcar/database';
import { CreateDealerDto } from './dto/create-dealer.dto';
export declare class DealersService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    create(userId: string, dto: CreateDealerDto): Promise<{
        id: string;
        status: import("packages/database/dist/generated").$Enums.DealerStatus;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        companyName: string;
        cnpj: string;
        plan: import("packages/database/dist/generated").$Enums.DealerPlan;
        commissionRate: number;
    }>;
    findById(id: string): Promise<{
        user: {
            name: string;
            email: string;
            id: string;
        };
        listings: {
            id: string;
            listing: {
                vehicle: {
                    brand: string | null;
                    model: string | null;
                };
                price: number;
            };
        }[];
    } & {
        id: string;
        status: import("packages/database/dist/generated").$Enums.DealerStatus;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        companyName: string;
        cnpj: string;
        plan: import("packages/database/dist/generated").$Enums.DealerPlan;
        commissionRate: number;
    }>;
    findByUser(userId: string): Promise<({
        user: {
            name: string;
            id: string;
        };
    } & {
        id: string;
        status: import("packages/database/dist/generated").$Enums.DealerStatus;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        companyName: string;
        cnpj: string;
        plan: import("packages/database/dist/generated").$Enums.DealerPlan;
        commissionRate: number;
    }) | null>;
    findAll(page?: number, limit?: number): Promise<{
        data: ({
            user: {
                name: string;
                email: string;
                id: string;
            };
        } & {
            id: string;
            status: import("packages/database/dist/generated").$Enums.DealerStatus;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            companyName: string;
            cnpj: string;
            plan: import("packages/database/dist/generated").$Enums.DealerPlan;
            commissionRate: number;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
}
//# sourceMappingURL=dealers.service.d.ts.map
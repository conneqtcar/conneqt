import { DealersService } from './dealers.service';
import { CreateDealerDto } from './dto/create-dealer.dto';
export declare class DealersController {
    private readonly dealersService;
    constructor(dealersService: DealersService);
    create(req: {
        user: {
            sub: string;
        };
    }, dto: CreateDealerDto): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.DealerStatus;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        companyName: string;
        cnpj: string;
        plan: import("@prisma/client").$Enums.DealerPlan;
        commissionRate: number;
    }>;
    findMine(req: {
        user: {
            sub: string;
        };
    }): Promise<({
        user: {
            name: string;
            id: string;
        };
    } & {
        id: string;
        status: import("@prisma/client").$Enums.DealerStatus;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        companyName: string;
        cnpj: string;
        plan: import("@prisma/client").$Enums.DealerPlan;
        commissionRate: number;
    }) | null>;
    findOne(id: string): Promise<{
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
        status: import("@prisma/client").$Enums.DealerStatus;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        companyName: string;
        cnpj: string;
        plan: import("@prisma/client").$Enums.DealerPlan;
        commissionRate: number;
    }>;
}
//# sourceMappingURL=dealers.controller.d.ts.map
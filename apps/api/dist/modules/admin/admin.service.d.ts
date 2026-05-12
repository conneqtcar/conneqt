import { PrismaClient } from '@conneqtcar/database';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    getDashboardStats(): Promise<{
        totalUsers: number;
        totalListings: number;
        activeListings: number;
        pendingInspections: number;
        awaitingReviewInspections: number;
        totalDealers: number;
        updatedAt: Date;
    }>;
    getUsers(page?: number, limit?: number): Promise<{
        data: {
            name: string;
            type: import("packages/database/dist/generated").$Enums.UserType;
            email: string;
            id: string;
            status: import("packages/database/dist/generated").$Enums.UserStatus;
            kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
            createdAt: Date;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    blockUser(userId: string, reason: string): Promise<{
        id: string;
        status: import("packages/database/dist/generated").$Enums.UserStatus;
    }>;
    approveKyc(userId: string): Promise<{
        id: string;
        kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
    }>;
    rejectKyc(userId: string, reason: string): Promise<{
        id: string;
        kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
    }>;
    createDealer(dto: {
        companyName: string;
        cnpj: string;
        plan: 'STARTER' | 'PRO' | 'ENTERPRISE';
        name: string;
        email: string;
        phone?: string;
        password: string;
    }): Promise<{
        id: string;
        status: import("packages/database/dist/generated").$Enums.DealerStatus;
        createdAt: Date;
        user: {
            name: string;
            email: string;
            id: string;
        };
        companyName: string;
        cnpj: string;
        plan: import("packages/database/dist/generated").$Enums.DealerPlan;
    }>;
    deactivateListing(listingId: string): Promise<{
        id: string;
        status: import("packages/database/dist/generated").$Enums.ListingStatus;
    }>;
    createListing(dto: {
        brand: string;
        model: string;
        year: number;
        color: string;
        mileage: number;
        fuelType: string;
        transmission: string;
        bodyType?: string;
        doors?: number;
        plate?: string;
        chassis?: string;
        renavam?: string;
        price: number;
        description?: string;
        acceptsFinancing: boolean;
        acceptsTrade: boolean;
        sellerEmail?: string;
        photoUrls?: string[];
    }): Promise<{
        vehicle: {
            plate: string | null;
            brand: string | null;
            model: string | null;
            year: number | null;
        };
        seller: {
            name: string;
            email: string;
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
    }>;
}
//# sourceMappingURL=admin.service.d.ts.map
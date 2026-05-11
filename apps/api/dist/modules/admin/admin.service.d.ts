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
            type: import("@prisma/client").$Enums.UserType;
            email: string;
            id: string;
            status: import("@prisma/client").$Enums.UserStatus;
            kycStatus: import("@prisma/client").$Enums.KycStatus;
            createdAt: Date;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    blockUser(userId: string, reason: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.UserStatus;
    }>;
    approveKyc(userId: string): Promise<{
        id: string;
        kycStatus: import("@prisma/client").$Enums.KycStatus;
    }>;
    rejectKyc(userId: string, reason: string): Promise<{
        id: string;
        kycStatus: import("@prisma/client").$Enums.KycStatus;
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
        status: import("@prisma/client").$Enums.DealerStatus;
        createdAt: Date;
        user: {
            name: string;
            email: string;
            id: string;
        };
        companyName: string;
        cnpj: string;
        plan: import("@prisma/client").$Enums.DealerPlan;
    }>;
    deactivateListing(listingId: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.ListingStatus;
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
    }>;
}
//# sourceMappingURL=admin.service.d.ts.map
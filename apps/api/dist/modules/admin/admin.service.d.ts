import { PrismaClient } from '@conneqtcar/database';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    getDashboardStats(): Promise<{
        totalUsers: any;
        totalListings: any;
        activeListings: any;
        pendingInspections: any;
        awaitingReviewInspections: any;
        totalDealers: any;
        updatedAt: Date;
    }>;
    getUsers(page?: number, limit?: number): Promise<{
        data: any;
        total: any;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    blockUser(userId: string, reason: string): Promise<any>;
    approveKyc(userId: string): Promise<any>;
    rejectKyc(userId: string, reason: string): Promise<any>;
    createDealer(dto: {
        companyName: string;
        cnpj: string;
        plan: 'STARTER' | 'PRO' | 'ENTERPRISE';
        name: string;
        email: string;
        phone?: string;
        password: string;
    }): Promise<any>;
    deactivateListing(listingId: string): Promise<any>;
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
    }): Promise<any>;
}
//# sourceMappingURL=admin.service.d.ts.map
import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    dashboard(): Promise<{
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
    blockUser(id: string, body: {
        reason: string;
    }): Promise<any>;
    approveKyc(id: string): Promise<any>;
    rejectKyc(id: string, body: {
        reason: string;
    }): Promise<any>;
    createDealer(body: {
        companyName: string;
        cnpj: string;
        plan: 'STARTER' | 'PRO' | 'ENTERPRISE';
        name: string;
        email: string;
        phone?: string;
        password: string;
    }): Promise<any>;
    createListing(body: {
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
    deactivateListing(id: string): Promise<any>;
}
//# sourceMappingURL=admin.controller.d.ts.map
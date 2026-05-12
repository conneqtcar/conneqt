import { AdminService } from './admin.service';
import { StorageService } from '../storage/storage.service';
export declare class AdminController {
    private readonly adminService;
    private readonly storageService;
    constructor(adminService: AdminService, storageService: StorageService);
    dashboard(): Promise<{
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
    blockUser(id: string, body: {
        reason: string;
    }): Promise<{
        id: string;
        status: import("packages/database/dist/generated").$Enums.UserStatus;
    }>;
    approveKyc(id: string): Promise<{
        id: string;
        kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
    }>;
    rejectKyc(id: string, body: {
        reason: string;
    }): Promise<{
        id: string;
        kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
    }>;
    createDealer(body: {
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
    deactivateListing(id: string): Promise<{
        id: string;
        status: import("packages/database/dist/generated").$Enums.ListingStatus;
    }>;
    getInspections(page?: number, limit?: number, status?: string): Promise<{
        data: {
            type: import("packages/database/dist/generated").$Enums.InspectionType;
            id: string;
            status: import("packages/database/dist/generated").$Enums.InspectionStatus;
            createdAt: Date;
            _count: {
                media: number;
            };
            vehicle: {
                id: string;
                plate: string | null;
                brand: string | null;
                model: string | null;
                year: number | null;
                owner: {
                    name: string;
                };
            };
            score: number | null;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    uploadPhoto(file: Express.Multer.File): Promise<{
        url: string;
    }>;
}
//# sourceMappingURL=admin.controller.d.ts.map
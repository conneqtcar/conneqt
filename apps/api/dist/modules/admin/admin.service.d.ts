import { PrismaClient, Prisma } from '@conneqtcar/database';
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
    promoteToAdmin(userId: string): Promise<{
        name: string;
        type: import("packages/database/dist/generated").$Enums.UserType;
        email: string;
        id: string;
    }>;
    getListing(listingId: string): Promise<{
        vehicle: {
            inspections: ({
                media: {
                    type: import("packages/database/dist/generated").$Enums.MediaType;
                    id: string;
                    createdAt: Date;
                    inspectionId: string;
                    url: string;
                    key: string;
                    hash: string;
                    metadata: Prisma.JsonValue | null;
                }[];
            } & {
                type: import("packages/database/dist/generated").$Enums.InspectionType;
                id: string;
                status: import("packages/database/dist/generated").$Enums.InspectionStatus;
                createdAt: Date;
                updatedAt: Date;
                vehicleId: string;
                score: number | null;
                reviewerId: string | null;
                reviewedAt: Date | null;
                reviewNotes: string | null;
                aiFlags: string[];
                aiProcessedAt: Date | null;
            })[];
        } & {
            id: string;
            status: import("packages/database/dist/generated").$Enums.VehicleStatus;
            createdAt: Date;
            updatedAt: Date;
            plate: string | null;
            chassis: string | null;
            renavam: string | null;
            brand: string | null;
            model: string | null;
            year: number | null;
            color: string | null;
            mileage: number;
            fuelType: import("packages/database/dist/generated").$Enums.FuelType | null;
            transmission: import("packages/database/dist/generated").$Enums.TransmissionType | null;
            fipeCode: string | null;
            fipePrice: number | null;
            ownerId: string;
        };
        seller: {
            name: string;
            email: string;
            id: string;
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
    updateListing(listingId: string, dto: {
        brand?: string;
        model?: string;
        year?: number;
        color?: string;
        mileage?: number;
        fuelType?: string;
        transmission?: string;
        bodyType?: string;
        doors?: number;
        plate?: string;
        chassis?: string;
        renavam?: string;
        price?: number;
        description?: string;
        acceptsFinancing?: boolean;
        acceptsTrade?: boolean;
        photoUrls?: string[];
    }): Promise<{
        vehicle: {
            inspections: ({
                media: {
                    type: import("packages/database/dist/generated").$Enums.MediaType;
                    id: string;
                    createdAt: Date;
                    inspectionId: string;
                    url: string;
                    key: string;
                    hash: string;
                    metadata: Prisma.JsonValue | null;
                }[];
            } & {
                type: import("packages/database/dist/generated").$Enums.InspectionType;
                id: string;
                status: import("packages/database/dist/generated").$Enums.InspectionStatus;
                createdAt: Date;
                updatedAt: Date;
                vehicleId: string;
                score: number | null;
                reviewerId: string | null;
                reviewedAt: Date | null;
                reviewNotes: string | null;
                aiFlags: string[];
                aiProcessedAt: Date | null;
            })[];
        } & {
            id: string;
            status: import("packages/database/dist/generated").$Enums.VehicleStatus;
            createdAt: Date;
            updatedAt: Date;
            plate: string | null;
            chassis: string | null;
            renavam: string | null;
            brand: string | null;
            model: string | null;
            year: number | null;
            color: string | null;
            mileage: number;
            fuelType: import("packages/database/dist/generated").$Enums.FuelType | null;
            transmission: import("packages/database/dist/generated").$Enums.TransmissionType | null;
            fipeCode: string | null;
            fipePrice: number | null;
            ownerId: string;
        };
        seller: {
            name: string;
            email: string;
            id: string;
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
    deactivateListing(listingId: string): Promise<{
        id: string;
        status: import("packages/database/dist/generated").$Enums.ListingStatus;
    }>;
    getAllInspections(page?: number, limit?: number, status?: string): Promise<{
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
    }, adminUserId: string): Promise<{
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
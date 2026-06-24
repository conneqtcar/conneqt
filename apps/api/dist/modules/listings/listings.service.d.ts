import { PrismaClient } from '@conneqtcar/database';
import { CreateListingDto } from './dto/create-listing.dto';
import { SearchListingsDto } from './dto/search-listings.dto';
export declare class ListingsService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    create(ownerId: string, dto: CreateListingDto): Promise<{
        vehicle: {
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
    search(dto: SearchListingsDto): Promise<{
        data: ({
            vehicle: {
                inspections: {
                    id: string;
                    score: number | null;
                    media: {
                        type: import("packages/database/dist/generated").$Enums.MediaType;
                        url: string;
                    }[];
                }[];
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
                id: string;
                kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
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
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findById(id: string): Promise<{
        _count: {
            proposals: number;
        };
        vehicle: {
            inspections: ({
                items: {
                    id: string;
                    createdAt: Date;
                    result: string;
                    score: number | null;
                    inspectionId: string;
                    category: string;
                    item: string;
                    notes: string | null;
                }[];
                media: {
                    type: import("packages/database/dist/generated").$Enums.MediaType;
                    id: string;
                    createdAt: Date;
                    inspectionId: string;
                    url: string;
                    key: string;
                    hash: string;
                    metadata: import("packages/database/dist/generated/runtime/library").JsonValue | null;
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
            phone: string | null;
            id: string;
            kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
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
    deactivate(id: string, ownerId: string): Promise<{
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
//# sourceMappingURL=listings.service.d.ts.map
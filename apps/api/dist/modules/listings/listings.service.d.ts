import { PrismaClient } from '@conneqtcar/database';
import { CreateListingDto } from './dto/create-listing.dto';
import { SearchListingsDto } from './dto/search-listings.dto';
export declare class ListingsService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    create(ownerId: string, dto: CreateListingDto): Promise<{
        vehicle: {
            id: string;
            status: import("@prisma/client").$Enums.VehicleStatus;
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
            fuelType: import("@prisma/client").$Enums.FuelType | null;
            transmission: import("@prisma/client").$Enums.TransmissionType | null;
            fipeCode: string | null;
            fipePrice: number | null;
            ownerId: string;
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
    search(dto: SearchListingsDto): Promise<{
        data: ({
            vehicle: {
                inspections: {
                    id: string;
                    score: number | null;
                }[];
            } & {
                id: string;
                status: import("@prisma/client").$Enums.VehicleStatus;
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
                fuelType: import("@prisma/client").$Enums.FuelType | null;
                transmission: import("@prisma/client").$Enums.TransmissionType | null;
                fipeCode: string | null;
                fipePrice: number | null;
                ownerId: string;
            };
            seller: {
                name: string;
                id: string;
                kycStatus: import("@prisma/client").$Enums.KycStatus;
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
                    notes: string | null;
                    inspectionId: string;
                    item: string;
                    category: string;
                }[];
                media: {
                    type: import("@prisma/client").$Enums.MediaType;
                    id: string;
                    createdAt: Date;
                    url: string;
                    key: string;
                    hash: string;
                    metadata: import(".prisma/client/runtime/library").JsonValue | null;
                    inspectionId: string;
                }[];
            } & {
                type: import("@prisma/client").$Enums.InspectionType;
                id: string;
                status: import("@prisma/client").$Enums.InspectionStatus;
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
            status: import("@prisma/client").$Enums.VehicleStatus;
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
            fuelType: import("@prisma/client").$Enums.FuelType | null;
            transmission: import("@prisma/client").$Enums.TransmissionType | null;
            fipeCode: string | null;
            fipePrice: number | null;
            ownerId: string;
        };
        seller: {
            name: string;
            phone: string | null;
            id: string;
            kycStatus: import("@prisma/client").$Enums.KycStatus;
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
    deactivate(id: string, ownerId: string): Promise<{
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
//# sourceMappingURL=listings.service.d.ts.map
import { PrismaClient } from '@conneqtcar/database';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { FipeService } from '../fipe/fipe.service';
export declare class VehiclesService {
    private readonly prisma;
    private readonly fipeService;
    constructor(prisma: PrismaClient, fipeService: FipeService);
    create(ownerId: string, dto: CreateVehicleDto): Promise<{
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
    }>;
    findByOwner(ownerId: string): Promise<({
        inspections: {
            id: string;
            status: import("packages/database/dist/generated").$Enums.InspectionStatus;
            score: number | null;
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
    })[]>;
    findById(id: string): Promise<{
        owner: {
            name: string;
            id: string;
            kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
        };
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
        listings: {
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
    }>;
    update(id: string, ownerId: string, dto: UpdateVehicleDto): Promise<{
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
    }>;
    getFipeSuggestion(plate: string): Promise<import("../fipe/fipe.service").FipeVehicleInfo>;
}
//# sourceMappingURL=vehicles.service.d.ts.map
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    create(req: {
        user: {
            sub: string;
        };
    }, dto: CreateVehicleDto): Promise<{
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
    }>;
    findMine(req: {
        user: {
            sub: string;
        };
    }): Promise<({
        inspections: {
            id: string;
            status: import("@prisma/client").$Enums.InspectionStatus;
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
    })[]>;
    fipeByPlate(plate: string): Promise<import("../fipe/fipe.service").FipeVehicleInfo>;
    findOne(id: string): Promise<{
        owner: {
            name: string;
            id: string;
            kycStatus: import("@prisma/client").$Enums.KycStatus;
        };
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
        listings: {
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
    }>;
    update(id: string, req: {
        user: {
            sub: string;
        };
    }, dto: UpdateVehicleDto): Promise<{
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
    }>;
}
//# sourceMappingURL=vehicles.controller.d.ts.map
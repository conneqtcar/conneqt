import { PrismaClient } from '@conneqtcar/database';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { FipeService } from '../fipe/fipe.service';
export declare class VehiclesService {
    private readonly prisma;
    private readonly fipeService;
    constructor(prisma: PrismaClient, fipeService: FipeService);
    create(ownerId: string, dto: CreateVehicleDto): Promise<any>;
    findByOwner(ownerId: string): Promise<any>;
    findById(id: string): Promise<any>;
    update(id: string, ownerId: string, dto: UpdateVehicleDto): Promise<any>;
    getFipeSuggestion(plate: string): Promise<import("../fipe/fipe.service").FipeVehicleInfo>;
}
//# sourceMappingURL=vehicles.service.d.ts.map
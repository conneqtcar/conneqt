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
    }, dto: CreateVehicleDto): Promise<any>;
    findMine(req: {
        user: {
            sub: string;
        };
    }): Promise<any>;
    fipeByPlate(plate: string): Promise<import("../fipe/fipe.service").FipeVehicleInfo>;
    findOne(id: string): Promise<any>;
    update(id: string, req: {
        user: {
            sub: string;
        };
    }, dto: UpdateVehicleDto): Promise<any>;
}
//# sourceMappingURL=vehicles.controller.d.ts.map
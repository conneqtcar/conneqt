import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';
export interface FipeVehicleInfo {
    fipeCode?: string;
    brand?: string;
    model?: string;
    modelYear?: number;
    fipePrice?: number;
    fuelType?: string;
}
type VehicleType = 'cars' | 'motorcycles' | 'trucks';
export declare class FipeService {
    private readonly httpService;
    private readonly configService;
    private readonly cacheManager;
    private readonly fipeApiUrl;
    private readonly subscriptionToken?;
    constructor(httpService: HttpService, configService: ConfigService, cacheManager: Cache);
    private get headers();
    private cachedGet;
    getBrands(vehicleType?: VehicleType): Promise<unknown>;
    getModels(brandCode: string, vehicleType?: VehicleType): Promise<unknown>;
    getModelYears(brandCode: string, modelCode: string, vehicleType?: VehicleType): Promise<unknown>;
    getPrice(brandCode: string, modelCode: string, yearCode: string, vehicleType?: VehicleType): Promise<unknown>;
    queryByPlate(plate: string): Promise<FipeVehicleInfo>;
}
export {};
//# sourceMappingURL=fipe.service.d.ts.map
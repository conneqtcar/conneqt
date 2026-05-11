import { FipeService } from './fipe.service';
export declare class FipeController {
    private readonly fipeService;
    constructor(fipeService: FipeService);
    getBrands(type?: 'cars' | 'motorcycles' | 'trucks'): Promise<unknown>;
    getModels(brandCode: string, type?: 'cars' | 'motorcycles' | 'trucks'): Promise<unknown>;
    getYears(brandCode: string, modelCode: string, type?: 'cars' | 'motorcycles' | 'trucks'): Promise<unknown>;
    getPrice(brandCode: string, modelCode: string, yearCode: string, type?: 'cars' | 'motorcycles' | 'trucks'): Promise<unknown>;
    queryByPlate(plate: string): Promise<import("./fipe.service").FipeVehicleInfo>;
}
//# sourceMappingURL=fipe.controller.d.ts.map
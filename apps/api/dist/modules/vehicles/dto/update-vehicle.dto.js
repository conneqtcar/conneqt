"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVehicleDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_vehicle_dto_1 = require("./create-vehicle.dto");
class UpdateVehicleDto extends (0, swagger_1.PartialType)(create_vehicle_dto_1.CreateVehicleDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateVehicleDto = UpdateVehicleDto;

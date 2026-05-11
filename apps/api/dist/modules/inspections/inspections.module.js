"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InspectionsModule = void 0;
const common_1 = require("@nestjs/common");
const inspections_controller_1 = require("./inspections.controller");
const inspections_service_1 = require("./inspections.service");
const inspection_queue_service_1 = require("./inspection-queue.service");
const inspection_ai_service_1 = require("./inspection-ai.service");
const storage_module_1 = require("../storage/storage.module");
let InspectionsModule = class InspectionsModule {
};
exports.InspectionsModule = InspectionsModule;
exports.InspectionsModule = InspectionsModule = __decorate([
    (0, common_1.Module)({
        imports: [storage_module_1.StorageModule],
        controllers: [inspections_controller_1.InspectionsController],
        providers: [inspections_service_1.InspectionsService, inspection_queue_service_1.InspectionQueueService, inspection_ai_service_1.InspectionAiService],
        exports: [inspections_service_1.InspectionsService],
    })
], InspectionsModule);

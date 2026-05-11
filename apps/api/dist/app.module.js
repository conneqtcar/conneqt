"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const event_emitter_1 = require("@nestjs/event-emitter");
const schedule_1 = require("@nestjs/schedule");
const cache_manager_1 = require("@nestjs/cache-manager");
const redis_1 = require("@keyv/redis");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const vehicles_module_1 = require("./modules/vehicles/vehicles.module");
const inspections_module_1 = require("./modules/inspections/inspections.module");
const listings_module_1 = require("./modules/listings/listings.module");
const proposals_module_1 = require("./modules/proposals/proposals.module");
const dealers_module_1 = require("./modules/dealers/dealers.module");
const admin_module_1 = require("./modules/admin/admin.module");
const fipe_module_1 = require("./modules/fipe/fipe.module");
const storage_module_1 = require("./modules/storage/storage.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const chat_module_1 = require("./modules/chat/chat.module");
const database_module_1 = require("./modules/database/database.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env.local', '.env'],
            }),
            throttler_1.ThrottlerModule.forRoot([
                { name: 'short', ttl: 1000, limit: 10 },
                { name: 'medium', ttl: 10000, limit: 50 },
                { name: 'long', ttl: 60000, limit: 200 },
            ]),
            cache_manager_1.CacheModule.registerAsync({
                isGlobal: true,
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    stores: [
                        (0, redis_1.createKeyv)(configService.get('REDIS_URL', 'redis://localhost:6379')),
                    ],
                    ttl: 60000,
                }),
                inject: [config_1.ConfigService],
            }),
            event_emitter_1.EventEmitterModule.forRoot(),
            schedule_1.ScheduleModule.forRoot(),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            vehicles_module_1.VehiclesModule,
            inspections_module_1.InspectionsModule,
            listings_module_1.ListingsModule,
            proposals_module_1.ProposalsModule,
            dealers_module_1.DealersModule,
            admin_module_1.AdminModule,
            fipe_module_1.FipeModule,
            storage_module_1.StorageModule,
            notifications_module_1.NotificationsModule,
            chat_module_1.ChatModule,
        ],
    })
], AppModule);

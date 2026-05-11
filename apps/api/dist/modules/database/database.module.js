"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = exports.PRISMA_SERVICE = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_1 = require("@conneqtcar/database");
exports.PRISMA_SERVICE = 'PRISMA_SERVICE';
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            {
                provide: exports.PRISMA_SERVICE,
                useFactory: (configService) => {
                    const prisma = new database_1.PrismaClient({
                        datasources: {
                            db: { url: configService.get('DATABASE_URL') },
                        },
                        log: configService.get('NODE_ENV') === 'development'
                            ? ['query', 'warn', 'error']
                            : ['warn', 'error'],
                    });
                    return prisma;
                },
                inject: [config_1.ConfigService],
            },
        ],
        exports: [exports.PRISMA_SERVICE],
    })
], DatabaseModule);

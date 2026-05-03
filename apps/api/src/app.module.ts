import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { CacheModule } from '@nestjs/cache-manager';
import { createKeyv } from '@keyv/redis';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { InspectionsModule } from './modules/inspections/inspections.module';
import { ListingsModule } from './modules/listings/listings.module';
import { ProposalsModule } from './modules/proposals/proposals.module';
import { DealersModule } from './modules/dealers/dealers.module';
import { AdminModule } from './modules/admin/admin.module';
import { FipeModule } from './modules/fipe/fipe.module';
import { StorageModule } from './modules/storage/storage.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ChatModule } from './modules/chat/chat.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    // Config global
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),

    // Rate limiting
    ThrottlerModule.forRoot([
      { name: 'short', ttl: 1000, limit: 10 },
      { name: 'medium', ttl: 10000, limit: 50 },
      { name: 'long', ttl: 60000, limit: 200 },
    ]),

    // Cache com Redis
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        stores: [
          createKeyv(configService.get<string>('REDIS_URL', 'redis://localhost:6379')),
        ],
        ttl: 60000,
      }),
      inject: [ConfigService],
    }),

    // Eventos internos
    EventEmitterModule.forRoot(),

    // Jobs agendados
    ScheduleModule.forRoot(),

    // Módulos de domínio
    DatabaseModule,
    AuthModule,
    UsersModule,
    VehiclesModule,
    InspectionsModule,
    ListingsModule,
    ProposalsModule,
    DealersModule,
    AdminModule,
    FipeModule,
    StorageModule,
    NotificationsModule,
    ChatModule,
  ],
})
export class AppModule {}


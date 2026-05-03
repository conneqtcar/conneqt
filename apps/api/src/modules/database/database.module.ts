import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@conneqtcar/database';

export const PRISMA_SERVICE = 'PRISMA_SERVICE';

@Global()
@Module({
  providers: [
    {
      provide: PRISMA_SERVICE,
      useFactory: (configService: ConfigService) => {
        const prisma = new PrismaClient({
          datasources: {
            db: { url: configService.get<string>('DATABASE_URL') },
          },
          log:
            configService.get('NODE_ENV') === 'development'
              ? ['query', 'warn', 'error']
              : ['warn', 'error'],
        });
        return prisma;
      },
      inject: [ConfigService],
    },
  ],
  exports: [PRISMA_SERVICE],
})
export class DatabaseModule {}


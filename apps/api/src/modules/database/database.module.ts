import { Module, Global, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@conneqtcar/database';

export const PRISMA_SERVICE = 'PRISMA_SERVICE';

@Global()
@Module({
  providers: [
    {
      provide: PRISMA_SERVICE,
      useFactory: async (configService: ConfigService) => {
        const prisma = new PrismaClient({
          datasources: {
            db: { url: configService.get<string>('DATABASE_URL') },
          },
          log:
            configService.get('NODE_ENV') === 'development'
              ? ['query', 'warn', 'error']
              : ['warn', 'error'],
        });
        await prisma.$connect();
        new Logger('DatabaseModule').log('Prisma conectado ao banco de dados.');
        return prisma;
      },
      inject: [ConfigService],
    },
  ],
  exports: [PRISMA_SERVICE],
})
export class DatabaseModule {}


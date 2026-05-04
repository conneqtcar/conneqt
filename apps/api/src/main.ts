import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  const configService = app.get(ConfigService);

  // Security
  app.use(helmet());
  app.use(compression());

  // Health check (usado pelo Render)
  app
    .getHttpAdapter()
    .getInstance()
    .get('/api/v1/health', (_req: unknown, res: { json: (v: unknown) => void }) => {
      res.json({ status: 'ok', timestamp: new Date().toISOString() });
    });

  // CORS
  app.enableCors({
    origin: [
      configService.get<string>('FRONTEND_URL', 'http://localhost:3000'),
      configService.get<string>('SELLER_URL', 'http://localhost:5001'),
      configService.get<string>('ADMIN_URL', 'http://localhost:3002'),
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });

  // API Versioning
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.setGlobalPrefix('api');

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Swagger (apenas em dev/staging)
  if (configService.get('NODE_ENV') !== 'production') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Conneqt API')
      .setDescription('Plataforma de Intermediação de Veículos — API REST')
      .setVersion('1.0')
      .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
      .addTag('auth', 'Autenticação e autorização')
      .addTag('users', 'Gestão de usuários')
      .addTag('vehicles', 'Cadastro e consulta de veículos')
      .addTag('inspections', 'Fluxo de inspeção')
      .addTag('listings', 'Anúncios do marketplace')
      .addTag('proposals', 'Propostas de compra')
      .addTag('dealers', 'Lojistas parceiros')
      .addTag('admin', 'Operações administrativas')
      .addTag('fipe', 'Consulta FIPE e DETRAN')
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api/docs', app, document, {
      swaggerOptions: { persistAuthorization: true },
    });
  }

  // Render injeta PORT automaticamente; API_PORT serve como fallback local
  const port = process.env.PORT ?? configService.get<number>('API_PORT', 3001);
  await app.listen(port, '0.0.0.0');

  console.log(`\n🚀 Conneqt API rodando em: http://localhost:${port}`);
  console.log(`📑 Swagger disponível em:     http://localhost:${port}/api/docs\n`);
}

bootstrap();


"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    });
    const configService = app.get(config_1.ConfigService);
    app.use((0, helmet_1.default)());
    app.use((0, compression_1.default)());
    app
        .getHttpAdapter()
        .getInstance()
        .get('/api/v1/health', (_req, res) => {
        res.json({ status: 'ok', timestamp: new Date().toISOString() });
    });
    app.enableCors({
        origin: [
            configService.get('FRONTEND_URL', 'http://localhost:3000'),
            configService.get('SELLER_URL', 'http://localhost:5001'),
            configService.get('ADMIN_URL', 'http://localhost:3002'),
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    });
    app.enableVersioning({ type: common_1.VersioningType.URI, defaultVersion: '1' });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    if (configService.get('NODE_ENV') !== 'production') {
        const swaggerConfig = new swagger_1.DocumentBuilder()
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
        const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
        swagger_1.SwaggerModule.setup('api/docs', app, document, {
            swaggerOptions: { persistAuthorization: true },
        });
    }
    const port = process.env.PORT ?? configService.get('API_PORT', 3001);
    await app.listen(port, '0.0.0.0');
    console.log(`\n🚀 Conneqt API rodando em: http://localhost:${port}`);
    console.log(`📑 Swagger disponível em:     http://localhost:${port}/api/docs\n`);
}
bootstrap();

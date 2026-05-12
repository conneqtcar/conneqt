import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@conneqtcar/database';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly configService;
    constructor(prisma: PrismaClient, jwtService: JwtService, configService: ConfigService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            name: string;
            type: import("packages/database/dist/generated").$Enums.UserType;
            email: string;
            id: string;
            kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
            createdAt: Date;
        };
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            email: string;
            name: string;
            type: import("packages/database/dist/generated").$Enums.UserType;
            kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
        };
    }>;
    logout(userId: string): Promise<{
        message: string;
    }>;
    refreshTokens(userId: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    validateUser(email: string, password: string): Promise<{
        name: string;
        type: import("packages/database/dist/generated").$Enums.UserType;
        email: string;
        phone: string | null;
        id: string;
        cpf: string | null;
        status: import("packages/database/dist/generated").$Enums.UserStatus;
        kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
        avatarUrl: string | null;
        kycSubmittedAt: Date | null;
        kycApprovedAt: Date | null;
        kycRejectionReason: string | null;
        blockReason: string | null;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    private generateTokens;
    private storeRefreshToken;
}
//# sourceMappingURL=auth.service.d.ts.map
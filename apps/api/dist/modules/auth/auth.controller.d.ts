import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            name: string;
            type: import("@prisma/client").$Enums.UserType;
            email: string;
            id: string;
            kycStatus: import("@prisma/client").$Enums.KycStatus;
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
            type: import("@prisma/client").$Enums.UserType;
            kycStatus: import("@prisma/client").$Enums.KycStatus;
        };
    }>;
    logout(req: {
        user: {
            sub: string;
        };
    }): Promise<{
        message: string;
    }>;
    refresh(req: {
        user: {
            sub: string;
        };
    }, dto: RefreshTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    me(req: {
        user: Record<string, unknown>;
    }): Record<string, unknown>;
}
//# sourceMappingURL=auth.controller.d.ts.map
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<{
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
}
export {};
//# sourceMappingURL=local.strategy.d.ts.map
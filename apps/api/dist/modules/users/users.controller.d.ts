import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { KycSubmitDto } from './dto/kyc-submit.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: {
        user: {
            sub: string;
        };
    }): Promise<{
        name: string;
        type: import("packages/database/dist/generated").$Enums.UserType;
        email: string;
        phone: string | null;
        id: string;
        cpf: string | null;
        status: import("packages/database/dist/generated").$Enums.UserStatus;
        kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateProfile(req: {
        user: {
            sub: string;
        };
    }, dto: UpdateUserDto): Promise<{
        name: string;
        type: import("packages/database/dist/generated").$Enums.UserType;
        email: string;
        phone: string | null;
        id: string;
        kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
        avatarUrl: string | null;
        updatedAt: Date;
    }>;
    submitKyc(req: {
        user: {
            sub: string;
        };
    }, dto: KycSubmitDto): Promise<{
        id: string;
        kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
    }>;
    findOne(id: string): Promise<{
        name: string;
        type: import("packages/database/dist/generated").$Enums.UserType;
        email: string;
        phone: string | null;
        id: string;
        cpf: string | null;
        status: import("packages/database/dist/generated").$Enums.UserStatus;
        kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
//# sourceMappingURL=users.controller.d.ts.map
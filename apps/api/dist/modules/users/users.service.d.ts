import { PrismaClient } from '@conneqtcar/database';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    findById(id: string): Promise<{
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
    update(id: string, dto: UpdateUserDto): Promise<{
        name: string;
        type: import("packages/database/dist/generated").$Enums.UserType;
        email: string;
        phone: string | null;
        id: string;
        kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
        avatarUrl: string | null;
        updatedAt: Date;
    }>;
    submitKyc(userId: string, data: {
        cpf: string;
        selfieUrl: string;
    }): Promise<{
        id: string;
        kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
    }>;
    findAll(page?: number, limit?: number): Promise<{
        data: {
            name: string;
            type: import("packages/database/dist/generated").$Enums.UserType;
            email: string;
            id: string;
            status: import("packages/database/dist/generated").$Enums.UserStatus;
            kycStatus: import("packages/database/dist/generated").$Enums.KycStatus;
            createdAt: Date;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
}
//# sourceMappingURL=users.service.d.ts.map
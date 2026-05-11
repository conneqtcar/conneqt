import { PrismaClient } from '@conneqtcar/database';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    findById(id: string): Promise<any>;
    update(id: string, dto: UpdateUserDto): Promise<any>;
    submitKyc(userId: string, data: {
        cpf: string;
        selfieUrl: string;
    }): Promise<any>;
    findAll(page?: number, limit?: number): Promise<{
        data: any;
        total: any;
        page: number;
        limit: number;
        totalPages: number;
    }>;
}
//# sourceMappingURL=users.service.d.ts.map
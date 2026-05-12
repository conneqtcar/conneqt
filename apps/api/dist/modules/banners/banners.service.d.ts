import { PrismaClient } from '@conneqtcar/database';
export declare class BannersService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    findActive(): import("@conneqtcar/database").Prisma.PrismaPromise<{
        title: string | null;
        id: string;
        imageUrl: string;
        order: number;
    }[]>;
    findAll(): import("@conneqtcar/database").Prisma.PrismaPromise<{
        title: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        order: number;
        active: boolean;
    }[]>;
    create(data: {
        title?: string;
        imageUrl: string;
        order?: number;
        active?: boolean;
    }): import("@conneqtcar/database").Prisma.Prisma__BannerClient<{
        title: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        order: number;
        active: boolean;
    }, never, import("packages/database/dist/generated/runtime/library").DefaultArgs, import("@conneqtcar/database").Prisma.PrismaClientOptions>;
    update(id: string, data: {
        title?: string;
        imageUrl?: string;
        order?: number;
        active?: boolean;
    }): import("@conneqtcar/database").Prisma.Prisma__BannerClient<{
        title: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        order: number;
        active: boolean;
    }, never, import("packages/database/dist/generated/runtime/library").DefaultArgs, import("@conneqtcar/database").Prisma.PrismaClientOptions>;
    remove(id: string): import("@conneqtcar/database").Prisma.Prisma__BannerClient<{
        title: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        order: number;
        active: boolean;
    }, never, import("packages/database/dist/generated/runtime/library").DefaultArgs, import("@conneqtcar/database").Prisma.PrismaClientOptions>;
}
//# sourceMappingURL=banners.service.d.ts.map
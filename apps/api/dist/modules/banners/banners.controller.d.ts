import { BannersService } from './banners.service';
import { StorageService } from '../storage/storage.service';
declare class CreateBannerDto {
    title?: string;
    imageUrl: string;
    order?: number;
    active?: boolean;
}
declare class UpdateBannerDto {
    title?: string;
    imageUrl?: string;
    order?: number;
    active?: boolean;
}
export declare class BannersController {
    private readonly bannersService;
    private readonly storageService;
    constructor(bannersService: BannersService, storageService: StorageService);
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
    uploadImage(file: Express.Multer.File): Promise<{
        url: string;
    }>;
    create(dto: CreateBannerDto): import("@conneqtcar/database").Prisma.Prisma__BannerClient<{
        title: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
        order: number;
        active: boolean;
    }, never, import("packages/database/dist/generated/runtime/library").DefaultArgs, import("@conneqtcar/database").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateBannerDto): import("@conneqtcar/database").Prisma.Prisma__BannerClient<{
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
export {};
//# sourceMappingURL=banners.controller.d.ts.map
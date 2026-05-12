import { PrismaClient } from '@conneqtcar/database';
interface SaveMessageData {
    listingId: string;
    senderId: string;
    content: string;
}
export declare class ChatService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    saveMessage(data: SaveMessageData): Promise<{
        sender: {
            name: string;
            id: string;
            avatarUrl: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        content: string;
        listingId: string;
        readAt: Date | null;
        senderId: string;
    }>;
    getMessages(listingId: string, page?: number, limit?: number): Promise<({
        sender: {
            name: string;
            id: string;
            avatarUrl: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        content: string;
        listingId: string;
        readAt: Date | null;
        senderId: string;
    })[]>;
    getConversationsForSeller(sellerId: string): Promise<{
        listingId: string;
        price: number;
        status: import("packages/database/dist/generated").$Enums.ListingStatus;
        vehicle: {
            brand: string | null;
            model: string | null;
            year: number | null;
        };
        lastMessage: {
            createdAt: Date;
            content: string;
            sender: {
                name: string;
                id: string;
            };
        };
    }[]>;
}
export {};
//# sourceMappingURL=chat.service.d.ts.map
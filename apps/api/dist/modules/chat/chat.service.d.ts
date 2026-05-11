import { PrismaClient } from '@conneqtcar/database';
interface SaveMessageData {
    listingId: string;
    senderId: string;
    content: string;
}
export declare class ChatService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    saveMessage(data: SaveMessageData): Promise<any>;
    getMessages(listingId: string, page?: number, limit?: number): Promise<any>;
    getConversationsForSeller(sellerId: string): Promise<any>;
}
export {};
//# sourceMappingURL=chat.service.d.ts.map
import { ChatService } from './chat.service';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    getConversations(req: {
        user: {
            sub: string;
        };
    }): Promise<{
        listingId: string;
        price: number;
        status: import("@prisma/client").$Enums.ListingStatus;
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
//# sourceMappingURL=chat.controller.d.ts.map
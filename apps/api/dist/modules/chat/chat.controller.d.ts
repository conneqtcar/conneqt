import { ChatService } from './chat.service';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    getConversations(req: {
        user: {
            sub: string;
        };
    }): Promise<any>;
}
//# sourceMappingURL=chat.controller.d.ts.map
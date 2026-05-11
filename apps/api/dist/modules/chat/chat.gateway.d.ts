import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ChatService } from './chat.service';
interface SendMessageData {
    listingId: string;
    content: string;
}
interface JoinRoomData {
    listingId: string;
}
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly chatService;
    private readonly jwtService;
    private readonly configService;
    server: Server;
    constructor(chatService: ChatService, jwtService: JwtService, configService: ConfigService);
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleJoinRoom(data: JoinRoomData, client: Socket): void;
    handleMessage(data: SendMessageData, client: Socket): Promise<any>;
    getMessages(data: JoinRoomData & {
        page: number;
    }): Promise<any>;
}
export {};
//# sourceMappingURL=chat.gateway.d.ts.map
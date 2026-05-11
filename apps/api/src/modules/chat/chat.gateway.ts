import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
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

const ALLOWED_ORIGINS = () => [
  process.env.FRONTEND_URL ?? 'http://localhost:3000',
  process.env.SELLER_URL ?? 'http://localhost:3002',
  process.env.ADMIN_URL ?? 'http://localhost:3003',
];

@WebSocketGateway({
  cors: {
    origin: (origin: string, callback: (err: Error | null, allow?: boolean) => void) => {
      if (!origin || ALLOWED_ORIGINS().includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  },
  namespace: '/chat',
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly chatService: ChatService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth?.token as string | undefined;
      if (!token) {
        client.disconnect(true);
        return;
      }
      const secret = this.configService.get<string>('JWT_SECRET');
      const payload = this.jwtService.verify<{ sub: string }>(token, { secret });
      client.data.userId = payload.sub;
      console.log(`[Chat] Cliente conectado: ${client.id}, userId: ${payload.sub}`);
    } catch {
      client.disconnect(true);
    }
  }

  handleDisconnect(client: Socket) {
    console.log(`[Chat] Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('join_room')
  handleJoinRoom(
    @MessageBody() data: JoinRoomData,
    @ConnectedSocket() client: Socket,
  ) {
    const room = `listing-${data.listingId}`;
    client.join(room);
    client.emit('joined', { room });
  }

  @SubscribeMessage('send_message')
  async handleMessage(
    @MessageBody() data: SendMessageData,
    @ConnectedSocket() client: Socket,
  ) {
    const senderId = client.data.userId as string | undefined;
    if (!senderId) {
      client.disconnect(true);
      return;
    }

    const message = await this.chatService.saveMessage({
      listingId: data.listingId,
      senderId,
      content: data.content,
    });

    const room = `listing-${data.listingId}`;
    this.server.to(room).emit('new_message', message);

    return message;
  }

  @SubscribeMessage('get_messages')
  async getMessages(
    @MessageBody() data: JoinRoomData & { page: number },
  ) {
    return this.chatService.getMessages(data.listingId, data.page ?? 1);
  }
}


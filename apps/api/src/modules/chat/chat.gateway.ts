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
import { ChatService } from './chat.service';

interface SendMessageData {
  listingId: string;
  content: string;
}

interface JoinRoomData {
  listingId: string;
}

@WebSocketGateway({
  cors: { origin: '*', credentials: true },
  namespace: '/chat',
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: Socket) {
    console.log(`[Chat] Cliente conectado: ${client.id}`);
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
    @MessageBody() data: SendMessageData & { senderId: string },
    @ConnectedSocket() client: Socket,
  ) {
    const message = await this.chatService.saveMessage({
      listingId: data.listingId,
      senderId: data.senderId,
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


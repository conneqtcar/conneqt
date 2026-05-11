"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const chat_service_1 = require("./chat.service");
const ALLOWED_ORIGINS = () => [
    process.env.FRONTEND_URL ?? 'http://localhost:3000',
    process.env.SELLER_URL ?? 'http://localhost:3002',
    process.env.ADMIN_URL ?? 'http://localhost:3003',
];
let ChatGateway = class ChatGateway {
    chatService;
    jwtService;
    configService;
    server;
    constructor(chatService, jwtService, configService) {
        this.chatService = chatService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    handleConnection(client) {
        try {
            const token = client.handshake.auth?.token;
            if (!token) {
                client.disconnect(true);
                return;
            }
            const secret = this.configService.get('JWT_SECRET');
            const payload = this.jwtService.verify(token, { secret });
            client.data.userId = payload.sub;
            console.log(`[Chat] Cliente conectado: ${client.id}, userId: ${payload.sub}`);
        }
        catch {
            client.disconnect(true);
        }
    }
    handleDisconnect(client) {
        console.log(`[Chat] Cliente desconectado: ${client.id}`);
    }
    handleJoinRoom(data, client) {
        const room = `listing-${data.listingId}`;
        client.join(room);
        client.emit('joined', { room });
    }
    async handleMessage(data, client) {
        const senderId = client.data.userId;
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
    async getMessages(data) {
        return this.chatService.getMessages(data.listingId, data.page ?? 1);
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('join_room'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleJoinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('send_message'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('get_messages'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "getMessages", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: (origin, callback) => {
                if (!origin || ALLOWED_ORIGINS().includes(origin)) {
                    callback(null, true);
                }
                else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
            credentials: true,
        },
        namespace: '/chat',
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        jwt_1.JwtService,
        config_1.ConfigService])
], ChatGateway);

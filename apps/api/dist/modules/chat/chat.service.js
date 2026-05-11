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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@conneqtcar/database");
const database_module_1 = require("../database/database.module");
let ChatService = class ChatService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async saveMessage(data) {
        return this.prisma.chatMessage.create({
            data: {
                listingId: data.listingId,
                senderId: data.senderId,
                content: data.content,
            },
            include: {
                sender: { select: { id: true, name: true, avatarUrl: true } },
            },
        });
    }
    async getMessages(listingId, page = 1, limit = 50) {
        const skip = (page - 1) * limit;
        return this.prisma.chatMessage.findMany({
            where: { listingId },
            include: { sender: { select: { id: true, name: true, avatarUrl: true } } },
            orderBy: { createdAt: 'desc' },
            skip,
            take: limit,
        });
    }
    async getConversationsForSeller(sellerId) {
        const listings = await this.prisma.listing.findMany({
            where: {
                sellerId,
                chatMessages: { some: {} },
            },
            select: {
                id: true,
                price: true,
                status: true,
                vehicle: { select: { brand: true, model: true, year: true } },
                chatMessages: {
                    orderBy: { createdAt: 'desc' },
                    take: 1,
                    select: {
                        content: true,
                        createdAt: true,
                        sender: { select: { id: true, name: true } },
                    },
                },
            },
            orderBy: { updatedAt: 'desc' },
        });
        return listings.map((l) => ({
            listingId: l.id,
            price: l.price,
            status: l.status,
            vehicle: l.vehicle,
            lastMessage: l.chatMessages[0] ?? null,
        }));
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_module_1.PRISMA_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.PrismaClient !== "undefined" && database_1.PrismaClient) === "function" ? _a : Object])
], ChatService);

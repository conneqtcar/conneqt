import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@conneqtcar/database';
import { PRISMA_SERVICE } from '../database/database.module';

interface SaveMessageData {
  listingId: string;
  senderId: string;
  content: string;
}

@Injectable()
export class ChatService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaClient) {}

  async saveMessage(data: SaveMessageData) {
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

  async getMessages(listingId: string, page = 1, limit = 50) {
    const skip = (page - 1) * limit;
    return this.prisma.chatMessage.findMany({
      where: { listingId },
      include: { sender: { select: { id: true, name: true, avatarUrl: true } } },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    });
  }

  /** Lista as conversas (anúncios com mensagens) do vendedor autenticado. */
  async getConversationsForSeller(sellerId: string) {
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
}


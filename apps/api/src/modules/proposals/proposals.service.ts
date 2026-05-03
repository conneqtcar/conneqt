import { Injectable, Inject, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaClient } from '@conneqtcar/database';
import { PRISMA_SERVICE } from '../database/database.module';
import { CreateProposalDto } from './dto/create-proposal.dto';

@Injectable()
export class ProposalsService {
  constructor(
    @Inject(PRISMA_SERVICE) private readonly prisma: PrismaClient,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async create(buyerId: string, dto: CreateProposalDto) {
    const listing = await this.prisma.listing.findUnique({
      where: { id: dto.listingId, status: 'ACTIVE' },
    });
    if (!listing) throw new NotFoundException('Anúncio não encontrado ou inativo.');
    if (listing.sellerId === buyerId) {
      throw new BadRequestException('Você não pode fazer uma proposta no próprio anúncio.');
    }

    const proposal = await this.prisma.proposal.create({
      data: {
        listingId: dto.listingId,
        buyerId,
        amount: dto.amount,
        message: dto.message,
        status: 'PENDING',
      },
      include: {
        listing: { select: { sellerId: true, price: true } },
        buyer: { select: { id: true, name: true } },
      },
    });

    this.eventEmitter.emit('proposal.created', { proposal });
    return proposal;
  }

  async respond(proposalId: string, sellerId: string, action: 'ACCEPTED' | 'REJECTED' | 'COUNTER', counterAmount?: number) {
    const proposal = await this.prisma.proposal.findUnique({
      where: { id: proposalId },
      include: { listing: true },
    });

    if (!proposal) throw new NotFoundException('Proposta não encontrada.');
    if (proposal.listing.sellerId !== sellerId) throw new ForbiddenException('Acesso negado.');
    if (proposal.status !== 'PENDING') throw new BadRequestException('Esta proposta já foi respondida.');

    const updated = await this.prisma.proposal.update({
      where: { id: proposalId },
      data: {
        status: action,
        counterAmount: action === 'COUNTER' ? counterAmount : undefined,
        respondedAt: new Date(),
      },
    });

    this.eventEmitter.emit('proposal.responded', { proposalId, action });
    return updated;
  }

  async findByListing(listingId: string, sellerId: string) {
    const listing = await this.prisma.listing.findUnique({ where: { id: listingId } });
    if (!listing) throw new NotFoundException('Anúncio não encontrado.');
    if (listing.sellerId !== sellerId) throw new ForbiddenException('Acesso negado.');

    return this.prisma.proposal.findMany({
      where: { listingId },
      include: { buyer: { select: { id: true, name: true, kycStatus: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByBuyer(buyerId: string) {
    return this.prisma.proposal.findMany({
      where: { buyerId },
      include: {
        listing: {
          include: {
            vehicle: { select: { brand: true, model: true, year: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}


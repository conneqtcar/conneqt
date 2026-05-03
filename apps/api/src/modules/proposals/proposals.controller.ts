import { Controller, Post, Get, Patch, Body, Param, Request, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProposalsService } from './proposals.service';
import { CreateProposalDto } from './dto/create-proposal.dto';
import { RespondProposalDto } from './dto/respond-proposal.dto';

@ApiTags('proposals')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('proposals')
export class ProposalsController {
  constructor(private readonly proposalsService: ProposalsService) {}

  @Post()
  @ApiOperation({ summary: 'Enviar proposta de compra' })
  create(@Request() req: { user: { sub: string } }, @Body() dto: CreateProposalDto) {
    return this.proposalsService.create(req.user.sub, dto);
  }

  @Get('mine')
  @ApiOperation({ summary: 'Propostas enviadas pelo comprador' })
  myProposals(@Request() req: { user: { sub: string } }) {
    return this.proposalsService.findByBuyer(req.user.sub);
  }

  @Get('listing/:listingId')
  @ApiOperation({ summary: 'Propostas recebidas para um anúncio (vendedor)' })
  byListing(@Param('listingId') listingId: string, @Request() req: { user: { sub: string } }) {
    return this.proposalsService.findByListing(listingId, req.user.sub);
  }

  @Patch(':id/respond')
  @ApiOperation({ summary: 'Aceitar, recusar ou fazer contra-proposta' })
  respond(
    @Param('id') id: string,
    @Request() req: { user: { sub: string } },
    @Body() dto: RespondProposalDto,
  ) {
    return this.proposalsService.respond(id, req.user.sub, dto.action, dto.counterAmount);
  }
}


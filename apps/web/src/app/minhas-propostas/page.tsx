'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { ArrowLeft, Loader2, ArrowRight, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import api from '@/lib/api';
import { ChatWindow } from '@/components/chat/chat-window';

const STATUS_MAP = {
  PENDING: { label: 'Aguardando', color: 'text-amber-600', bg: 'bg-amber-50' },
  ACCEPTED: { label: 'Aceita - Em negociação', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  REJECTED: { label: 'Recusada', color: 'text-red-600', bg: 'bg-red-50' },
  COUNTER: { label: 'Contraproposta recebida', color: 'text-brand-gold', bg: 'bg-amber-50' },
  EXPIRED: { label: 'Expirada', color: 'text-gray-500', bg: 'bg-gray-50' },
} as const;

export default function MinhasPropostasPage() {
  const [openChatListingId, setOpenChatListingId] = useState<string | null>(null);
  const [openChatMeta, setOpenChatMeta] = useState<{ title: string; seller: string } | null>(null);

  const { data: proposals, isLoading } = useQuery({
    queryKey: ['my_proposals'],
    queryFn: async () => {
      const { data } = await api.get('/proposals/mine');
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-safe">
      <header className="sticky top-0 z-30 flex h-16 items-center border-b border-gray-100 bg-white/95 px-4 backdrop-blur-md">
        <Link href="/" className="mr-3 p-2 text-gray-500 hover:text-gray-900">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-lg font-bold text-gray-900">Minhas Propostas</h1>
      </header>

      <main className="mx-auto max-w-2xl p-4">
        {isLoading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-brand-gold" />
          </div>
        ) : !proposals?.length ? (
          <div className="mt-8 text-center text-gray-500">
            <p>Você ainda não enviou nenhuma proposta.</p>
            <Link
              href="/buscar"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-gold px-4 py-2 font-semibold text-white shadow-sm hover:bg-brand-gold-dark"
            >
              Buscar Carros <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {proposals.map((proposal: any) => {
              const statusCfg = STATUS_MAP[proposal.status as keyof typeof STATUS_MAP] || STATUS_MAP.PENDING;
              
              return (
                <div key={proposal.id} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className={`rounded-lg px-2.5 py-1 text-xs font-bold ${statusCfg.bg} ${statusCfg.color}`}>
                      {statusCfg.label}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(proposal.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                  </div>

                  <div className="pt-3">
                    <Link href={`/veiculo/${proposal.listingId}`} className="block hover:bg-gray-50 -mx-4 px-4 py-2 rounded-lg transition">
                      <p className="font-semibold text-gray-900">
                        {proposal.listing?.vehicle?.brand} {proposal.listing?.vehicle?.model}
                      </p>
                      <p className="text-sm text-gray-500">Valor oferecido: R$ {proposal.amount.toLocaleString('pt-BR')}</p>
                    </Link>

                    {proposal.status === 'ACCEPTED' && (
                      <button
                        onClick={() => {
                          setOpenChatListingId(proposal.listingId);
                          setOpenChatMeta({
                            title: `${proposal.listing?.vehicle?.brand ?? ''} ${proposal.listing?.vehicle?.model ?? ''}`.trim(),
                            seller: proposal.listing?.seller?.name ?? 'Vendedor',
                          });
                        }}
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold py-2.5 text-sm font-semibold text-white hover:bg-brand-gold-dark transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Abrir Chat com o Vendedor
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {openChatListingId && openChatMeta && (
        <ChatWindow
          listingId={openChatListingId}
          listingTitle={openChatMeta.title}
          sellerName={openChatMeta.seller}
          onClose={() => {
            setOpenChatListingId(null);
            setOpenChatMeta(null);
          }}
        />
      )}
    </div>
  );
}

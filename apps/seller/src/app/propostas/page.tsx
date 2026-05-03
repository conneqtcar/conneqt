'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loader2, MessageSquare, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import api from '@/lib/api';
import { ChatWindow } from '@/components/chat/chat-window';

interface Conversation {
  listingId: string;
  price: number;
  status: string;
  vehicle: { brand: string; model: string; year: number };
  lastMessage: {
    content: string;
    createdAt: string;
    sender: { id: string; name: string };
  } | null;
}

export default function MensagensPage() {
  const [openChat, setOpenChat] = useState<Conversation | null>(null);

  const { data: conversations = [], isLoading } = useQuery<Conversation[]>({
    queryKey: ['seller-conversations'],
    queryFn: async () => {
      const { data } = await api.get('/chat/conversations');
      return data;
    },
    refetchInterval: 30_000,
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="border-b border-gray-100 bg-white px-6 py-6 md:px-8">
        <h1 className="text-2xl font-extrabold text-gray-900">Mensagens</h1>
        <p className="mt-1 text-sm text-gray-400">
          Converse em tempo real com os compradores interessados
        </p>
      </div>

      <div className="px-6 py-6 md:px-8">
        {isLoading ? (
          <div className="mt-16 flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-gray-300" />
          </div>
        ) : conversations.length === 0 ? (
          <div className="mt-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
              <MessageSquare className="h-8 w-8 text-gray-300" />
            </div>
            <p className="mt-4 font-semibold text-gray-500">Nenhuma mensagem ainda</p>
            <p className="mt-1 text-sm text-gray-400">
              Quando compradores enviarem mensagens nos seus anuncios, elas aparecerao aqui.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {conversations.map((conv) => (
              <button
                key={conv.listingId}
                onClick={() => setOpenChat(conv)}
                className="w-full rounded-2xl border border-gray-100 bg-white p-4 text-left shadow-sm transition hover:border-brand-gold/40 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                    <MessageSquare className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-gray-900 truncate">
                      {conv.vehicle.brand} {conv.vehicle.model} {conv.vehicle.year}
                    </p>
                    <p className="text-xs text-gray-400">
                      R$ {conv.price.toLocaleString('pt-BR')} · {conv.status === 'ACTIVE' ? 'Ativo' : conv.status}
                    </p>
                    {conv.lastMessage ? (
                      <p className="mt-1.5 truncate text-sm text-gray-500">
                        <span className="font-medium text-gray-700">{conv.lastMessage.sender.name}:</span>{' '}
                        {conv.lastMessage.content}
                      </p>
                    ) : (
                      <p className="mt-1.5 text-sm italic text-gray-400">Sem mensagens ainda</p>
                    )}
                  </div>
                  {conv.lastMessage && (
                    <span className="shrink-0 flex items-center gap-1 text-[11px] text-gray-400">
                      <Clock className="h-3 w-3" />
                      {formatDistanceToNow(new Date(conv.lastMessage.createdAt), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {openChat && (
        <ChatWindow
          listingId={openChat.listingId}
          listingTitle={`${openChat.vehicle.brand} ${openChat.vehicle.model} ${openChat.vehicle.year}`}
          onClose={() => setOpenChat(null)}
        />
      )}
    </div>
  );
}

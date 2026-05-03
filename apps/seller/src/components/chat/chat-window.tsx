'use client';

import { useEffect, useRef, useState, KeyboardEvent } from 'react';
import { X, Send, Wifi, WifiOff, MessageCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useChat } from '@/hooks/useChat';

interface ChatWindowProps {
  listingId: string;
  listingTitle: string;
  buyerName?: string;
  onClose: () => void;
}

export function ChatWindow({ listingId, listingTitle, buyerName, onClose }: ChatWindowProps) {
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, connected, loading, sendMessage, currentUserId } = useChat({
    listingId,
    enabled: true,
  });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = () => {
    if (!input.trim() || !connected) return;
    sendMessage(input);
    setInput('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:items-center sm:justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Janela do chat */}
      <div className="relative z-10 flex w-full max-w-md flex-col rounded-2xl bg-white shadow-2xl sm:h-[600px] h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-2xl bg-brand-gold px-4 py-3 text-white">
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 font-bold text-sm">
              {(buyerName ?? 'C')[0]?.toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="font-semibold truncate">{buyerName ?? 'Comprador'}</p>
              <p className="text-xs text-white/70 truncate">{listingTitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {connected ? (
              <span className="flex items-center gap-1 text-xs text-green-300">
                <Wifi className="h-3 w-3" />
                Online
              </span>
            ) : (
              <span className="flex items-center gap-1 text-xs text-red-300">
                <WifiOff className="h-3 w-3" />
                Reconectando...
              </span>
            )}
            <button
              onClick={onClose}
              className="rounded-lg p-1 transition hover:bg-white/20"
              aria-label="Fechar chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mensagens */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {loading ? (
            <div className="flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-gray-400">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-gold border-t-transparent" />
                <span className="text-sm">Carregando mensagens...</span>
              </div>
            </div>
          ) : messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-400">
              <MessageCircle className="h-10 w-10 text-gray-200" />
              <p className="text-sm text-center">
                Nenhuma mensagem ainda.
              </p>
            </div>
          ) : (
            messages.map((msg) => {
              const isOwn = msg.senderId === currentUserId;
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}
                >
                  {!isOwn && (
                    <span className="mb-1 flex items-center gap-1 text-xs text-gray-500">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-brand-gold font-bold text-[10px]">
                        {msg.sender.name[0]?.toUpperCase()}
                      </div>
                      {msg.sender.name}
                    </span>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      isOwn
                        ? 'rounded-br-sm bg-brand-gold text-white'
                        : 'rounded-bl-sm bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.content}
                  </div>
                  <span className="mt-1 text-[11px] text-gray-400">
                    {formatDistanceToNow(new Date(msg.createdAt), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </div>
              );
            })
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-100 p-3">
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua resposta..."
              rows={1}
              disabled={!connected}
              className="flex-1 resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold disabled:cursor-not-allowed disabled:opacity-50"
              style={{ maxHeight: '120px', overflowY: 'auto' }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || !connected}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-gold text-white transition hover:bg-brand-gold-dark disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Enviar mensagem"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-1 text-center text-[11px] text-gray-400">Enter para enviar · Shift+Enter para nova linha</p>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

export interface ChatMessage {
  id: string;
  listingId: string;
  senderId: string;
  content: string;
  createdAt: string;
  sender: {
    id: string;
    name: string;
    avatarUrl: string | null;
  };
}

interface UseChatOptions {
  listingId: string;
  enabled?: boolean;
}

const SOCKET_URL =
  (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1').replace('/api/v1', '');

export function useChat({ listingId, enabled = false }: UseChatOptions) {
  const socketRef = useRef<Socket | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUserId = () =>
    typeof window !== 'undefined' ? (localStorage.getItem('user_id') ?? '') : '';

  const getToken = () =>
    typeof window !== 'undefined' ? (localStorage.getItem('access_token') ?? '') : '';

  useEffect(() => {
    if (!enabled || !listingId) return;

    setLoading(true);

    const socket = io(`${SOCKET_URL}/chat`, {
      auth: { token: getToken() },
      transports: ['websocket', 'polling'],
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setConnected(true);
      socket.emit('join_room', { listingId });
      socket.emit('get_messages', { listingId, page: 1 }, (history: ChatMessage[]) => {
        setMessages((history ?? []).reverse());
        setLoading(false);
      });
    });

    socket.on('disconnect', () => {
      setConnected(false);
    });

    socket.on('new_message', (message: ChatMessage) => {
      setMessages((prev) => [...prev, message]);
    });

    socket.on('connect_error', () => {
      setLoading(false);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
      setConnected(false);
      setMessages([]);
    };
  }, [enabled, listingId]);

  const sendMessage = useCallback(
    (content: string) => {
      if (!socketRef.current || !content.trim()) return;
      const senderId = getUserId();
      socketRef.current.emit('send_message', { listingId, content: content.trim(), senderId });
    },
    [listingId],
  );

  return { messages, connected, loading, sendMessage, currentUserId: getUserId() };
}

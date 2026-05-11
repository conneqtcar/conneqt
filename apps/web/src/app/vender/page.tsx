'use client';

import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const SELLER_URL = process.env.NEXT_PUBLIC_SELLER_URL ?? 'http://localhost:5001';

export default function VenderPage() {
  useEffect(() => {
    window.location.href = SELLER_URL;
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50">
      <img src="/icons/mascote.svg" alt="Conneqt" className="h-32 w-auto opacity-90" />
      <Loader2 className="h-6 w-6 animate-spin text-brand-gold" />
      <p className="text-sm font-medium text-gray-500">Abrindo área do vendedor…</p>
    </div>
  );
}

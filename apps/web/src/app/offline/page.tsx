'use client';

import { WifiOff } from 'lucide-react';
import Link from 'next/link';

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100">
        <WifiOff className="h-12 w-12 text-brand-gold" />
      </div>

      <h1 className="mt-6 text-2xl font-bold text-gray-900">Sem conexão com a internet</h1>
      <p className="mt-2 max-w-xs text-gray-500">
        Não conseguimos carregar essa página. Verifique sua conexão e tente novamente.
      </p>

      <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
        <button
          onClick={() => window.location.reload()}
          className="rounded-xl bg-brand-gold px-6 py-3 font-semibold text-white hover:bg-brand-gold-dark active:scale-95 transition-transform"
        >
          Tentar novamente
        </button>

        <Link
          href="/"
          className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 active:scale-95 transition-transform"
        >
          Ir para o início
        </Link>
      </div>

      <p className="mt-10 text-xs text-gray-400">
        Algumas páginas que você visitou antes podem estar disponíveis offline.
      </p>
    </div>
  );
}

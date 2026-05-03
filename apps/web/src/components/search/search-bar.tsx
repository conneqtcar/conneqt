'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('brand', query.trim());
    router.push(`/buscar?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busque por marca, modelo ou cidade..."
          className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-base outline-none focus:border-brand-gold focus:ring-2 focus:ring-blue-100"
        />
      </div>
      <button
        type="submit"
        className="rounded-xl bg-brand-gold px-6 py-3 font-semibold text-white transition hover:bg-brand-gold-dark"
      >
        Buscar
      </button>
    </form>
  );
}

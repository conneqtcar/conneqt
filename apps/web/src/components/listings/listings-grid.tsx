'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { ListingCard } from './listing-card';

interface ListingsGridProps {
  featured?: boolean;
  filters?: Record<string, string | undefined>;
}

export function ListingsGrid({ featured = false, filters = {} }: ListingsGridProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['listings', { featured, ...filters }],
    queryFn: async () => {
      const params = new URLSearchParams(
        Object.entries(filters).filter(([, v]) => v !== undefined) as [string, string][],
      );
      if (featured) params.set('limit', '6');
      const { data } = await api.get(`/listings?${params.toString()}`);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-56 animate-pulse rounded-xl bg-gray-100" />
        ))}
        ))}
      </div>
    );
  }

  if (isError || !data?.data?.length) {
    return (
      <div className="rounded-xl bg-gray-50 py-16 text-center text-gray-500">
        Nenhum veículo encontrado com os filtros selecionados.
      </div>
    );
  }

  return (
    <>
      {!featured && (
        <p className="mb-4 text-sm text-gray-500">
          {data.total} veículos encontrados
        </p>
      )}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {data.data.map((listing: Record<string, unknown>, i: number) => (
          <div
            key={listing.id as string}
            className="animate-fade-in-up"
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'both' }}
          >
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>
    </>
  );
}

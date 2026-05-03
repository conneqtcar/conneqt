import { Suspense } from 'react';
import { ListingsGrid } from '@/components/listings/listings-grid';
import { SearchFilters } from '@/components/search/search-filters';

interface SearchPageProps {
  searchParams: Promise<{
    brand?: string;
    model?: string;
    yearMin?: string;
    yearMax?: string;
    priceMin?: string;
    priceMax?: string;
    mileageMax?: string;
    page?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Buscar Veículos</h1>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Filtros laterais */}
        <aside className="lg:w-72">
          <SearchFilters initialValues={params} />
        </aside>

        {/* Grid de resultados */}
        <div className="flex-1">
          <Suspense fallback={<div className="text-center">Carregando veículos...</div>}>
            <ListingsGrid filters={params} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

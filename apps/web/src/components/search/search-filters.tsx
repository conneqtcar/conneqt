'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface FilterValues {
  brand?: string;
  model?: string;
  yearMin?: string;
  yearMax?: string;
  priceMin?: string;
  priceMax?: string;
  mileageMax?: string;
  fuelType?: string;
  transmission?: string;
}

interface SearchFiltersProps {
  initialValues?: FilterValues;
}

export function SearchFilters({ initialValues }: SearchFiltersProps) {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<FilterValues>({
    defaultValues: initialValues,
  });

  function onSubmit(values: FilterValues) {
    const params = new URLSearchParams();
    Object.entries(values).forEach(([k, v]) => {
      if (v) params.set(k, v);
    });
    router.push(`/buscar?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl border border-gray-200 bg-white p-5">
      <h3 className="mb-4 font-semibold text-gray-900">Filtros</h3>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Marca</label>
          <input
            {...register('brand')}
            placeholder="Ex: Toyota"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-gold"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Modelo</label>
          <input
            {...register('model')}
            placeholder="Ex: Corolla"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-gold"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Ano</label>
          <div className="flex gap-2">
            <input
              {...register('yearMin')}
              placeholder="De"
              type="number"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-gold"
            />
            <input
              {...register('yearMax')}
              placeholder="Até"
              type="number"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-gold"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Preço (R$)</label>
          <div className="flex gap-2">
            <input
              {...register('priceMin')}
              placeholder="Mín"
              type="number"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-gold"
            />
            <input
              {...register('priceMax')}
              placeholder="Máx"
              type="number"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-gold"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">KM máximo</label>
          <input
            {...register('mileageMax')}
            placeholder="Ex: 80000"
            type="number"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-gold"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Combustível</label>
          <select
            {...register('fuelType')}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-gold"
          >
            <option value="">Todos</option>
            <option value="FLEX">Flex</option>
            <option value="GASOLINE">Gasolina</option>
            <option value="DIESEL">Diesel</option>
            <option value="ELECTRIC">Elétrico</option>
            <option value="HYBRID">Híbrido</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Câmbio</label>
          <select
            {...register('transmission')}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-gold"
          >
            <option value="">Todos</option>
            <option value="AUTOMATIC">Automático</option>
            <option value="MANUAL">Manual</option>
            <option value="CVT">CVT</option>
            <option value="SEMI_AUTO">Automatizado</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex gap-2">
        <button
          type="submit"
          className="flex-1 rounded-lg bg-brand-gold py-2 text-sm font-medium text-white transition hover:bg-brand-gold-dark"
        >
          Aplicar
        </button>
        <button
          type="button"
          onClick={() => { reset(); router.push('/buscar'); }}
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
        >
          Limpar
        </button>
      </div>
    </form>
  );
}

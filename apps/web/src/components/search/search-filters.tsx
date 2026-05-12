'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { ChevronDown, X } from 'lucide-react';

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

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: CURRENT_YEAR - 1989 }, (_, i) => CURRENT_YEAR - i);

function YearSelect({
  value,
  onChange,
  placeholder,
  disableAfter,
  disableBefore,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  disableAfter?: number;
  disableBefore?: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const filtered = YEARS.filter((y) => {
    if (disableAfter && y > disableAfter) return false;
    if (disableBefore && y < disableBefore) return false;
    return true;
  });

  const selected = value ? Number(value) : null;

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-sm outline-none transition
          ${open ? 'border-brand-gold ring-1 ring-brand-gold/30' : 'border-gray-200 hover:border-gray-300'}
          ${selected ? 'text-gray-900' : 'text-gray-400'} bg-white`}
      >
        <span>{selected ?? placeholder}</span>
        <span className="ml-1 flex items-center gap-0.5">
          {selected && (
            <span
              role="button"
              onClick={(e) => { e.stopPropagation(); onChange(''); }}
              className="rounded p-0.5 text-gray-400 hover:text-gray-600"
            >
              <X className="h-3 w-3" />
            </span>
          )}
          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
        </span>
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="max-h-52 overflow-y-auto py-1 scrollbar-thin">
            {filtered.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => { onChange(String(year)); setOpen(false); }}
                className={`w-full px-3 py-1.5 text-left text-sm transition
                  ${selected === year
                    ? 'bg-brand-gold/10 font-semibold text-brand-gold'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SearchFilters({ initialValues }: SearchFiltersProps) {
  const router = useRouter();
  const { register, handleSubmit, reset, setValue, watch } = useForm<FilterValues>({
    defaultValues: initialValues,
  });

  const yearMin = watch('yearMin') ?? '';
  const yearMax = watch('yearMax') ?? '';

  function onSubmit(values: FilterValues) {
    const params = new URLSearchParams();
    Object.entries(values).forEach(([k, v]) => {
      if (v) params.set(k, v);
    });
    router.push(`/buscar?${params.toString()}`);
  }

  function handleReset() {
    reset({ brand: '', model: '', yearMin: '', yearMax: '', priceMin: '', priceMax: '', mileageMax: '', fuelType: '', transmission: '' });
    router.push('/buscar');
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
            <YearSelect
              value={yearMin}
              onChange={(v) => setValue('yearMin', v)}
              placeholder="De"
              disableAfter={yearMax ? Number(yearMax) : undefined}
            />
            <YearSelect
              value={yearMax}
              onChange={(v) => setValue('yearMax', v)}
              placeholder="Até"
              disableBefore={yearMin ? Number(yearMin) : undefined}
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
            placeholder="Ex: 80.000"
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
          onClick={handleReset}
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
        >
          Limpar
        </button>
      </div>
    </form>
  );
}

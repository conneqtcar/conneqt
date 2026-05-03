'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Search } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '@/lib/api';

const schema = z.object({
  plate: z.string().min(7, 'Placa inválida').max(8),
  brand: z.string().min(1, 'Obrigatório'),
  model: z.string().min(1, 'Obrigatório'),
  year: z.coerce.number().min(1950).max(new Date().getFullYear() + 1),
  color: z.string().min(1, 'Obrigatório'),
  mileage: z.coerce.number().min(0),
  fuelType: z.enum(['GASOLINE', 'ETHANOL', 'FLEX', 'DIESEL', 'ELECTRIC', 'HYBRID']),
  transmission: z.enum(['MANUAL', 'AUTOMATIC', 'CVT']),
});

type FormData = z.infer<typeof schema>;

const fuelLabels = {
  GASOLINE: 'Gasolina',
  ETHANOL: 'Etanol',
  FLEX: 'Flex',
  DIESEL: 'Diesel',
  ELECTRIC: 'Elétrico',
  HYBRID: 'Híbrido',
};

const transmissionLabels = {
  MANUAL: 'Manual',
  AUTOMATIC: 'Automático',
  CVT: 'CVT',
};

export default function CadastrarVeiculoPage() {
  const router = useRouter();
  const [loadingFipe, setLoadingFipe] = useState(false);
  const [fipePrice, setFipePrice] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { fuelType: 'FLEX', transmission: 'MANUAL', year: new Date().getFullYear() },
  });

  const plate = watch('plate');

  const queryFipe = async () => {
    if (!plate || plate.length < 7) {
      toast.error('Informe uma placa válida');
      return;
    }
    setLoadingFipe(true);
    try {
      const { data } = await api.get(`/fipe/plate/${plate}`);
      setValue('brand', data.brand ?? '');
      setValue('model', data.model ?? '');
      setValue('year', data.modelYear ?? new Date().getFullYear());
      if (data.fuelType) setValue('fuelType', data.fuelType);
      if (data.fipePrice) setFipePrice(
        new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.fipePrice)
      );
      toast.success('Dados FIPE consultados!');
    } catch {
      toast.error('Não foi possível consultar a FIPE. Preencha manualmente.');
    } finally {
      setLoadingFipe(false);
    }
  };

  const onSubmit = async (values: FormData) => {
    try {
      const { data } = await api.post('/vehicles', values);
      toast.success('Veículo cadastrado!');
      router.push(`/inspecao/${data.id}`);
    } catch {
      toast.error('Erro ao cadastrar veículo. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900">Cadastrar veículo</h1>
        <p className="mt-1 text-gray-500">Informe os dados do seu veículo para iniciar a inspeção</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* Placa + FIPE */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-gray-900">Identificação</h2>

            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Placa</label>
                <input
                  {...register('plate')}
                  placeholder="ABC1D23"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 uppercase focus:border-brand-gold focus:outline-none"
                />
                {errors.plate && <p className="mt-1 text-xs text-red-600">{errors.plate.message}</p>}
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={queryFipe}
                  disabled={loadingFipe}
                  className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 disabled:opacity-50"
                >
                  {loadingFipe ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                  Consultar FIPE
                </button>
              </div>
            </div>

            {fipePrice && (
              <p className="mt-2 rounded-lg bg-amber-50 px-4 py-2 text-sm text-brand-gold">
                Valor de referência FIPE: <strong>{fipePrice}</strong>
              </p>
            )}
          </div>

          {/* Dados do veículo */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-gray-900">Dados do veículo</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Marca</label>
                <input {...register('brand')} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none" />
                {errors.brand && <p className="mt-1 text-xs text-red-600">{errors.brand.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Modelo</label>
                <input {...register('model')} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none" />
                {errors.model && <p className="mt-1 text-xs text-red-600">{errors.model.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Ano</label>
                <input {...register('year')} type="number" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none" />
                {errors.year && <p className="mt-1 text-xs text-red-600">{errors.year.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Cor</label>
                <input {...register('color')} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none" />
                {errors.color && <p className="mt-1 text-xs text-red-600">{errors.color.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Quilometragem</label>
                <input {...register('mileage')} type="number" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none" />
                {errors.mileage && <p className="mt-1 text-xs text-red-600">{errors.mileage.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Combustível</label>
                <select {...register('fuelType')} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none">
                  {Object.entries(fuelLabels).map(([v, l]) => (
                    <option key={v} value={v}>{l}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Câmbio</label>
                <select {...register('transmission')} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none">
                  {Object.entries(transmissionLabels).map(([v, l]) => (
                    <option key={v} value={v}>{l}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold py-3.5 font-semibold text-white hover:bg-brand-gold-dark disabled:opacity-70"
          >
            {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
            Cadastrar e iniciar inspeção
          </button>
        </form>
      </div>
    </div>
  );
}

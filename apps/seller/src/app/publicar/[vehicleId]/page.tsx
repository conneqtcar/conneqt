'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '@/lib/api';

const schema = z.object({
  title: z.string().min(10, 'Título deve ter ao menos 10 caracteres'),
  description: z.string().optional(),
  price: z.coerce.number().min(1000, 'Informe um valor válido'),
  city: z.string().min(2, 'Informe a cidade'),
  state: z.string().length(2, 'Use a sigla do estado (ex: SP)'),
  acceptsExchange: z.boolean(),
  acceptsFinancing: z.boolean(),
});

type FormData = z.infer<typeof schema>;

export default function PublicarPage() {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const router = useRouter();

  const { data: vehicle, isLoading } = useQuery({
    queryKey: ['vehicle', vehicleId],
    queryFn: async () => {
      const { data } = await api.get(`/vehicles/${vehicleId}`);
      return data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { acceptsExchange: false, acceptsFinancing: true },
  });

  const priceField = register('price');

  const onSubmit = async (values: FormData) => {
    try {
      await api.post('/listings', {
        ...values,
        vehicleId,
        inspectionId: vehicle?.inspection?.id,
      });
      toast.success('Anúncio publicado com sucesso!');
      router.push('/meus-veiculos');
    } catch {
      toast.error('Erro ao publicar anúncio. Verifique se a inspeção foi aprovada.');
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900">Publicar anúncio</h1>
        {vehicle && (
          <p className="mt-1 text-gray-500">
            {vehicle.brand} {vehicle.model} {vehicle.year} — {vehicle.plate}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="rounded-xl bg-white p-6 shadow-sm space-y-4">
            <h2 className="font-semibold text-gray-900">Informações do anúncio</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700">Título do anúncio</label>
              <input
                {...register('title')}
                placeholder={vehicle ? `${vehicle.brand} ${vehicle.model} ${vehicle.year} — ${vehicle.mileage?.toLocaleString('pt-BR')} km` : ''}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none"
              />
              {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Descrição <span className="text-gray-400">(opcional)</span></label>
              <textarea
                {...register('description')}
                rows={4}
                placeholder="Descreva o estado do veículo, histórico de manutenção, acessórios..."
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preço de venda (R$)</label>
              <input
                {...priceField}
                type="text"
                inputMode="numeric"
                onChange={(e) => {
                  // Aceita apenas dígitos: evita que "." (separador de milhar em pt-BR)
                  // seja confundido com ponto decimal e gere um preço 1000x menor.
                  e.target.value = e.target.value.replace(/\D/g, '');
                  priceField.onChange(e);
                }}
                placeholder={vehicle?.fipePrice ? String(vehicle.fipePrice) : '85000'}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none"
              />
              {errors.price && <p className="mt-1 text-xs text-red-600">{errors.price.message}</p>}
              {vehicle?.fipePrice && (
                <p className="mt-1 text-xs text-gray-500">
                  Referência FIPE: R$ {vehicle.fipePrice.toLocaleString('pt-BR')}
                </p>
              )}
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm space-y-4">
            <h2 className="font-semibold text-gray-900">Localização</h2>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Cidade</label>
                <input {...register('city')} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-gold focus:outline-none" />
                {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Estado</label>
                <input {...register('state')} maxLength={2} placeholder="SP" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 uppercase focus:border-brand-gold focus:outline-none" />
                {errors.state && <p className="mt-1 text-xs text-red-600">{errors.state.message}</p>}
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm space-y-3">
            <h2 className="font-semibold text-gray-900">Condições</h2>

            <label className="flex items-center gap-3 cursor-pointer">
              <input {...register('acceptsFinancing')} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-gold" />
              <span className="text-sm text-gray-700">Aceita financiamento</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input {...register('acceptsExchange')} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-gold" />
              <span className="text-sm text-gray-700">Aceita troca</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold py-3.5 font-semibold text-white hover:bg-brand-gold-dark disabled:opacity-70"
          >
            {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
            Publicar anúncio
          </button>
        </form>
      </div>
    </div>
  );
}

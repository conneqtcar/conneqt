'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '@/lib/api';

interface Listing {
  id: string;
  status: string;
  price: number;
  createdAt: string;
  vehicle: { brand: string; model: string; year: number; plate: string };
  seller: { name: string; email: string };
}

const statusLabels: Record<string, { label: string; cls: string }> = {
  ACTIVE: { label: 'Ativo', cls: 'bg-green-100 text-green-700' },
  SOLD: { label: 'Vendido', cls: 'bg-amber-100 text-brand-gold' },
  EXPIRED: { label: 'Expirado', cls: 'bg-gray-100 text-gray-600' },
  INACTIVE: { label: 'Inativo', cls: 'bg-red-100 text-red-700' },
};

export default function AnunciosPage() {
  const qc = useQueryClient();

  const { data = [], isLoading } = useQuery<Listing[]>({
    queryKey: ['admin-listings'],
    queryFn: async () => {
      const { data } = await api.get('/listings?limit=50');
      return data.data ?? data;
    },
  });

  const deactivate = useMutation({
    mutationFn: (id: string) => api.delete(`/listings/${id}`),
    onSuccess: () => {
      toast.success('Anúncio desativado.');
      qc.invalidateQueries({ queryKey: ['admin-listings'] });
    },
    onError: () => toast.error('Erro ao desativar anúncio.'),
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Anúncios</h1>
      <p className="mt-1 text-gray-500">Todos os anúncios publicados na plataforma</p>

      <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Veículo', 'Vendedor', 'Preço', 'Status', 'Data', ''].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.map((item) => {
                const s = statusLabels[item.status] ?? { label: item.status, cls: 'bg-gray-100 text-gray-700' };
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">
                        {item.vehicle.brand} {item.vehicle.model} {item.vehicle.year}
                      </div>
                      <div className="text-sm text-gray-500">{item.vehicle.plate}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div>{item.seller.name}</div>
                      <div className="text-xs text-gray-400">{item.seller.email}</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${s.cls}`}>{s.label}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {item.status === 'ACTIVE' && (
                        <button
                          onClick={() => deactivate.mutate(item.id)}
                          disabled={deactivate.isPending}
                          className="text-sm font-medium text-red-600 hover:underline disabled:opacity-50"
                        >
                          Desativar
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

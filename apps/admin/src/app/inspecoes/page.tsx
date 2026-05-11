'use client';

import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import api from '@/lib/api';

interface Inspection {
  id: string;
  status: string;
  aiScore: number | null;
  createdAt: string;
  vehicle: {
    plate: string;
    brand: string;
    model: string;
    year: number;
    owner: { name: string };
  };
  _count: { media: number };
}

const statusLabels: Record<string, { label: string; cls: string }> = {
  PENDING: { label: 'Pendente', cls: 'bg-gray-100 text-gray-700' },
  IN_PROGRESS: { label: 'Em andamento', cls: 'bg-amber-100 text-brand-gold' },
  AWAITING_REVIEW: { label: 'Aguardando revisão', cls: 'bg-orange-100 text-orange-700' },
  APPROVED: { label: 'Aprovada', cls: 'bg-green-100 text-green-700' },
  REJECTED: { label: 'Rejeitada', cls: 'bg-red-100 text-red-700' },
  CANCELLED: { label: 'Cancelada', cls: 'bg-gray-100 text-gray-500' },
};

export default function InspecoesPage() {
  const { data = [], isLoading } = useQuery<Inspection[]>({
    queryKey: ['admin-inspections-all'],
    queryFn: async () => {
      const { data } = await api.get('/inspections/queue');
      return data;
    },
    refetchInterval: 20000,
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Inspeções</h1>
      <p className="mt-1 text-gray-500">Fila de revisão manual de inspeções</p>

      <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
          </div>
        ) : data.length === 0 ? (
          <p className="py-12 text-center text-gray-400">Nenhuma inspeção aguardando revisão</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Veículo', 'Vendedor', 'Status', 'Score IA', 'Mídias', 'Data', ''].map((h) => (
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
                    <td className="px-6 py-4 text-sm text-gray-700">{item.vehicle.owner.name}</td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${s.cls}`}>{s.label}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {item.aiScore !== null ? `${item.aiScore}%` : '—'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item._count.media}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a href={`/inspecoes/${item.id}`} className="text-sm font-medium text-brand-gold hover:underline">
                        Ver
                      </a>
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

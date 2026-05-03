'use client';

import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import api from '@/lib/api';

interface Dealer {
  id: string;
  companyName: string;
  cnpj: string;
  plan: string;
  status: string;
  createdAt: string;
  user: { name: string; email: string };
  _count: { listings: number };
}

const planBadge: Record<string, string> = {
  BASIC: 'bg-gray-100 text-gray-700',
  PREMIUM: 'bg-amber-100 text-brand-gold',
  ENTERPRISE: 'bg-purple-100 text-purple-700',
};

export default function LojistasPage() {
  const { data = [], isLoading } = useQuery<Dealer[]>({
    queryKey: ['admin-dealers'],
    queryFn: async () => {
      const { data } = await api.get('/dealers?limit=100');
      return data.data ?? data;
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Lojistas</h1>
      <p className="mt-1 text-gray-500">Concessionárias e lojistas cadastrados</p>

      <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Empresa', 'CNPJ', 'Responsável', 'Plano', 'Anúncios', 'Status', 'Cadastro'].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.map((dealer) => (
                <tr key={dealer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{dealer.companyName}</td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-500">{dealer.cnpj}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{dealer.user.name}</div>
                    <div className="text-xs text-gray-400">{dealer.user.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${planBadge[dealer.plan] ?? ''}`}>
                      {dealer.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{dealer._count.listings}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        dealer.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {dealer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(dealer.createdAt).toLocaleDateString('pt-BR')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { CheckCircle, XCircle, Eye, Loader2, ClipboardCheck, ArrowRight, AlertTriangle, Image } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import api from '@/lib/api';

interface Inspection {
  id: string;
  type: string;
  aiScore: number | null;
  aiFlags: string[];
  createdAt: string;
  vehicle: {
    id: string;
    plate: string;
    brand: string;
    model: string;
    year: number;
    owner: { name: string; email: string };
  };
  _count: { media: number };
}

function ScoreBadge({ score }: { score: number | null }) {
  if (score === null) {
    return <span className="inline-flex items-center rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-400">Pendente</span>;
  }
  if (score >= 90) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {score}%
      </span>
    );
  }
  if (score >= 70) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 ring-1 ring-amber-200">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        {score}%
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg bg-red-50 px-2.5 py-1 text-xs font-bold text-red-700 ring-1 ring-red-200">
      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
      {score}%
    </span>
  );
}

function TypeBadge({ type }: { type: string }) {
  const isRemote = type === 'REMOTE';
  return (
    <span className={`inline-flex rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${isRemote ? 'bg-amber-50 text-brand-gold' : 'bg-violet-50 text-violet-600'}`}>
      {isRemote ? 'Remota' : 'Presencial'}
    </span>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').slice(0, 2).map((n) => n[0]).join('').toUpperCase();
  return (
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-xs font-bold text-white shadow-sm">
      {initials}
    </div>
  );
}

export function InspectionQueue() {
  const qc = useQueryClient();
  const [reviewingId, setReviewingId] = useState<string | null>(null);

  const { data: inspections = [], isLoading } = useQuery<Inspection[]>({
    queryKey: ['inspection-queue'],
    queryFn: async () => {
      const { data } = await api.get('/inspections/queue');
      return data;
    },
    refetchInterval: 15000,
  });

  const reviewMutation = useMutation({
    mutationFn: async ({ id, decision, notes }: { id: string; decision: 'APPROVED' | 'REJECTED'; notes?: string }) => {
      await api.patch(`/inspections/${id}/review`, { decision, notes });
    },
    onSuccess: (_, { decision }) => {
      toast.success(decision === 'APPROVED' ? 'Inspecao aprovada!' : 'Inspecao rejeitada.');
      qc.invalidateQueries({ queryKey: ['inspection-queue'] });
      qc.invalidateQueries({ queryKey: ['admin-dashboard'] });
      setReviewingId(null);
    },
    onError: () => toast.error('Erro ao processar revisao.'),
  });

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-amber-50 p-2">
            <ClipboardCheck className="h-4 w-4 text-amber-600" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Fila de Inspecoes</h2>
            <p className="text-xs text-gray-400">Aguardando revisao manual</p>
          </div>
          {inspections.length > 0 && (
            <span className="ml-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700">
              {inspections.length}
            </span>
          )}
        </div>
        <Link href="/inspecoes" className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-brand-gold transition hover:bg-amber-50">
          Ver todas <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-gray-300" />
        </div>
      )}

      {!isLoading && inspections.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-3 py-14">
          <div className="rounded-full bg-emerald-50 p-4">
            <CheckCircle className="h-7 w-7 text-emerald-500" />
          </div>
          <p className="text-sm font-medium text-gray-500">Tudo em dia! Nenhuma inspecao pendente.</p>
        </div>
      )}

      {!isLoading && inspections.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/60">
                <th className="px-6 py-3 text-left text-[10px] font-semibold uppercase tracking-widest text-gray-400">Veiculo</th>
                <th className="px-6 py-3 text-left text-[10px] font-semibold uppercase tracking-widest text-gray-400">Vendedor</th>
                <th className="px-6 py-3 text-left text-[10px] font-semibold uppercase tracking-widest text-gray-400">Score IA</th>
                <th className="px-6 py-3 text-left text-[10px] font-semibold uppercase tracking-widest text-gray-400">Midias</th>
                <th className="px-6 py-3 text-left text-[10px] font-semibold uppercase tracking-widest text-gray-400">Data</th>
                <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-widest text-gray-400">Acoes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {inspections.map((item) => {
                const isPending = reviewMutation.isPending && reviewingId === item.id;
                return (
                  <tr key={item.id} className="group transition hover:bg-amber-50/30">
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="font-semibold text-gray-900">{item.vehicle.brand} {item.vehicle.model}</div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] text-gray-500">{item.vehicle.plate}</span>
                        <span className="text-[10px] text-gray-400">{item.vehicle.year}</span>
                        <TypeBadge type={item.type} />
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <Avatar name={item.vehicle.owner.name} />
                        <div>
                          <div className="text-sm font-medium text-gray-800">{item.vehicle.owner.name}</div>
                          <div className="text-xs text-gray-400">{item.vehicle.owner.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <ScoreBadge score={item.aiScore} />
                        {item.aiFlags && item.aiFlags.length > 0 && (
                          <div className="flex items-center gap-1">
                            <AlertTriangle className="h-3 w-3 text-red-400" />
                            <span className="text-[10px] text-red-400">{item.aiFlags.length} flag(s)</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Image className="h-3.5 w-3.5 text-gray-400" />
                        <span className="font-medium">{item._count.media}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link href={`/inspecoes/${item.id}`} className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 transition hover:border-blue-200 hover:bg-amber-50 hover:text-brand-gold">
                          <Eye className="h-3.5 w-3.5" />
                        </Link>
                        <button
                          onClick={() => { setReviewingId(item.id); reviewMutation.mutate({ id: item.id, decision: 'APPROVED' }); }}
                          disabled={isPending}
                          className="rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-xs font-medium text-emerald-700 transition hover:bg-emerald-100 disabled:opacity-40"
                        >
                          {isPending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <CheckCircle className="h-3.5 w-3.5" />}
                        </button>
                        <button
                          onClick={() => { setReviewingId(item.id); reviewMutation.mutate({ id: item.id, decision: 'REJECTED', notes: 'Irregularidades detectadas.' }); }}
                          disabled={isPending}
                          className="rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-100 disabled:opacity-40"
                        >
                          <XCircle className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

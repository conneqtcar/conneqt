'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Plus, Car, CheckCircle, Loader2, ArrowRight, Shield, Eye, MessageSquare, Calendar, Gauge } from 'lucide-react';
import api from '@/lib/api';

const TABS = [
  { label: 'Todos',       value: 'ALL' },
  { label: 'Rascunho',    value: 'DRAFT' },
  { label: 'Em inspeção', value: 'INSPECTION_PENDING' },
  { label: 'Anunciados',  value: 'LISTED' },
  { label: 'Vendidos',    value: 'SOLD' },
] as const;

const STATUS_CFG: Record<string, { label: string; color: string; bg: string; border: string; step: number }> = {
  DRAFT:                  { label: 'Rascunho',            color: 'text-gray-500',    bg: 'bg-gray-100',    border: 'border-gray-200',    step: 1 },
  INSPECTION_PENDING:     { label: 'Aguardando inspeção', color: 'text-amber-600',   bg: 'bg-amber-50',    border: 'border-amber-200',   step: 2 },
  INSPECTION_IN_PROGRESS: { label: 'Em inspeção',         color: 'text-brand-gold',    bg: 'bg-amber-50',     border: 'border-blue-200',    step: 2 },
  INSPECTION_APPROVED:    { label: 'Pronto para publicar',color: 'text-emerald-600', bg: 'bg-emerald-50',  border: 'border-emerald-200', step: 3 },
  LISTED:                 { label: 'Anunciado',           color: 'text-emerald-700', bg: 'bg-emerald-50',  border: 'border-emerald-200', step: 4 },
  SOLD:                   { label: 'Vendido',             color: 'text-gray-700',    bg: 'bg-gray-100',    border: 'border-gray-300',    step: 5 },
};

const STEPS = ['Cadastrado', 'Inspeção', 'Aprovado', 'Publicado', 'Vendido'];

function Stepper({ current }: { current: number }) {
  return (
    <div className="flex items-center">
      {STEPS.map((label, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
                done   ? 'bg-emerald-500 text-white' :
                active ? 'bg-brand-gold text-white ring-2 ring-blue-100' :
                         'bg-gray-100 text-gray-400'
              }`}>
                {done ? '✓' : step}
              </div>
              <span className={`mt-1 hidden whitespace-nowrap text-[10px] sm:block ${
                done ? 'text-emerald-600' : active ? 'font-semibold text-brand-gold' : 'text-gray-300'
              }`}>
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`mx-1 mb-4 h-0.5 w-6 ${done ? 'bg-emerald-400' : 'bg-gray-100'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

interface MyVehicle {
  id: string; brand: string; model: string; year: number;
  mileage: number; plate: string; color: string; status: string;
  inspection?: { id: string; status: string; aiScore: number | null } | null;
  listing?: { id: string; status: string; price: number; views: number; proposalCount: number; soldPrice?: number } | null;
}

export default function MeusVeiculosPage() {
  const [tab, setTab] = useState('ALL');

  const { data: vehicles = [], isLoading } = useQuery<MyVehicle[]>({
    queryKey: ['my-vehicles'],
    queryFn: async () => { const { data } = await api.get('/vehicles/mine'); return data; },
  });

  const filtered = tab === 'ALL' ? vehicles : vehicles.filter((v) => {
    if (tab === 'INSPECTION_PENDING') return v.status === 'INSPECTION_PENDING' || v.status === 'INSPECTION_IN_PROGRESS';
    return v.status === tab;
  });

  const counts: Record<string, number> = {
    ALL:                vehicles.length,
    DRAFT:              vehicles.filter((v) => v.status === 'DRAFT').length,
    INSPECTION_PENDING: vehicles.filter((v) => ['INSPECTION_PENDING', 'INSPECTION_IN_PROGRESS'].includes(v.status)).length,
    LISTED:             vehicles.filter((v) => v.status === 'LISTED').length,
    SOLD:               vehicles.filter((v) => v.status === 'SOLD').length,
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="border-b border-gray-100 bg-white px-6 py-6 md:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Meus veículos</h1>
            <p className="mt-1 text-sm text-gray-400">Acompanhe o status e gerencie cada anúncio</p>
          </div>
          <Link href="/cadastrar" className="flex items-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-gold-dark">
            <Plus className="h-4 w-4" /> Novo veículo
          </Link>
        </div>
      </div>

      <div className="px-6 py-6 md:px-8">
        {/* Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto rounded-xl bg-gray-100 p-1">
          {TABS.map((t) => (
            <button key={t.value} onClick={() => setTab(t.value)}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-semibold transition ${
                tab === t.value ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t.label}
              {counts[t.value] > 0 && (
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                  tab === t.value ? 'bg-amber-100 text-brand-gold' : 'bg-gray-200 text-gray-400'
                }`}>{counts[t.value]}</span>
              )}
            </button>
          ))}
        </div>

        {/* List */}
        {isLoading ? (
          <div className="mt-16 flex justify-center"><Loader2 className="h-8 w-8 animate-spin text-gray-300" /></div>
        ) : filtered.length === 0 ? (
          <div className="mt-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
              <Car className="h-8 w-8 text-gray-300" />
            </div>
            <p className="mt-4 font-semibold text-gray-500">Nenhum veículo nesta categoria</p>
            <Link href="/cadastrar" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-gold px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-gold-dark">
              <Plus className="h-4 w-4" /> Cadastrar veículo
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {filtered.map((v) => {
              const cfg = STATUS_CFG[v.status] ?? STATUS_CFG.DRAFT;
              return (
                <div key={v.id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <div className="flex gap-4 p-5">
                    {/* Thumbnail */}
                    <div className="h-24 w-36 flex-shrink-0 overflow-hidden rounded-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`https://picsum.photos/seed/${v.id}/288/192`} alt={`${v.brand} ${v.model}`} className="h-full w-full object-cover" />
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-gray-900">{v.brand} {v.model}</h3>
                          <div className="mt-1 flex items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{v.year}</span>
                            <span className="flex items-center gap-1"><Gauge className="h-3 w-3" />{v.mileage.toLocaleString('pt-BR')} km</span>
                            <span className="font-mono">{v.plate}</span>
                          </div>
                        </div>
                        <span className={`flex-shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${cfg.bg} ${cfg.color} ${cfg.border}`}>
                          {cfg.label}
                        </span>
                      </div>

                      {/* Listed stats */}
                      {v.listing && v.status === 'LISTED' && (
                        <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{v.listing.views} visualizações</span>
                          <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" />{v.listing.proposalCount} proposta{v.listing.proposalCount !== 1 ? 's' : ''}</span>
                          <span className="font-semibold text-gray-700">R$ {v.listing.price.toLocaleString('pt-BR')}</span>
                        </div>
                      )}
                      {v.status === 'SOLD' && v.listing?.soldPrice && (
                        <p className="mt-1 text-xs font-semibold text-emerald-600">
                          Vendido por R$ {v.listing.soldPrice.toLocaleString('pt-BR')} ✓
                        </p>
                      )}

                      {/* AI score bar */}
                      {v.inspection?.aiScore != null && (
                        <div className="mt-2 flex items-center gap-2">
                          <Shield className="h-3.5 w-3.5 text-emerald-500" />
                          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-gray-100">
                            <div className={`h-full rounded-full ${
                              v.inspection.aiScore >= 90 ? 'bg-emerald-500' :
                              v.inspection.aiScore >= 75 ? 'bg-amber-400' : 'bg-red-400'
                            }`} style={{ width: `${v.inspection.aiScore}%` }} />
                          </div>
                          <span className="text-xs font-semibold text-gray-600">{v.inspection.aiScore}/100</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Stepper + Actions */}
                  <div className="border-t border-gray-50 bg-gray-50/50 px-5 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <Stepper current={cfg.step} />
                      <div className="flex gap-2">
                        {v.status === 'DRAFT' && (
                          <Link href={`/inspecao/${v.id}`} className="flex items-center gap-1.5 rounded-lg bg-brand-gold px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-gold-dark">
                            Iniciar inspeção <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                        {(v.status === 'INSPECTION_PENDING' || v.status === 'INSPECTION_IN_PROGRESS') && (
                          <Link href={`/inspecao/${v.id}`} className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-600">
                            Continuar inspeção <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                        {v.status === 'INSPECTION_APPROVED' && !v.listing && (
                          <Link href={`/publicar/${v.id}`} className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700">
                            Publicar anúncio <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                        {v.status === 'LISTED' && v.listing && (
                          <>
                            <Link href={`/propostas`} className="flex items-center gap-1.5 rounded-lg bg-brand-gold px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-gold-dark">
                              <MessageSquare className="h-3.5 w-3.5" /> Propostas
                            </Link>
                          </>
                        )}
                        {v.status === 'SOLD' && (
                          <span className="flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-500">
                            <CheckCircle className="h-3.5 w-3.5 text-emerald-500" /> Concluído
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

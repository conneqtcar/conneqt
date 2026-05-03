'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import {
  Car, MessageSquare, Eye, DollarSign, Plus, ArrowRight,
  Bell, CheckCircle, Star, Megaphone, ShieldCheck, AlertCircle,
} from 'lucide-react';
import api from '@/lib/api';

const ACTIVITY_ICONS: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  NEW_PROPOSAL:        { icon: MessageSquare,  color: 'text-brand-gold',    bg: 'bg-amber-50' },
  VIEW_SPIKE:          { icon: Eye,            color: 'text-violet-600',  bg: 'bg-violet-50' },
  PROPOSAL_ACCEPTED:   { icon: CheckCircle,    color: 'text-emerald-600', bg: 'bg-emerald-50' },
  INSPECTION_APPROVED: { icon: ShieldCheck,    color: 'text-emerald-600', bg: 'bg-emerald-50' },
  LISTING_PUBLISHED:   { icon: Megaphone,      color: 'text-brand-gold',    bg: 'bg-amber-50' },
  INSPECTION_REJECTED: { icon: AlertCircle,    color: 'text-red-600',     bg: 'bg-red-50' },
};

const VEHICLE_STATUS: Record<string, { label: string; color: string; bg: string }> = {
  DRAFT:                  { label: 'Rascunho',          color: 'text-gray-500',    bg: 'bg-gray-100' },
  INSPECTION_PENDING:     { label: 'Em inspeção',        color: 'text-amber-600',   bg: 'bg-amber-50' },
  INSPECTION_IN_PROGRESS: { label: 'Em inspeção',        color: 'text-brand-gold',    bg: 'bg-amber-50' },
  INSPECTION_APPROVED:    { label: 'Pronto p/ publicar', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  LISTED:                 { label: 'Anunciado',          color: 'text-emerald-700', bg: 'bg-emerald-50' },
  SOLD:                   { label: 'Vendido',            color: 'text-gray-700',    bg: 'bg-gray-100' },
};

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000);
  const m = Math.floor(diff / 60000);
  if (d > 0) return `há ${d}d`;
  if (h > 0) return `há ${h}h`;
  return `há ${m}min`;
}

interface SellerStats {
  activeListings: number; pendingProposals: number;
  totalViews: number; estimatedRevenue: number;
  totalSold: number; rating: number; ratingCount: number;
}
interface SellerProfile { name: string }
interface ActivityItem { id: string; type: string; title: string; description: string; createdAt: string; link: string }
interface MyVehicle { id: string; brand: string; model: string; year: number; status: string; listing?: { price: number } | null }

export default function DashboardPage() {
  const { data: stats } = useQuery<SellerStats>({
    queryKey: ['seller-stats'],
    queryFn: async () => { const { data } = await api.get('/seller/stats'); return data; },
  });
  const { data: profile } = useQuery<SellerProfile>({
    queryKey: ['seller-profile'],
    queryFn: async () => { const { data } = await api.get('/seller/profile'); return data; },
  });
  const { data: activity = [] } = useQuery<ActivityItem[]>({
    queryKey: ['seller-activity'],
    queryFn: async () => { const { data } = await api.get('/seller/activity'); return data; },
  });
  const { data: vehicles = [] } = useQuery<MyVehicle[]>({
    queryKey: ['my-vehicles'],
    queryFn: async () => { const { data } = await api.get('/vehicles/mine'); return data; },
  });

  const KPI_CARDS = [
    { label: 'Veículos ativos',     value: String(stats?.activeListings ?? '—'),   icon: Car,           color: 'text-brand-gold',    bg: 'bg-amber-50',    border: 'border-blue-100',    link: '/meus-veiculos' },
    { label: 'Propostas pendentes', value: String(stats?.pendingProposals ?? '—'), icon: MessageSquare, color: 'text-amber-600',   bg: 'bg-amber-50',   border: 'border-amber-100',   link: '/propostas' },
    { label: 'Visualizações',       value: String(stats?.totalViews ?? '—'),       icon: Eye,           color: 'text-violet-600',  bg: 'bg-violet-50',  border: 'border-violet-100',  link: '/meus-veiculos' },
    { label: 'Receita estimada',    value: stats ? `R$ ${stats.estimatedRevenue.toLocaleString('pt-BR')}` : '—', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', link: '/propostas' },
  ];

  const h = new Date().getHours();
  const greeting = h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
  const today = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Page header */}
      <div className="border-b border-gray-100 bg-white px-6 py-6 md:px-8">
        <p className="text-xs font-medium capitalize text-gray-400">{today}</p>
        <h1 className="mt-1 text-2xl font-extrabold text-gray-900">
          {greeting}, {profile?.name?.split(' ')[0] ?? 'Vendedor'} 👋
        </h1>
        {(stats?.pendingProposals ?? 0) > 0 && (
          <p className="mt-1 text-sm text-amber-600">
            Você tem <strong>{stats!.pendingProposals} proposta{stats!.pendingProposals > 1 ? 's' : ''}</strong> aguardando resposta
          </p>
        )}
      </div>

      <div className="px-6 py-6 md:px-8">
        {/* KPI cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {KPI_CARDS.map((card) => (
            <Link
              key={card.label}
              href={card.link}
              className={`rounded-2xl border ${card.border} bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md`}
            >
              <div className={`mb-3 inline-flex rounded-xl p-2.5 ${card.bg}`}>
                <card.icon className={`h-5 w-5 ${card.color}`} />
              </div>
              <p className="text-2xl font-extrabold text-gray-900">{card.value}</p>
              <p className="mt-0.5 text-xs font-medium text-gray-400">{card.label}</p>
            </Link>
          ))}
        </div>

        {/* Quick actions */}
        <div className="mt-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">Ações rápidas</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link href="/cadastrar" className="flex items-center gap-3 rounded-2xl border-2 border-dashed border-blue-200 bg-amber-50/50 p-4 transition hover:border-blue-400 hover:bg-amber-50">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gold">
                <Plus className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Cadastrar veículo</p>
                <p className="text-xs text-gray-400">Inicie uma nova venda</p>
              </div>
            </Link>
            <Link href="/meus-veiculos" className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition hover:shadow-md">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100">
                <Car className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Meus veículos</p>
                <p className="text-xs text-gray-400">{stats?.activeListings ?? 0} anúncio{stats?.activeListings !== 1 ? 's' : ''} ativo{stats?.activeListings !== 1 ? 's' : ''}</p>
              </div>
            </Link>
            <Link href="/propostas" className="relative flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition hover:shadow-md">
              {(stats?.pendingProposals ?? 0) > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white shadow">
                  {stats!.pendingProposals}
                </span>
              )}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50">
                <MessageSquare className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Propostas</p>
                <p className="text-xs text-gray-400">{stats?.pendingProposals ?? 0} pendente{stats?.pendingProposals !== 1 ? 's' : ''}</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Activity + Recent vehicles */}
        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          {/* Activity feed */}
          <div className="rounded-2xl border border-gray-100 bg-white lg:col-span-3">
            <div className="flex items-center justify-between border-b border-gray-50 px-5 py-4">
              <h2 className="font-semibold text-gray-900">Atividade recente</h2>
              <Bell className="h-4 w-4 text-gray-300" />
            </div>
            <div className="divide-y divide-gray-50">
              {activity.slice(0, 6).map((item) => {
                const cfg = ACTIVITY_ICONS[item.type] ?? ACTIVITY_ICONS.NEW_PROPOSAL;
                return (
                  <Link key={item.id} href={item.link} className="flex items-start gap-3 px-5 py-3.5 transition hover:bg-gray-50">
                    <div className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${cfg.bg}`}>
                      <cfg.icon className={`h-4 w-4 ${cfg.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.title}</p>
                      <p className="mt-0.5 truncate text-xs text-gray-400">{item.description}</p>
                    </div>
                    <span className="flex-shrink-0 text-xs text-gray-300">{timeAgo(item.createdAt)}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recent vehicles */}
          <div className="rounded-2xl border border-gray-100 bg-white lg:col-span-2">
            <div className="flex items-center justify-between border-b border-gray-50 px-5 py-4">
              <h2 className="font-semibold text-gray-900">Meus veículos</h2>
              <Link href="/meus-veiculos" className="text-xs text-brand-gold hover:underline">Ver todos</Link>
            </div>
            <div className="divide-y divide-gray-50">
              {vehicles.slice(0, 3).map((v) => {
                const s = VEHICLE_STATUS[v.status] ?? VEHICLE_STATUS.DRAFT;
                return (
                  <Link key={v.id} href="/meus-veiculos" className="flex items-center gap-3 px-5 py-3.5 transition hover:bg-gray-50">
                    <div className="h-10 w-14 flex-shrink-0 overflow-hidden rounded-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`https://picsum.photos/seed/${v.id}/120/80`} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-900">{v.brand} {v.model}</p>
                      <p className="text-xs text-gray-400">{v.year}{v.listing ? ` · R$ ${v.listing.price.toLocaleString('pt-BR')}` : ''}</p>
                    </div>
                    <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${s.bg} ${s.color}`}>{s.label}</span>
                  </Link>
                );
              })}
            </div>
            <div className="px-5 py-3">
              <Link href="/cadastrar" className="flex w-full items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-gray-200 py-2.5 text-xs font-semibold text-gray-400 transition hover:border-blue-300 hover:text-brand-gold">
                <Plus className="h-3.5 w-3.5" /> Adicionar veículo
              </Link>
            </div>
          </div>
        </div>

        {/* Rating strip */}
        {stats && (
          <div className="mt-6 flex flex-wrap items-center gap-6 rounded-2xl border border-gray-100 bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                <Star className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gray-900">{stats.rating.toFixed(1)}</p>
                <p className="text-xs text-gray-400">{stats.ratingCount} avaliações</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-gray-100 sm:block" />
            <div>
              <p className="text-2xl font-extrabold text-gray-900">{stats.totalSold}</p>
              <p className="text-xs text-gray-400">vendas realizadas</p>
            </div>
            <div className="ml-auto">
              <Link href="/perfil" className="flex items-center gap-1.5 rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                Ver perfil completo <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

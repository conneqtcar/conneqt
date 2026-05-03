'use client';

import { useQuery } from '@tanstack/react-query';
import { Users, Car, ClipboardCheck, Building2, TrendingUp, TrendingDown } from 'lucide-react';
import api from '@/lib/api';

interface Stats {
  totalUsers: number;
  activeListings: number;
  awaitingReviewInspections: number;
  totalDealers: number;
}

const statCards = (data: Stats) => [
  {
    title: 'Usuários cadastrados',
    value: data.totalUsers.toLocaleString('pt-BR'),
    icon: Users,
    accent: 'bg-brand-gold',
    iconBg: 'bg-amber-50',
    iconColor: 'text-brand-gold',
    trend: +12.4,
    trendLabel: 'vs. mês passado',
    border: 'border-l-blue-500',
  },
  {
    title: 'Anúncios ativos',
    value: data.activeListings.toLocaleString('pt-BR'),
    icon: Car,
    accent: 'bg-emerald-600',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    trend: +8.1,
    trendLabel: 'vs. semana passada',
    border: 'border-l-emerald-500',
  },
  {
    title: 'Inspeções pendentes',
    value: data.awaitingReviewInspections.toLocaleString('pt-BR'),
    icon: ClipboardCheck,
    accent: 'bg-amber-500',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    trend: -3.2,
    trendLabel: 'vs. ontem',
    border: 'border-l-amber-500',
  },
  {
    title: 'Lojistas parceiros',
    value: data.totalDealers.toLocaleString('pt-BR'),
    icon: Building2,
    accent: 'bg-violet-600',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    trend: +5.7,
    trendLabel: 'vs. mês passado',
    border: 'border-l-violet-500',
  },
];

export function DashboardStats() {
  const { data, isLoading } = useQuery<Stats>({
    queryKey: ['admin-dashboard'],
    queryFn: async () => {
      const { data } = await api.get('/admin/dashboard');
      return data;
    },
    refetchInterval: 30000,
  });

  if (isLoading || !data) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-32 animate-pulse rounded-2xl bg-gray-100" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {statCards(data).map((card) => {
        const isPositive = card.trend >= 0;
        return (
          <div
            key={card.title}
            className={`relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm border-l-4 ${card.border} transition hover:shadow-md`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {card.title}
                </p>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900">
                  {card.value}
                </p>
                <div className="mt-3 flex items-center gap-1.5">
                  {isPositive ? (
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <TrendingDown className="h-3.5 w-3.5 text-red-400" />
                  )}
                  <span
                    className={`text-xs font-semibold ${
                      isPositive ? 'text-emerald-600' : 'text-red-500'
                    }`}
                  >
                    {isPositive ? '+' : ''}{card.trend}%
                  </span>
                  <span className="text-xs text-gray-400">{card.trendLabel}</span>
                </div>
              </div>
              <div className={`rounded-xl ${card.iconBg} p-3`}>
                <card.icon className={`h-5 w-5 ${card.iconColor}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

'use client';

import { Activity, UserPlus, Car, ClipboardCheck, TrendingUp } from 'lucide-react';

const MOCK_ACTIVITIES = [
  {
    id: '1',
    type: 'user_registered',
    title: 'Novo usuário cadastrado',
    description: 'Lucas Ferreira criou uma conta.',
    time: '2 min atrás',
    icon: UserPlus,
    iconBg: 'bg-amber-50',
    iconColor: 'text-brand-gold',
  },
  {
    id: '2',
    type: 'listing_published',
    title: 'Anúncio publicado',
    description: 'Honda Civic 2023 — R$ 149.900',
    time: '15 min atrás',
    icon: Car,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: '3',
    type: 'inspection_approved',
    title: 'Inspeção aprovada',
    description: 'Toyota Corolla · Score IA: 92%',
    time: '34 min atrás',
    icon: ClipboardCheck,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    id: '4',
    type: 'listing_published',
    title: 'Anúncio publicado',
    description: 'Jeep Compass 2022 — R$ 198.000',
    time: '1h atrás',
    icon: Car,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: '5',
    type: 'user_registered',
    title: 'Novo lojista parceiro',
    description: 'Auto Prime Veículos aprovado',
    time: '2h atrás',
    icon: TrendingUp,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
];

export function RecentActivity() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-4">
        <div className="rounded-lg bg-amber-50 p-2">
          <Activity className="h-4 w-4 text-brand-gold" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Atividade Recente</h2>
          <p className="text-xs text-gray-400">Últimas ações na plataforma</p>
        </div>
      </div>

      {/* List */}
      <ul className="divide-y divide-gray-50">
        {MOCK_ACTIVITIES.map((item, index) => (
          <li
            key={item.id}
            className="flex items-start gap-3.5 px-6 py-4 transition hover:bg-gray-50/60"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className={`mt-0.5 flex-shrink-0 rounded-lg ${item.iconBg} p-2`}>
              <item.icon className={`h-3.5 w-3.5 ${item.iconColor}`} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-gray-800">{item.title}</p>
              <p className="mt-0.5 truncate text-xs text-gray-400">{item.description}</p>
            </div>
            <span className="flex-shrink-0 text-[10px] text-gray-300">{item.time}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-50 px-6 py-3">
        <p className="text-center text-xs text-gray-300">Exibindo atividade das últimas 24h</p>
      </div>
    </div>
  );
}

'use client';

import { Shield, FileCheck, Lock, Star, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const badges = [
  {
    icon: Shield,
    title: 'Inspeção Obrigatória',
    description: 'Todo veículo é inspecionado por nossa IA antes de ser publicado na plataforma.',
    color: 'text-brand-gold',
    iconBg: 'bg-amber-100',
    border: 'hover:border-blue-200',
    glow: 'hover:shadow-blue-100',
    number: '01',
  },
  {
    icon: FileCheck,
    title: 'Laudo Digital',
    description: 'Documento verificável com score de condição 0–100 e hash anti-adulteração.',
    color: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    border: 'hover:border-emerald-200',
    glow: 'hover:shadow-emerald-100',
    number: '02',
  },
  {
    icon: Lock,
    title: 'Pagamento Escrow',
    description: 'O vendedor recebe apenas após confirmação da entrega e documentação.',
    color: 'text-violet-600',
    iconBg: 'bg-violet-100',
    border: 'hover:border-violet-200',
    glow: 'hover:shadow-violet-100',
    number: '03',
  },
  {
    icon: Star,
    title: 'Contrato Digital',
    description: 'Assinatura eletrônica com validade jurídica ICP-Brasil.',
    color: 'text-amber-600',
    iconBg: 'bg-amber-100',
    border: 'hover:border-amber-200',
    glow: 'hover:shadow-amber-100',
    number: '04',
  },
];

export function TrustBadges() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div
          className={`mb-14 text-center in-view-hidden ${isVisible ? 'is-visible' : ''}`}
        >
          <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Por que a Conneqt?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Segurança em cada etapa
          </h2>
          <p className="mt-3 text-gray-400 md:text-lg">
            Desenvolvemos um processo completo para proteger compradores e vendedores.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, i) => (
            <div
              key={badge.title}
              className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${badge.border} ${badge.glow} in-view-hidden ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Number watermark */}
              <span className="absolute right-4 top-3 font-mono text-5xl font-extrabold text-gray-50 select-none">
                {badge.number}
              </span>

              {/* Icon */}
              <div className={`mb-5 inline-flex rounded-xl ${badge.iconBg} p-3`}>
                <badge.icon className={`h-6 w-6 ${badge.color}`} />
              </div>

              <h3 className="mb-2 font-bold text-gray-900">{badge.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{badge.description}</p>

              {/* Arrow hover */}
              <div className={`mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${badge.color}`}>
                Saiba mais <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

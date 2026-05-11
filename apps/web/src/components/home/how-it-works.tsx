'use client';

import { ClipboardList, Camera, Megaphone, ShieldCheck, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Cadastre',
    subtitle: 'seu veículo',
    description: 'Placa + FIPE preenchida automaticamente.',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
    dot: 'bg-brand-gold',
  },
  {
    icon: Camera,
    step: '02',
    title: 'Inspecione',
    subtitle: 'com IA',
    description: 'Fotos e vídeos guiados, laudo em minutos.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    dot: 'bg-violet-400',
  },
  {
    icon: Megaphone,
    step: '03',
    title: 'Publique',
    subtitle: 'e receba propostas',
    description: 'Anúncio verificado ao vivo após aprovação.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    dot: 'bg-emerald-400',
  },
  {
    icon: ShieldCheck,
    step: '04',
    title: 'Venda',
    subtitle: 'com segurança',
    description: 'Contrato digital com respaldo jurídico.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    dot: 'bg-amber-400',
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-gray-950 py-14 text-white"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        {/* Header minimalista */}
        <div className={`mb-10 flex flex-col items-center gap-2 text-center in-view-hidden ${isVisible ? 'is-visible' : ''}`}>
          <span className="text-xs font-semibold uppercase tracking-widest text-white/30">
            Como funciona
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Do cadastro à venda em{' '}
            <span className="text-brand-gold">até 15 dias</span>
          </h2>
        </div>

        {/* Steps — linha horizontal no desktop, vertical no mobile */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`flex flex-1 items-center sm:flex-col sm:items-stretch in-view-hidden ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Card */}
              <div className="flex flex-1 items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-4 transition-colors duration-200 hover:bg-white/[0.07] sm:flex-col sm:items-start sm:gap-3">
                {/* Ícone + número */}
                <div className="flex shrink-0 items-center gap-2 sm:w-full sm:justify-between">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${s.bg}`}>
                    <s.icon className={`h-4 w-4 ${s.color}`} />
                  </div>
                  <span className={`font-mono text-xs font-bold ${s.color} opacity-40`}>{s.step}</span>
                </div>

                {/* Texto */}
                <div className="min-w-0">
                  <p className="text-sm font-bold leading-tight text-white">
                    {s.title}{' '}
                    <span className="font-normal text-white/50">{s.subtitle}</span>
                  </p>
                  <p className="mt-1 text-xs leading-snug text-white/30">{s.description}</p>
                </div>
              </div>

              {/* Seta separadora */}
              {i < steps.length - 1 && (
                <ChevronRight className="mx-2 h-4 w-4 shrink-0 text-white/15 sm:hidden" />
              )}
              {i < steps.length - 1 && (
                <div className="hidden h-px w-3 shrink-0 self-center bg-white/10 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

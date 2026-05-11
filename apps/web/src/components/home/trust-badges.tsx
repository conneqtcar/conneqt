'use client';

import { Shield, FileCheck, MessageCircle, Star, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const steps = [
  {
    icon: Shield,
    title: 'Inspeção Obrigatória',
    description: 'IA inspeciona cada veículo antes da publicação',
    color: 'text-brand-gold',
    iconBg: 'bg-amber-50',
    number: '01',
  },
  {
    icon: FileCheck,
    title: 'Laudo Digital',
    description: 'Score 0–100 com hash anti-adulteração',
    color: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    number: '02',
  },
  {
    icon: MessageCircle,
    title: 'Negociação Direta',
    description: 'Chat integrado entre comprador e vendedor',
    color: 'text-blue-600',
    iconBg: 'bg-blue-50',
    number: '03',
  },
  {
    icon: Star,
    title: 'Contrato Digital',
    description: 'Assinatura eletrônica ICP-Brasil',
    color: 'text-amber-600',
    iconBg: 'bg-amber-50',
    number: '04',
  },
];

export function TrustBadges() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-white py-10 border-b border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header compacto */}
        <div className={`mb-6 flex items-center gap-3 in-view-hidden ${isVisible ? 'is-visible' : ''}`}>
          <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Por que a Conneqt?
          </span>
          <span className="text-sm text-gray-400">Segurança em cada etapa do processo</span>
        </div>

        {/* Steps lineares */}
        <div className="flex flex-col sm:flex-row items-stretch gap-0">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`flex flex-1 items-center in-view-hidden ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Step */}
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/60 px-4 py-3 transition-all duration-200 hover:bg-white hover:shadow-md hover:border-gray-200">
                <div className={`shrink-0 inline-flex rounded-lg ${step.iconBg} p-2`}>
                  <step.icon className={`h-5 w-5 ${step.color}`} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] font-bold text-gray-300">{step.number}</span>
                    <p className="text-sm font-semibold text-gray-900 truncate">{step.title}</p>
                  </div>
                  <p className="text-xs text-gray-400 leading-snug mt-0.5">{step.description}</p>
                </div>
              </div>

              {/* Seta de conexão */}
              {i < steps.length - 1 && (
                <ChevronRight className="mx-1 h-4 w-4 shrink-0 text-gray-300 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { ClipboardList, Camera, Megaphone, ShieldCheck } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Cadastre seu veículo',
    description: 'Informe a placa e deixamos a FIPE pré-preencher os dados automaticamente em segundos.',
    color: 'text-brand-gold',
    bg: 'bg-amber-50',
    border: 'border-blue-100',
    active: 'bg-brand-gold',
  },
  {
    icon: Camera,
    step: '02',
    title: 'Faça a inspeção',
    description: 'Pelo app, tire fotos e grave vídeos guiados. Nossa IA analisa condição e autenticidade em minutos.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    active: 'bg-violet-600',
  },
  {
    icon: Megaphone,
    step: '03',
    title: 'Publique e receba propostas',
    description: 'Após aprovação do laudo, o anúncio vai ao ar com badge de veículo verificado.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    active: 'bg-emerald-600',
  },
  {
    icon: ShieldCheck,
    step: '04',
    title: 'Venda com segurança',
    description: 'Assine o contrato digital e receba via escrow — sem risco de calote ou fraude.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    active: 'bg-amber-600',
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-gray-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className={`mb-16 text-center in-view-hidden ${isVisible ? 'is-visible' : ''}`}>
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
            Como funciona
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Do cadastro à venda em{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              até 15 dias
            </span>
          </h2>
          <p className="mt-3 text-gray-400 md:text-lg">
            Processo 100% digital, do primeiro cadastro até o repasse.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`group relative in-view-hidden ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+28px)] top-7 hidden h-px w-[calc(100%-56px)] bg-gradient-to-r from-white/20 to-transparent md:block" />
              )}

              <div className={`relative rounded-2xl border ${s.border} bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10`}>
                {/* Step number */}
                <div className="mb-5 flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.bg}`}>
                    <s.icon className={`h-6 w-6 ${s.color}`} />
                  </div>
                  <span className={`font-mono text-4xl font-extrabold ${s.color} opacity-30`}>
                    {s.step}
                  </span>
                </div>

                {/* Progress dot */}
                <div className={`mb-4 h-1 w-8 rounded-full ${s.active} opacity-60`} />

                <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

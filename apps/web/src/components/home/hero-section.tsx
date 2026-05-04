'use client';

import Link from 'next/link';
import { Shield, ShieldCheck, ArrowRight, Search, TrendingUp, Users, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const BG_IMAGES = [
  'https://picsum.photos/seed/hero-car-1/1920/1080',
  'https://picsum.photos/seed/hero-car-3/1920/1080',
  'https://picsum.photos/seed/hero-car-5/1920/1080',
];

const STATS = [
  { value: 10000, suffix: '+', label: 'Veículos verificados', icon: <ShieldCheck className="h-5 w-5" /> },
  { value: 50,   prefix: 'R$', suffix: 'M+', label: 'Em transações', icon: <TrendingUp className="h-5 w-5" /> },
  { value: 98,   suffix: '%', label: 'Compradores satisfeitos', icon: <Star className="h-5 w-5" /> },
  { value: 4800, suffix: '+', label: 'Vendedores ativos', icon: <Users className="h-5 w-5" /> },
];

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, active]);
  return count;
}

function StatCard({ stat, active, delay }: { stat: typeof STATS[0]; active: boolean; delay: number }) {
  const count = useCountUp(stat.value, 1800, active);
  return (
    <div
      className="in-view-hidden flex flex-col items-center gap-1 text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-1 flex items-center gap-1.5 text-brand-gold-light">{stat.icon}</div>
      <div className="text-2xl font-extrabold text-white md:text-3xl">
        {stat.prefix ?? ''}{count.toLocaleString('pt-BR')}{stat.suffix}
      </div>
      <div className="text-xs text-amber-100/80 md:text-sm">{stat.label}</div>
    </div>
  );
}

export function HeroSection() {
  const [activeImg, setActiveImg] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  // Slideshow automático
  useEffect(() => {
    const id = setInterval(() => setActiveImg((i) => (i + 1) % BG_IMAGES.length), 5000);
    return () => clearInterval(id);
  }, []);

  // Dispara contadores após mount
  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  // Ativa classes in-view nos elementos após render
  useEffect(() => {
    const els = document.querySelectorAll('.hero-anim');
    requestAnimationFrame(() => {
      els.forEach((el) => el.classList.add('is-visible'));
    });
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('brand', query.trim());
    router.push(`/buscar?${params.toString()}`);
  }

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* ── Background slideshow ── */}
      {BG_IMAGES.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === activeImg ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay multicamada */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 via-transparent to-transparent" />

      {/* ── Navbar ── */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
        <Link href="/" className="flex items-center">
          <img src="/icons/logonome.png" alt="Conneqt Car" className="h-9 w-auto object-contain" />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {[
            { label: 'Buscar', href: '/buscar' },
            { label: 'Propostas', href: '/minhas-propostas' },
            { label: 'Vender', href: process.env.NEXT_PUBLIC_SELLER_URL ?? 'http://localhost:5001' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/entrar"
            className="ml-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className="ml-1 rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-gold-dark"
          >
            Cadastrar
          </Link>
        </div>
      </nav>

      {/* ── Mascote (desktop) ── */}
      <div className="pointer-events-none absolute bottom-0 right-4 z-10 hidden select-none md:block lg:right-12">
        <img
          src="/icons/mascote.svg"
          alt=""
          aria-hidden
          className="h-[420px] w-auto animate-[float_4s_ease-in-out_infinite] object-contain drop-shadow-2xl lg:h-[500px]"
        />
      </div>

      {/* ── Conteúdo central ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-10 pt-8 text-center md:px-12 md:pr-[340px] lg:pr-[420px]">

        {/* Badge */}
        <div className="in-view-hidden hero-anim animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          Plataforma 100% verificada e segura
        </div>

        <h1 className="in-view-hidden hero-anim delay-100 mb-6 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
          Compre e venda carros{' '}
          <span className="bg-gradient-to-r from-brand-gold-light to-brand-gold bg-clip-text text-transparent">
            sem surpresas
          </span>
        </h1>

        <p className="in-view-hidden hero-anim delay-200 mb-10 max-w-2xl text-base text-white/70 md:text-xl">
          Todo veículo passa por inspeção com laudo digital verificável.
          Pagamento via escrow. O jeito inteligente de negociar.
        </p>

        {/* Search bar integrada */}
        <form
          onSubmit={handleSearch}
          className="in-view-hidden hero-anim delay-300 mb-8 flex w-full max-w-xl overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md"
        >
          <div className="flex flex-1 items-center gap-3 px-4">
            <Search className="h-5 w-5 flex-shrink-0 text-white/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Marca, modelo ou cidade..."
              className="flex-1 bg-transparent py-4 text-sm text-white placeholder-white/40 outline-none"
            />
          </div>
          <button
            type="submit"
            className="m-1.5 rounded-xl bg-brand-gold px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-gold-dark active:scale-95"
          >
            Buscar
          </button>
        </form>

        {/* CTAs */}
        <div className="in-view-hidden hero-anim delay-400 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/buscar"
            className="group flex items-center gap-2 rounded-2xl bg-brand-gold px-8 py-4 text-base font-bold text-white shadow-lg shadow-amber-500/30 transition hover:bg-brand-gold-dark hover:shadow-amber-400/40 active:scale-95"
          >
            Ver Veículos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_SELLER_URL ?? 'http://localhost:5001'}
            className="flex items-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-95"
          >
            <Shield className="h-4 w-4" />
            Anunciar Veículo
          </Link>
        </div>

        {/* Indicadores do slideshow */}
        <div className="in-view-hidden hero-anim delay-500 mt-10 flex gap-2">
          {BG_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === activeImg ? 'w-8 bg-white' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:px-12">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`in-view-hidden flex flex-col items-center gap-1 text-center ${statsVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-1 text-brand-gold-light">{stat.icon}</div>
              <StatCard stat={stat} active={statsVisible} delay={i * 100} />
              <div className="text-xs text-amber-100/70 md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { Shield, ShieldCheck, ArrowRight, Search, TrendingUp, Users, Star, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const BRAND_LOGOS = [
  {
    name: 'Volkswagen', viewBox: '0 0 100 100',
    render: () => (<><circle cx={50} cy={50} r={46} fill="none" stroke="currentColor" strokeWidth={3.5}/><circle cx={50} cy={50} r={33} fill="none" stroke="currentColor" strokeWidth={2.5}/><path d="M37 26 L50 56 L63 26" fill="none" stroke="currentColor" strokeWidth={5.5} strokeLinejoin="round" strokeLinecap="round"/><path d="M24 41 L37 71 L50 51 L63 71 L76 41" fill="none" stroke="currentColor" strokeWidth={5.5} strokeLinejoin="round" strokeLinecap="round"/></>),
  },
  {
    name: 'Audi', viewBox: '0 0 109 40',
    render: () => (<><circle cx={20} cy={20} r={17} fill="none" stroke="currentColor" strokeWidth={3}/><circle cx={43} cy={20} r={17} fill="none" stroke="currentColor" strokeWidth={3}/><circle cx={66} cy={20} r={17} fill="none" stroke="currentColor" strokeWidth={3}/><circle cx={89} cy={20} r={17} fill="none" stroke="currentColor" strokeWidth={3}/></>),
  },
  {
    name: 'BMW', viewBox: '0 0 100 100',
    render: () => (<><circle cx={50} cy={50} r={46} fill="none" stroke="currentColor" strokeWidth={3.5}/><circle cx={50} cy={50} r={30} fill="none" stroke="currentColor" strokeWidth={3.5}/><line x1={50} y1={20} x2={50} y2={80} stroke="currentColor" strokeWidth={3.5}/><line x1={20} y1={50} x2={80} y2={50} stroke="currentColor" strokeWidth={3.5}/></>),
  },
  {
    name: 'Mercedes-Benz', viewBox: '0 0 100 100',
    render: () => (<><circle cx={50} cy={50} r={46} fill="none" stroke="currentColor" strokeWidth={3.5}/><path d="M50 8 L50 50 M50 50 L87.7 71 M50 50 L12.3 71" stroke="currentColor" strokeWidth={4.5} strokeLinecap="round"/><circle cx={50} cy={50} r={3.5} fill="currentColor"/></>),
  },
  {
    name: 'Toyota', viewBox: '0 0 100 100',
    render: () => (<><ellipse cx={50} cy={50} rx={46} ry={33} fill="none" stroke="currentColor" strokeWidth={4}/><ellipse cx={50} cy={50} rx={17} ry={46} fill="none" stroke="currentColor" strokeWidth={4}/><ellipse cx={50} cy={30} rx={32} ry={18} fill="none" stroke="currentColor" strokeWidth={3.5}/></>),
  },
  {
    name: 'Honda', viewBox: '0 0 80 80',
    render: () => (<path d="M12 12 L12 68 M68 12 L68 68 M12 40 L68 40" fill="none" stroke="currentColor" strokeWidth={8} strokeLinecap="round"/>),
  },
  {
    name: 'Hyundai', viewBox: '0 0 100 80',
    render: () => (<><ellipse cx={50} cy={40} rx={48} ry={37} fill="none" stroke="currentColor" strokeWidth={3.5}/><path d="M20 18 L20 62 M80 18 L80 62 M20 40 C32 28 68 52 80 40" fill="none" stroke="currentColor" strokeWidth={6} strokeLinecap="round"/></>),
  },
  {
    name: 'Chevrolet', viewBox: '0 0 160 60',
    render: () => (<><path d="M5 12 L78 12 L90 30 L78 48 L5 48 Z" fill="none" stroke="currentColor" strokeWidth={4}/><path d="M90 30 L82 12 L155 12 L155 48 L82 48 Z" fill="none" stroke="currentColor" strokeWidth={4}/></>),
  },
  {
    name: 'Renault', viewBox: '0 0 70 90',
    render: () => (<><path d="M35 4 L66 32 L35 60 L4 32 Z" fill="none" stroke="currentColor" strokeWidth={4}/><path d="M35 30 L66 58 L35 86 L4 58 Z" fill="none" stroke="currentColor" strokeWidth={4}/></>),
  },
  {
    name: 'Nissan', viewBox: '0 0 120 60',
    render: () => (<><circle cx={60} cy={30} r={27} fill="none" stroke="currentColor" strokeWidth={3.5}/><rect x={3} y={24} width={114} height={12} rx={6} fill="none" stroke="currentColor" strokeWidth={3.5}/></>),
  },
  {
    name: 'Mitsubishi', viewBox: '0 0 90 64',
    render: () => (<><path d="M45 1 L60 14 L45 27 L30 14 Z" fill="none" stroke="currentColor" strokeWidth={3.5}/><path d="M20 37 L35 50 L20 63 L5 50 Z" fill="none" stroke="currentColor" strokeWidth={3.5}/><path d="M70 37 L85 50 L70 63 L55 50 Z" fill="none" stroke="currentColor" strokeWidth={3.5}/></>),
  },
  {
    name: 'Jeep', viewBox: '0 0 112 55',
    render: () => (<><rect x={2} y={2} width={108} height={51} rx={8} fill="none" stroke="currentColor" strokeWidth={3}/><rect x={12} y={9} width={10} height={37} rx={5} fill="none" stroke="currentColor" strokeWidth={2.5}/><rect x={25} y={9} width={10} height={37} rx={5} fill="none" stroke="currentColor" strokeWidth={2.5}/><rect x={38} y={9} width={10} height={37} rx={5} fill="none" stroke="currentColor" strokeWidth={2.5}/><rect x={51} y={9} width={10} height={37} rx={5} fill="none" stroke="currentColor" strokeWidth={2.5}/><rect x={64} y={9} width={10} height={37} rx={5} fill="none" stroke="currentColor" strokeWidth={2.5}/><rect x={77} y={9} width={10} height={37} rx={5} fill="none" stroke="currentColor" strokeWidth={2.5}/><rect x={90} y={9} width={10} height={37} rx={5} fill="none" stroke="currentColor" strokeWidth={2.5}/></>),
  },
  {
    name: 'Fiat', viewBox: '0 0 80 96',
    render: () => (<><path d="M40 4 L76 20 L76 68 C76 83 60 93 40 97 C20 93 4 83 4 68 L4 20 Z" fill="none" stroke="currentColor" strokeWidth={4}/><line x1={14} y1={44} x2={66} y2={44} stroke="currentColor" strokeWidth={4} strokeLinecap="round"/><line x1={14} y1={58} x2={66} y2={58} stroke="currentColor" strokeWidth={4} strokeLinecap="round"/><line x1={14} y1={72} x2={66} y2={72} stroke="currentColor" strokeWidth={4} strokeLinecap="round"/></>),
  },
  {
    name: 'Ford', viewBox: '0 0 140 70',
    render: () => (<><ellipse cx={70} cy={35} rx={66} ry={31} fill="none" stroke="currentColor" strokeWidth={4}/><ellipse cx={70} cy={35} rx={50} ry={22} fill="none" stroke="currentColor" strokeWidth={2.5}/></>),
  },
  {
    name: 'Kia', viewBox: '0 0 100 60',
    render: () => (<><ellipse cx={50} cy={30} rx={47} ry={27} fill="none" stroke="currentColor" strokeWidth={3.5}/><path d="M18 20 L18 40 M18 30 L28 20 M18 30 L28 40" fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/><line x1={45} y1={20} x2={45} y2={40} stroke="currentColor" strokeWidth={4} strokeLinecap="round"/><path d="M58 40 L67 20 L76 40 M61 33 L73 33" fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/></>),
  },
  {
    name: 'Peugeot', viewBox: '0 0 70 80',
    render: () => (<><path d="M35 4 L66 16 L66 54 C66 68 52 77 35 80 C18 77 4 68 4 54 L4 16 Z" fill="none" stroke="currentColor" strokeWidth={3.5}/><circle cx={35} cy={34} r={12} fill="none" stroke="currentColor" strokeWidth={3}/><path d="M24 46 C24 62 46 62 46 46" fill="none" stroke="currentColor" strokeWidth={3}/></>),
  },
];

const POPULAR_SEARCHES = ['Fiat Argo', 'Honda HRV', 'Toyota Corolla', 'Hyundai Creta'];

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
      className={`in-view-hidden flex flex-row items-center justify-center gap-2 text-center ${active ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-brand-gold-light">{stat.icon}</div>
      <div className="flex flex-col items-start">
        <div className="text-sm font-bold text-white">
          {stat.prefix ?? ''}{count.toLocaleString('pt-BR')}{stat.suffix}
        </div>
        <div className="text-[10px] leading-tight text-amber-100/60">{stat.label}</div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

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

  // Esconde scroll indicator após scroll
  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 60) setScrolled(true); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('brand', query.trim());
    router.push(`/buscar?${params.toString()}`);
  }

  function handlePill(term: string) {
    const params = new URLSearchParams();
    params.set('brand', term);
    router.push(`/buscar?${params.toString()}`);
  }

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden noise-overlay">
      {/* ── Fundo escuro + logotipos de marcas ── */}
      <div className="absolute inset-0 bg-[#0c0e14]" />

      {/* Marquee de logos — 3 faixas em velocidades e direções diferentes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden>
        {/* Faixa 1 — esquerda */}
        <div className="absolute top-[5%] flex">
          <div className="flex animate-marquee-left items-center gap-16">
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((b, i) => (
              <svg key={`r1-${i}`} viewBox={b.viewBox} className="h-14 w-auto flex-shrink-0 text-white/[0.12]">
                {b.render()}
              </svg>
            ))}
          </div>
        </div>
        {/* Faixa 2 — direita */}
        <div className="absolute top-[40%] flex">
          <div className="flex animate-marquee-right items-center gap-20">
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((b, i) => (
              <svg key={`r2-${i}`} viewBox={b.viewBox} className="h-11 w-auto flex-shrink-0 text-white/[0.07]">
                {b.render()}
              </svg>
            ))}
          </div>
        </div>
        {/* Faixa 3 — esquerda, mais lenta */}
        <div className="absolute bottom-[14%] flex">
          <div className="flex animate-marquee-left-slow items-center gap-14">
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((b, i) => (
              <svg key={`r3-${i}`} viewBox={b.viewBox} className="h-9 w-auto flex-shrink-0 text-white/[0.06]">
                {b.render()}
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay multicamada */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-transparent" />

      {/* ── Navbar ── */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
        <Link href="/" className="flex items-center gap-1">
          <img src="/icons/logo.svg" alt="Conneqt" className="h-8 w-8 object-contain" />
          <img src="/icons/logonome.png" alt="Conneqt Car" className="h-7 w-auto object-contain" />
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
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 hidden select-none md:block lg:right-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/mascote.png"
          alt=""
          aria-hidden
          className="h-[560px] w-auto animate-[float_4s_ease-in-out_infinite] object-contain drop-shadow-2xl lg:h-[680px]"
        />
      </div>

      {/* ── Conteúdo central ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-10 pt-8 text-center md:px-12 md:pr-[260px] lg:pr-[340px]">

        {/* H1 — word-by-word reveal */}
        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-6xl lg:text-7xl">
          <span className="flex flex-wrap justify-center gap-x-[0.22em]">
            {['Compre', 'e', 'venda', 'carros'].map((word, i) => (
              <span
                key={word + i}
                className="hero-anim opacity-0"
                style={{ animationDelay: `${80 + i * 80}ms`, animationFillMode: 'forwards' }}
              >
                {word}
              </span>
            ))}
          </span>
          <span className="mt-1 flex flex-wrap justify-center gap-x-[0.22em]">
            {['sem', 'surpresas'].map((word, i) => (
              <span
                key={word + i}
                className="hero-anim bg-gradient-to-r from-brand-gold-light to-brand-gold bg-clip-text text-transparent opacity-0"
                style={{ animationDelay: `${400 + i * 80}ms`, animationFillMode: 'forwards' }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        <p className="in-view-hidden hero-anim delay-200 mb-8 max-w-2xl text-base text-white/70 md:text-xl">
          Todo veículo passa por inspeção com laudo digital verificável.
          O jeito inteligente de negociar com segurança.
        </p>

        {/* Search bar integrada */}
        <form
          onSubmit={handleSearch}
          className="in-view-hidden hero-anim delay-300 mb-3 flex w-full max-w-xl overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md"
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

        {/* Popular search pills */}
        <div className="in-view-hidden hero-anim delay-300 mb-8 flex flex-wrap justify-center gap-2">
          {POPULAR_SEARCHES.map((term) => (
            <button
              key={term}
              onClick={() => handlePill(term)}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/60 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              {term}
            </button>
          ))}
        </div>

        {/* CTAs */}
        <div className="in-view-hidden hero-anim delay-400 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/buscar"
            className="cta-pulse group relative flex items-center gap-2 rounded-2xl bg-brand-gold px-8 py-4 text-base font-bold text-white shadow-lg shadow-amber-500/30 transition hover:bg-brand-gold-dark hover:shadow-amber-400/40 active:scale-95"
          >
            Ver Veículos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 rounded-2xl ring-0 ring-brand-gold/40 transition-all duration-300 group-hover:ring-4 group-hover:ring-offset-2 group-hover:ring-offset-transparent" />
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_SELLER_URL ?? 'http://localhost:5001'}
            className="flex items-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-95"
          >
            <Shield className="h-4 w-4" />
            Anunciar Veículo
          </Link>
        </div>



        {/* Scroll-down indicator */}
        <div
          className={`mt-6 flex flex-col items-center gap-1 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden
        >
          <span className="text-[10px] font-medium uppercase tracking-widest text-white/25">scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-white/25" />
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto grid max-w-5xl grid-cols-4 gap-4 px-6 py-3 md:px-12">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              active={statsVisible}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

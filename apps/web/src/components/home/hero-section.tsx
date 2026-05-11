'use client';

import Link from 'next/link';
import { Shield, ShieldCheck, ArrowRight, Search, TrendingUp, Users, Star, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80',
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=80',
  'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80',
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
  const [activeImg, setActiveImg] = useState(0);
  const [bgImages, setBgImages] = useState<string[]>(FALLBACK_IMAGES);
  const [statsVisible, setStatsVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Busca banners da API
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
    fetch(`${apiUrl}/api/v1/banners`)
      .then((r) => r.ok ? r.json() : [])
      .then((data: { imageUrl: string }[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setBgImages(data.map((b) => b.imageUrl));
        }
      })
      .catch(() => { /* mantém fallback */ });
  }, []);

  // Slideshow automático
  useEffect(() => {
    const id = setInterval(() => setActiveImg((i) => (i + 1) % bgImages.length), 5000);
    return () => clearInterval(id);
  }, [bgImages.length]);

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
      {/* ── Background slideshow ── */}
      {bgImages.map((src, i) => (
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
        <img
          src="/icons/mascote.svg"
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

        {/* Indicadores do slideshow */}
        <div className="in-view-hidden hero-anim delay-500 mt-8 flex gap-2">
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

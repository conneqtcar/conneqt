import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ListingsGrid } from '@/components/listings/listings-grid';
import { HeroSection } from '@/components/home/hero-section';
import { TrustBadges } from '@/components/home/trust-badges';
import { HowItWorks } from '@/components/home/how-it-works';

function ListingsSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-72 animate-pulse rounded-2xl skeleton-shimmer" />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TrustBadges />

      {/* ── Destaques ── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Destaques
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900">
                Veículos verificados para você
              </h2>
              <p className="mt-2 text-gray-400">
                Todos com laudo digital Conneqt e inspeção aprovada.
              </p>
            </div>
            <Link
              href="/buscar"
              className="group hidden items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-blue-200 hover:text-brand-gold md:flex"
            >
              Ver todos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <Suspense fallback={<ListingsSkeleton />}>
            <ListingsGrid featured />
          </Suspense>

          <div className="mt-8 flex justify-center md:hidden">
            <Link
              href="/buscar"
              className="rounded-full border border-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:text-brand-gold"
            >
              Ver todos os veículos →
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* ── CTA Final ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-24">
        {/* Efeito de brilho */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <img src="/icons/logo.svg" alt="Conneqt" className="h-4 w-4" />
            Venda mais rápido com a Conneqt
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Pronto para anunciar<br />com segurança?
          </h2>
          <p className="mt-5 text-lg text-blue-100/80">
            Crie seu anúncio em minutos. Laudo digital incluso, sem custo adicional.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/vender"
              className="group flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-bold text-brand-gold shadow-xl shadow-blue-900/30 transition hover:bg-amber-50 active:scale-95"
            >
              Anunciar meu veículo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/buscar"
              className="rounded-2xl border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10 active:scale-95"
            >
              Buscar veículos
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer simples ── */}
      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-400 sm:flex-row md:px-12">
          <div className="flex items-center gap-2 font-extrabold text-gray-900">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-brand-dark">
              <img src="/icons/logo.svg" alt="Conneqt" className="h-4 w-4" />
            </div>
            Conneqt
          </div>
          <p>© {new Date().getFullYear()} Conneqt. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/buscar" className="transition hover:text-gray-700">Buscar</Link>
            <Link href="/vender" className="transition hover:text-gray-700">Vender</Link>
            <Link href="/entrar" className="transition hover:text-gray-700">Entrar</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

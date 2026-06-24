'use client';

import {
  Shield,
  Gauge,
  Calendar,
  CheckCircle,
  MessageCircle,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Share2,
  Heart,
  Phone,
  ShieldCheck,
  Info,
  Star,
  Fuel,
  Settings2,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChatWindow } from '@/components/chat/chat-window';

interface ListingDetailProps {
  listing: Record<string, unknown>;
}

export function ListingDetail({ listing }: ListingDetailProps) {
  const vehicle = listing.vehicle as Record<string, unknown>;
  const seller = listing.seller as Record<string, unknown>;
  const inspections = (vehicle?.inspections as Array<Record<string, unknown>> | undefined) ?? [];
  const inspection = inspections[0];
  const [chatOpen, setChatOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [navSolid, setNavSolid] = useState(false);
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  const inspectionMedia = (inspection?.media as Array<{ url: string; type: string }> | undefined) ?? [];
  const images = inspectionMedia.length > 0
    ? inspectionMedia.map((m) => m.url)
    : [`https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80`];

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const listingTitle = `${vehicle?.brand as string} ${vehicle?.model as string} ${vehicle?.year as number}`;

  const handleChatClick = () => {
    if (typeof window !== 'undefined' && !localStorage.getItem('access_token')) {
      toast.error('Faça login para conversar com o vendedor.');
      router.push(`/entrar?returnUrl=/veiculo/${listing.id}`);
      return;
    }
    setChatOpen(true);
  };

  const scoreColor = (score: number) =>
    score >= 90 ? 'text-emerald-600' : score >= 75 ? 'text-amber-600' : 'text-red-600';

  const scoreBg = (score: number) =>
    score >= 90
      ? 'bg-emerald-50 border-emerald-200'
      : score >= 75
        ? 'bg-amber-50 border-amber-200'
        : 'bg-red-50 border-red-200';

  const scoreBarColor = (score: number) =>
    score >= 90 ? 'bg-emerald-500' : score >= 75 ? 'bg-amber-500' : 'bg-red-500';

  return (
    <div className="min-h-screen bg-white">

      {/* ── HEADER NAV ─────────────────────────────────────────── */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          navSolid
            ? 'border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md'
            : 'bg-gradient-to-b from-black/50 to-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
          {/* Voltar */}
          <button
            onClick={() => router.back()}
            className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition ${
              navSolid
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/20'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Voltar</span>
          </button>

          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-1.5 font-extrabold tracking-tight transition ${
              navSolid ? 'text-brand-gold' : 'text-white'
            }`}
          >
            <img src="/icons/logo.svg" alt="Conneqt" className="h-5 w-5" />
            <span>Conneqt</span>
          </Link>

          {/* Links desktop */}
          <nav className="ml-auto hidden items-center gap-1 sm:flex">
            {[
              { label: 'Buscar', href: '/buscar' },
              { label: 'Vender', href: '/vender' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  navSolid
                    ? 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    : 'text-white/90 hover:bg-white/20 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/entrar"
              className={`ml-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                navSolid
                  ? 'bg-brand-gold text-white hover:bg-brand-gold-dark'
                  : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              Entrar
            </Link>
          </nav>

          {/* Mobile: salvar */}
          <div className="ml-auto flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setSaved((s) => !s)}
              className={`rounded-full p-2 transition ${navSolid ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}
            >
              <Heart
                className={`h-5 w-5 ${saved ? 'fill-red-500 text-red-500' : navSolid ? 'text-gray-600' : 'text-white'}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO GALLERY ────────────────────────────────────────── */}
      <div className="relative h-[68vh] min-h-[420px] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[activePhoto]}
          alt={listingTitle}
          className="h-full w-full object-cover transition-all duration-500"
        />

        {/* Gradientes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/40" />

        {/* Navegação setas */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActivePhoto((p) => (p - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActivePhoto((p) => (p + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Indicadores de posição */}
        <div className="absolute bottom-32 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActivePhoto(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activePhoto ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Botões salvar / compartilhar (desktop) */}
        <div className="absolute right-6 top-20 hidden flex-col gap-2 sm:flex">
          <button
            onClick={() => setSaved((s) => !s)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm transition ${
              saved
                ? 'bg-red-500/80 text-white hover:bg-red-600/80'
                : 'bg-black/30 text-white hover:bg-black/50'
            }`}
          >
            <Heart className={`h-4 w-4 ${saved ? 'fill-white' : ''}`} />
            {saved ? 'Salvo' : 'Salvar'}
          </button>
          <button
            onClick={() => {
              navigator.clipboard?.writeText(window.location.href);
              toast.success('Link copiado!');
            }}
            className="flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-black/50"
          >
            <Share2 className="h-4 w-4" />
            Compartilhar
          </button>
        </div>

        {/* Info overlay (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 sm:px-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              {inspection && (
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Veículo Verificado — Score {inspection.score as number}/100
                </div>
              )}
              <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-4xl">
                {listingTitle}
              </h1>
              <p className="mt-1 text-sm text-white/75">
                {vehicle?.color as string} &bull; {vehicle?.fuelType as string} &bull; {vehicle?.transmission as string}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-3xl font-extrabold text-white drop-shadow">
                R$&nbsp;{(listing.price as number).toLocaleString('pt-BR')}
              </p>
              {listing.acceptsFinancing && (
                <p className="text-xs font-medium text-emerald-300">✓ Aceita financiamento</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── THUMBNAILS ──────────────────────────────────────────── */}
      <div className="flex items-center gap-2 overflow-x-auto bg-gray-950 px-4 py-3 sm:px-8">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActivePhoto(i)}
            className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
              i === activePhoto
                ? 'border-blue-400 opacity-100 ring-1 ring-blue-400'
                : 'border-transparent opacity-50 hover:opacity-80'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
        <span className="ml-2 flex-shrink-0 text-xs text-gray-500">
          {activePhoto + 1} / {images.length}
        </span>
      </div>

      {/* ── CONTEÚDO PRINCIPAL ──────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* ── COLUNA ESQUERDA ── */}
          <div className="space-y-8 lg:col-span-2">

            {/* Especificações */}
            <div>
              <h2 className="mb-4 text-lg font-bold text-gray-900">Especificações</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  {
                    icon: <Gauge className="h-5 w-5 text-brand-gold" />,
                    label: 'Quilometragem',
                    value: `${((vehicle?.mileage as number) ?? 0).toLocaleString('pt-BR')} km`,
                  },
                  {
                    icon: <Calendar className="h-5 w-5 text-brand-gold" />,
                    label: 'Ano',
                    value: String(vehicle?.year),
                  },
                  {
                    icon: <Fuel className="h-5 w-5 text-brand-gold" />,
                    label: 'Combustível',
                    value: vehicle?.fuelType as string,
                  },
                  {
                    icon: <Settings2 className="h-5 w-5 text-brand-gold" />,
                    label: 'Câmbio',
                    value: vehicle?.transmission as string,
                  },
                ].map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-2 rounded-2xl border border-gray-100 bg-gray-50 p-4"
                  >
                    {icon}
                    <p className="text-xs text-gray-400">{label}</p>
                    <p className="text-sm font-bold text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cor */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <p className="text-xs text-gray-400">Cor</p>
              <p className="mt-1 font-bold text-gray-900">{vehicle?.color as string}</p>
            </div>

            {/* Descrição */}
            {listing.description && (
              <div>
                <h2 className="mb-3 text-lg font-bold text-gray-900">Descrição</h2>
                <p className="leading-relaxed text-gray-600">{listing.description as string}</p>
              </div>
            )}

            {/* Laudo Digital */}
            {inspection && (
              <div className={`rounded-2xl border p-6 ${scoreBg(inspection.score as number)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white p-2.5 shadow-sm">
                      <Shield className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900">Laudo Conneqt Digital</h2>
                      <p className="text-xs text-gray-500">
                        Inspeção em{' '}
                        {new Date(inspection.createdAt as string).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`text-3xl font-extrabold ${scoreColor(inspection.score as number)}`}>
                      {inspection.score as number}
                    </span>
                    <span className="text-xs text-gray-400">/ 100</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-3 h-2 overflow-hidden rounded-full bg-white/60">
                    <div
                      className={`h-2 rounded-full transition-all duration-700 ${scoreBarColor(inspection.score as number)}`}
                      style={{ width: `${inspection.score as number}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    Este veículo passou pela inspeção Conneqt e recebeu um laudo digital
                    verificável. Todas as fotos e vídeos são autênticos com hash
                    anti-adulteração.
                  </p>
                  {(inspection.aiFlags as string[])?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(inspection.aiFlags as string[]).map((flag) => (
                        <span
                          key={flag}
                          className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700"
                        >
                          ⚠ {flag.replace(/_/g, ' ')}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Card de preço */}
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
                  <p className="text-3xl font-extrabold text-white">
                    R$&nbsp;{(listing.price as number).toLocaleString('pt-BR')}
                  </p>
                  {listing.acceptsFinancing && (
                    <p className="mt-1 text-sm text-blue-100">✓ Aceita financiamento</p>
                  )}
                </div>

                <div className="space-y-3 p-5">
                  {/* Vendedor */}
                  <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-base font-extrabold text-white shadow-sm">
                      {(seller?.name as string)?.[0]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-gray-900">{seller?.name as string}</p>
                      {seller?.kycStatus === 'APPROVED' ? (
                        <p className="text-xs text-emerald-600">✓ Identidade verificada</p>
                      ) : (
                        <p className="text-xs text-gray-400">Vendedor particular</p>
                      )}
                    </div>
                    <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-300" />
                  </div>

                  {/* CTAs */}
                  <button
                    onClick={handleChatClick}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-gold-dark active:scale-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Conversar com Vendedor
                  </button>

                  <button
                    onClick={() => toast.success('Funcionalidade disponível após login.')}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-200 py-3.5 text-sm font-bold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                  >
                    <Phone className="h-4 w-4" />
                    Ver Telefone
                  </button>
                </div>
              </div>

              {/* Selos de segurança */}
              <div className="space-y-3 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                  Segurança Conneqt
                </p>
                {[
                  { icon: <Shield className="h-4 w-4 text-emerald-500" />, text: 'Chat direto com o vendedor' },
                  { icon: <CheckCircle className="h-4 w-4 text-emerald-500" />, text: 'Inspeção veicular obrigatória' },
                  { icon: <Star className="h-4 w-4 text-emerald-500" />, text: 'Documentação verificada' },
                  { icon: <Info className="h-4 w-4 text-emerald-500" />, text: 'Suporte em todo o processo' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    {icon}
                    <span className="text-sm text-gray-600">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {chatOpen && (
        <ChatWindow
          listingId={listing.id as string}
          listingTitle={listingTitle}
          sellerName={seller?.name as string}
          onClose={() => setChatOpen(false)}
        />
      )}

    </div>
  );
}

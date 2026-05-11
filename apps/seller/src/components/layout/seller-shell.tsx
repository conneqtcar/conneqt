'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Car,
  MessageSquare,
  User,
  Menu,
  X,
  Plus,
  ChevronRight,
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';

const NAV = [
  { label: 'Dashboard',     href: '/',             icon: LayoutDashboard, exact: true },
  { label: 'Meus Veículos', href: '/meus-veiculos', icon: Car,             exact: false },
  { label: 'Mensagens',     href: '/propostas',     icon: MessageSquare,   exact: false },
  { label: 'Perfil',        href: '/perfil',        icon: User,            exact: false },
] as const;

interface SellerProfile { name: string; avatar: string }

function NavLink({
  item,
  active,
  badge,
  onClick,
}: {
  item: (typeof NAV)[number];
  active: boolean;
  badge?: number;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
        active
          ? 'bg-white/25 text-white shadow-sm'
          : 'text-white/70 hover:bg-white/15 hover:text-white'
      }`}
    >
      <item.icon className={`h-4 w-4 flex-shrink-0 ${active ? 'text-white' : 'text-white/60'}`} />
      <span className="flex-1">{item.label}</span>
      {badge !== undefined && badge > 0 && (
        <span
          className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
            active ? 'bg-white/20 text-white' : 'bg-white/20 text-white'
          }`}
        >
          {badge}
        </span>
      )}
    </Link>
  );
}

function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  const { data: profile } = useQuery<SellerProfile>({
    queryKey: ['seller-profile'],
    queryFn: async () => { const { data } = await api.get('/seller/profile'); return data; },
  });

  function isActive(item: (typeof NAV)[number]) {
    return item.exact ? pathname === item.href : pathname.startsWith(item.href);
  }

  return (
    <div className="flex h-full flex-col bg-brand-gold">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5">
        <img src="/icons/logonome.png" alt="Conneqt" className="h-8 w-auto" />
        <span className="ml-auto rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold text-white">
          vendedor
        </span>
        {onClose && (
          <button onClick={onClose} className="ml-1 rounded-lg p-1 text-white/60 hover:bg-white/15">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-0.5 px-3 py-1">
        {NAV.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            active={isActive(item)}
            badge={undefined}
            onClick={onClose}
          />
        ))}
      </nav>

      {/* CTA */}
      <div className="px-3 pb-3">
        <Link
          href="/cadastrar"
          onClick={onClose}
          className="flex items-center justify-center gap-2 rounded-xl bg-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/30"
        >
          <Plus className="h-4 w-4" />
          Novo veículo
        </Link>
      </div>

      {/* Profile mini */}
      {profile && (
        <div className="border-t border-white/20 px-3 py-3">
          <Link
            href="/perfil"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/15"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.avatar} alt={profile.name} className="h-9 w-9 rounded-full object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">{profile.name}</p>
              <p className="text-xs text-white/60">Ver perfil</p>
            </div>
            <ChevronRight className="h-4 w-4 text-white/40" />
          </Link>
        </div>
      )}
    </div>
  );
}

export function SellerShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const { data: profile } = useQuery<SellerProfile>({
    queryKey: ['seller-profile'],
    queryFn: async () => { const { data } = await api.get('/seller/profile'); return data; },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 lg:block">
        <Sidebar />
      </aside>

      {/* Mobile header */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-gray-100 bg-white px-4 lg:hidden">
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          <img src="/icons/logonome.png" alt="Conneqt" className="h-7 w-auto" />
        </div>
        {profile ? (
          <Link href="/perfil">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
          </Link>
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-100" />
        )}
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 shadow-2xl">
            <Sidebar onClose={() => setOpen(false)} />
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="pt-14 lg:ml-64 lg:pt-0">
        {children}
      </main>
    </div>
  );
}

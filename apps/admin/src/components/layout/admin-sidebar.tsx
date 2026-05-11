'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  ClipboardCheck,
  Car,
  Users,
  Building2,
  Settings,
  LogOut,
} from 'lucide-react';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Inspeções', href: '/inspecoes', icon: ClipboardCheck },
  { name: 'Anúncios', href: '/anuncios', icon: Car },
  { name: 'Usuários', href: '/usuarios', icon: Users },
  { name: 'Lojistas', href: '/lojistas', icon: Building2 },
  { name: 'Configurações', href: '/configuracoes', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('admin_access_token');
    localStorage.removeItem('admin_refresh_token');
    router.replace('/login');
  };

  return (
    <aside className="flex w-64 flex-col bg-brand-gold">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/20">
        <div className="flex items-center gap-2.5">
          <img src="/icons/logonome.png" alt="Conneqt" className="h-8 w-auto" />
          <span className="ml-1.5 rounded-md bg-white/25 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
            Admin
          </span>
        </div>
      </div>

      {/* Section label */}
      <div className="px-5 pt-5 pb-2">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/60">Menu</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-0.5 px-3">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition',
                isActive
                  ? 'bg-white/25 text-white shadow-sm'
                  : 'text-white/70 hover:bg-white/15 hover:text-white',
              )}
            >
              <item.icon className={clsx('h-4 w-4 flex-shrink-0', isActive ? 'text-white' : 'text-white/60')} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User + Logout */}
      <div className="border-t border-white/20 p-4">
        <div className="mb-3 flex items-center gap-3 rounded-xl bg-white/15 px-3 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30 text-xs font-bold text-white shadow-sm">
            A
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-white">Administrador</p>
            <p className="text-[10px] text-white/60">admin@conneqt.com</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/15 hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Sair
        </button>
      </div>
    </aside>
  );
}


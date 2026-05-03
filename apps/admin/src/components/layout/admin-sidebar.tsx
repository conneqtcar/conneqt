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
    <aside className="flex w-64 flex-col bg-white border-r border-gray-100">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-dark shadow-sm">
            <img src="/icons/logo.svg" alt="Conneqt" className="h-6 w-6" />
          </div>
          <div>
            <span className="font-extrabold tracking-tight text-gray-900">Conneqt</span>
            <span className="ml-1.5 rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-brand-gold uppercase tracking-wide">
              Admin
            </span>
          </div>
        </div>
      </div>

      {/* Section label */}
      <div className="px-5 pt-5 pb-2">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Menu</p>
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
                  ? 'bg-brand-gold text-white shadow-sm'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800',
              )}
            >
              <item.icon className={clsx('h-4 w-4 flex-shrink-0', isActive ? 'text-white' : 'text-gray-400')} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User + Logout */}
      <div className="border-t border-gray-100 p-4">
        <div className="mb-3 flex items-center gap-3 rounded-xl bg-gray-50 px-3 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-xs font-bold text-white shadow-sm">
            A
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-gray-800">Administrador</p>
            <p className="text-[10px] text-gray-400">admin@conneqt.com</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-gray-500 transition hover:bg-red-50 hover:text-red-600"
        >
          <LogOut className="h-4 w-4" />
          Sair
        </button>
      </div>
    </aside>
  );
}


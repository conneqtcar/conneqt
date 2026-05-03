'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Car, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const SELLER_URL = process.env.NEXT_PUBLIC_SELLER_URL ?? 'http://localhost:5001';

const internalItems = [
  { href: '/', label: 'Início', icon: Home, exact: true },
  { href: '/buscar', label: 'Buscar', icon: Search, exact: false },
  { href: '/entrar', label: 'Conta', icon: User, exact: false },
];

const sellerItems = [
  { href: SELLER_URL, label: 'Vender', icon: Car },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-sm md:hidden safe-bottom">
      <ul className="flex h-16 items-stretch">
        {internalItems.slice(0, 2).map(({ href, label, icon: Icon, exact }) => {
          const isActive = exact ? pathname === href : pathname.startsWith(href) && href !== '/';
          return (
            <li key={href} className="flex flex-1">
              <Link
                href={href}
                className={cn(
                  'flex flex-1 flex-col items-center justify-center gap-1 text-xs font-medium transition-colors',
                  isActive ? 'text-brand-gold' : 'text-gray-500 hover:text-gray-900 active:text-brand-gold',
                )}
              >
                <Icon className={cn('h-5 w-5', isActive && 'text-brand-gold')} strokeWidth={isActive ? 2.5 : 1.75} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}

        {sellerItems.map(({ href, label, icon: Icon }) => (
          <li key={href} className="flex flex-1">
            <a
              href={href}
              className="flex flex-1 flex-col items-center justify-center gap-1 text-xs font-medium text-gray-500 transition-colors hover:text-gray-900 active:text-brand-gold"
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
              <span>{label}</span>
            </a>
          </li>
        ))}

        {internalItems.slice(2).map(({ href, label, icon: Icon, exact }) => {
          const isActive = exact ? pathname === href : pathname.startsWith(href) && href !== '/';
          return (
            <li key={href} className="flex flex-1">
              <Link
                href={href}
                className={cn(
                  'flex flex-1 flex-col items-center justify-center gap-1 text-xs font-medium transition-colors',
                  isActive ? 'text-brand-gold' : 'text-gray-500 hover:text-gray-900 active:text-brand-gold',
                )}
              >
                <Icon className={cn('h-5 w-5', isActive && 'text-brand-gold')} strokeWidth={isActive ? 2.5 : 1.75} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

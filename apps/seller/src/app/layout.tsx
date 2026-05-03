import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SellerProviders } from './providers';
import { SellerShell } from '@/components/layout/seller-shell';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#0D0D1A',
};

export const metadata: Metadata = {
  title: {
    default: 'Conneqt — Painel do Vendedor',
    template: '%s | Conneqt Vendedor',
  },
  icons: {
    icon: '/icons/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50`}>
        <SellerProviders>
          <SellerShell>{children}</SellerShell>
        </SellerProviders>
      </body>
    </html>
  );
}

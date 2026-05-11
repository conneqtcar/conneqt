import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { PwaRegister } from '@/components/pwa/pwa-register';
import { BottomNav } from '@/components/mobile/bottom-nav';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0D0D1A',
};

export const metadata: Metadata = {
  title: {
    default: 'Conneqt — Compra e Venda de Veículos com Segurança',
    template: '%s | Conneqt',
  },
  description:
    'Plataforma de intermediação veicular com inspeção obrigatória, laudo digital e negociação segura.',
  keywords: ['comprar carro', 'vender carro', 'carros seminovos', 'verificados', 'laudo digital'],
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Conneqt',
    startupImage: '/icons/icon-512.svg',
  },
  icons: {
    icon: [
      { url: '/icons/logo.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/icons/logo.svg', type: 'image/svg+xml' }],
    shortcut: '/icons/logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://conneqtcar.com.br',
    siteName: 'Conneqt',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <BottomNav />
          <PwaRegister />
        </Providers>
      </body>
    </html>
  );
}

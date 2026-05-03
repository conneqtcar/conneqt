import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { AdminProviders } from './providers';
import { AdminSidebar } from '@/components/layout/admin-sidebar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#0D0D1A',
};

export const metadata: Metadata = {
  title: {
    default: 'Conneqt Admin',
    template: '%s | Conneqt Admin',
  },
  icons: {
    icon: '/icons/favicon.svg',
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50`}>
        <AdminProviders>
          <div className="flex min-h-screen">
            <AdminSidebar />
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </AdminProviders>
      </body>
    </html>
  );
}

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { AdminAuthGuard } from '@/components/auth/admin-auth-guard';

export function AdminProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: { queries: { staleTime: 30 * 1000 } } }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AdminAuthGuard>
        {children}
        <Toaster position="top-right" />
      </AdminAuthGuard>
    </QueryClientProvider>
  );
}

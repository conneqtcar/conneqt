'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const IS_DEMO = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export function AdminAuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (IS_DEMO) return;
    if (pathname === '/login') return;

    const token = localStorage.getItem('admin_access_token');
    if (!token) {
      router.replace('/login');
    }
  }, [pathname, router]);

  return <>{children}</>;
}

'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const IS_DEMO = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export function AdminAuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(IS_DEMO);

  useEffect(() => {
    if (IS_DEMO) {
      setAuthorized(true);
      return;
    }
    if (pathname === '/login') {
      setAuthorized(true);
      return;
    }
    const token = localStorage.getItem('admin_access_token');
    if (!token) {
      router.replace('/login');
    } else {
      setAuthorized(true);
    }
  }, [pathname, router]);

  if (!authorized) return null;

  return <>{children}</>;
}

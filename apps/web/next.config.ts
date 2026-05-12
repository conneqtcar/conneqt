import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.amazonaws.com' },
      { protocol: 'https', hostname: '**.cloudfront.net' },
      { protocol: 'https', hostname: '*.supabase.co' },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ?? 'https://conneqt-api.onrender.com/api/v1',
    NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL ?? 'https://conneqt-api.onrender.com',
    NEXT_PUBLIC_SELLER_URL: process.env.NEXT_PUBLIC_SELLER_URL ?? 'https://vendedor.conneqtcar.com',
    NEXT_PUBLIC_DEMO_MODE: process.env.NEXT_PUBLIC_DEMO_MODE ?? 'false',
  },
};

export default nextConfig;

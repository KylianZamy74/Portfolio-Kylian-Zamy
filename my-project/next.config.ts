import type { NextConfig } from 'next';
import i18n from './next-i18next.config';

const nextConfig: NextConfig = {
  i18n,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/:path*', // Applique les headers à toutes les routes API
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://kylian-zamy.dev', // Remplace par ton domaine ou utilise '*' si tu veux autoriser tous les domaines
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel.app', 
      },
    ],
  },
  
};

export default nextConfig;

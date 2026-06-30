/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/privacy', destination: '/legal/privacy', permanent: true },
      { source: '/terms', destination: '/legal/terms', permanent: true },
      { source: '/gdpr', destination: '/legal/dpa', permanent: true },
      { source: '/cookies', destination: '/legal/cookies', permanent: true },
      { source: '/dpa', destination: '/legal/dpa', permanent: true },
      { source: '/nda', destination: '/legal/nda', permanent: true },
    ];
  },
};

export default nextConfig;

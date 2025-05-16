/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    domains: ['placehold.co'],
  },
  experimental: {
    typedRoutes: true,
  },
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'out',
  trailingSlash: true
}

export default nextConfig 
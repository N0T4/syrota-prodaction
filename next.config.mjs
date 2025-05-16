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
  distDir: '.next',
  trailingSlash: true,
  // Generate static paths for dynamic routes
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
      '/contact': { page: '/contact' },
      '/experience': { page: '/experience' },
      '/portfolio': { page: '/portfolio' }
    }
  }
}

export default nextConfig 
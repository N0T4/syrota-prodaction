/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
  // Disable server-side features for static export
  experimental: {
    serverActions: false,
  },
  // Enable trailing slashes for static hosting
  trailingSlash: true,
}

export default nextConfig 
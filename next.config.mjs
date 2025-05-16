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
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '/',
  compiler: {
    removeConsole: false,
  },
  transpilePackages: ['@netlify/plugin-nextjs'],
  distDir: '.next',
  generateBuildId: async () => {
    return 'build'
  },
  basePath: '',
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  }
}

export default nextConfig 
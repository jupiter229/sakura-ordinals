/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['magiceden.io', 'ordinals.com'],
    unoptimized: true
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

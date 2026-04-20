/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  // Allow standard <img> tags without next/image warnings
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Increase static generation timeout for complex pages
  staticPageGenerationTimeout: 120,
=======
  images: {
    unoptimized: true,
    domains: [],
  },
  staticPageGenerationTimeout: 180,
  // Temporarily ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Temporarily ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
>>>>>>> 353ffb6cd60e9815d1ae8bb0c96842765406efd2
}

module.exports = nextConfig

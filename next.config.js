/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow standard <img> tags without next/image warnings
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Increase static generation timeout for complex pages
  staticPageGenerationTimeout: 120,
}

module.exports = nextConfig

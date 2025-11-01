/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: false,
  },
  // Ensure compatibility with your existing assets
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
}

module.exports = nextConfig

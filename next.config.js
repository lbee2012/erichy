// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    unoptimized: true
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all';
    }
    return config;
  }
}

module.exports = nextConfig
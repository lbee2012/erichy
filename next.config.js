// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false // Using pages directory
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
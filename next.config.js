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
  },
  
  // Enhanced Turbopack configuration for maximum performance
  turbopack: {
    // Optimize for faster rebuilds
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Additional Next.js optimizations
  experimental: {
    // Faster static analysis
    optimizePackageImports: ['react-draggable', 'react-markdown', 'remark-gfm'],
    
    // Memory optimizations
    webVitalsAttribution: ['CLS', 'LCP', 'FCP'],
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
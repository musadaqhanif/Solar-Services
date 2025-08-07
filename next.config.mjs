/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize video loading
  async headers() {
    return [
      {
        source: '/(.*).mp4',
        headers: [
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Optimize images and static assets
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable compression
  compress: true,
  
  // Optimize bundle size
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;

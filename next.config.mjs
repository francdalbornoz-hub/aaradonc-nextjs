/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Hostinger shared hosting (Apache, no persistent Node.js)
  output: 'export',

  // Required for static export: disable Next.js image optimization server.
  // All images are served from external CDN (Unsplash, aaradonc.com) or
  // as-is from /public. The browser loads them directly.
  images: {
    unoptimized: true,
  },

  // Trailing slash: Hostinger expects /about/index.html not /about.html
  trailingSlash: true,
};

export default nextConfig;

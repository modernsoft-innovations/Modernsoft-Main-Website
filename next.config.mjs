/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.blob.vercel-storage.com",
      },
    ],
    unoptimized: true,
  },
  compress: false, // Disable compression to reduce memory usage
  poweredByHeader: false,
  reactStrictMode: true,
  // Reduce memory usage during build and runtime
  experimental: {
    // Reduce memory footprint
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    // Disable memory-intensive features
    serverActions: {
      bodySizeLimit: '1mb',
    },
  },
  // Don't use standalone for cPanel - it changes the build structure
  // output: 'standalone', // Commented out for cPanel compatibility
  // Reduce memory usage in production
  productionBrowserSourceMaps: false,
}

export default nextConfig

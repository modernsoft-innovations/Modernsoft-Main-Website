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

  compress: false,
  poweredByHeader: false,
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
    serverActions: {
      bodySizeLimit: "1mb",
    },
  },

  productionBrowserSourceMaps: false,

  // ✅ ADD THIS PART (IMPORTANT FOR LINKEDIN + SEO)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "modernsoftinnovations.com",
          },
        ],
        destination: "https://www.modernsoftinnovations.com/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig

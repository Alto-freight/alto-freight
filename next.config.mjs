/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: "/services", destination: "/" },
      { source: "/coverage", destination: "/" },
      { source: "/why-alto", destination: "/" },
      { source: "/contact", destination: "/" },
    ]
  },
}

export default nextConfig

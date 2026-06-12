import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ['fhome'],
  basePath: '/curriculum_next',
  assetPrefix: '/curriculum_next',
}

export default nextConfig

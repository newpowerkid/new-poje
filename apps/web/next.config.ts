import type { NextConfig } from 'next'

import '~/lib/env'

const nextConfig: NextConfig = {
  transpilePackages: ['@repo/api', '@repo/auth', '@repo/db'],

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  poweredByHeader: false,

  devIndicators: {
    position: 'bottom-left',
  },
}

export default nextConfig

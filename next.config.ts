import type { NextConfig } from 'next'

const ghPages = process.env.DEPLOY_TARGET === 'gh-pages'

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === 'development' ? undefined : 'export',
  agentRules: false,
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  basePath: ghPages ? '/buaiscia.github.io/' : '',
  assetPrefix: ghPages ? '/buaiscia.github.io/' : '',
  images: {
    loader: 'akamai',
    path: '/',
    unoptimized: true,
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
}

export default nextConfig

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const ghPages = process.env.DEPLOY_TARGET === 'gh-pages'

module.exports = withBundleAnalyzer({
  assetPrefix: ghPages ? '/buaiscia.github.io/' : '',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  experimental: {
    modern: true,
  },
  exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/tags': { page: '/tags' },
      '/about': { page: '/about' },
      // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    return config
  },
})

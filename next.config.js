const ghPages = process.env.DEPLOY_TARGET === 'gh-pages'

module.exports = {
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/buaiscia/image/upload/v1614031509/techblog/',
  },
  assetPrefix: ghPages ? '/buaiscia.github.io/' : '',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  experimental: {
    modern: true,
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/tags': { page: '/tags' },
      '/about': { page: '/about' },
    }
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/.next',
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
}

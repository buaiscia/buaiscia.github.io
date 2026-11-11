const ghPages = process.env.DEPLOY_TARGET === 'gh-pages'

module.exports = {
  output: process.env.NODE_ENV === 'development' ? undefined : 'export',
  agentRules: false,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
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

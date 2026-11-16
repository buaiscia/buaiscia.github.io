type SiteMetadata = {
  title: string
  author: string
  headerTitle: string
  description: string
  language: string
  theme: string
  siteUrl: string
  siteRepo: string
  siteLogo: string
  image: string
  socialBanner: string
  email?: string
  github: string
  twitter: string
  facebook?: string
  youtube?: string
  linkedin: string
  locale: string
  analytics: {
    plausibleDataDomain?: string
    simpleAnalytics: boolean
    umamiWebsiteId?: string
    googleAnalyticsId?: string
    posthogAnalyticsId?: string
  }
  newsletter: { provider?: string }
  comment: {
    provider?: string
    giscusConfig?: Record<string, string>
    utterancesConfig?: Record<string, string>
    disqusConfig?: { shortname?: string }
  }
}

const siteMetadata: SiteMetadata = {
  title: 'Alex Buaiscia',
  author: 'Alex Buaiscia',
  headerTitle: 'Alex Buaiscia',
  description:
    'Software engineering, interdisciplinary projects, and writing about technology, knowledge, and learning.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://buaiscia.github.io',
  siteRepo: 'https://github.com/buaiscia/buaiscia.github.io',
  // siteLogo: '/static/images/logo.png',
  siteLogo: '',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  // email: 'address@yoursite.com',
  github: 'https://github.com/buaiscia',
  twitter: 'https://twitter.com/AlexBuaiscia',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/alex-buaiscia/',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    // plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    // umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, // e.g. UA-000000-2 or G-XXXXXXX
    // posthogAnalyticsId: '', // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    // provider: 'buttondown',
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    // provider: 'giscus', // supported providers: giscus, utterances, disqus
    // giscusConfig: {
    //   // Visit the link below, and follow the steps in the 'configuration' section
    //   // https://giscus.app/
    //   repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
    //   repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
    //   category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    //   categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    //   mapping: 'pathname', // supported options: pathname, url, title
    //   reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
    //   // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
    //   metadata: '0',
    //   // theme example: light, dark, dark_dimmed, dark_high_contrast
    //   // transparent_dark, preferred_color_scheme, custom
    //   theme: 'light',
    //   // Place the comment box above the comments. options: bottom, top
    //   inputPosition: 'bottom',
    //   // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
    //   lang: 'en',
    //   // theme when dark mode
    //   darkTheme: 'transparent_dark',
    //   // If the theme option above is set to 'custom`
    //   // please provide a link below to your custom theme css file.
    //   // example: https://giscus.app/themes/custom_example.css
    //   themeURL: '',
    // },
    // utterancesConfig: {
    //   // Visit the link below, and follow the steps in the 'configuration' section
    //   // https://utteranc.es/
    //   repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
    //   issueTerm: '', // supported options: pathname, url, title
    //   label: '', // label (optional): Comment 💬
    //   // theme example: github-light, github-dark, preferred-color-scheme
    //   // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
    //   theme: '',
    //   // theme when dark mode
    //   darkTheme: '',
    // },
    // disqusConfig: {
    //   // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
    //   shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    // },
  },
}

export default siteMetadata

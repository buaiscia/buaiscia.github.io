const highlightsData = [
  {
    date: 'Jun 16, 2023',
    cardTitle: 'Remix',
    url: 'https://docs.google.com/presentation/d/1F3RQpIEzVz7S0EgPd2m8JzQ7LPE5jZG0/edit?usp=sharing&ouid=100556322225803667765&rtpof=true&sd=true',
    cardSubtitle: 'Presentation and live coding in Moravio',
    cardDetailedText:
      'For Moravio, I gave a presentation and did live coding a small project to show the most interesting features of Remix. Repository link in the presentation file.',
  },
  {
    date: 'May 19, 2023',
    cardTitle: "Testing Boundaries: From Code to Cosmos, Self-Discovery, and History's Forge",
    url: 'https://polymathicwebdeveloperdigest.substack.com/p/testing-boundaries-from-code-to-cosmos',
    media: {
      name: 'polymathic newsletter image',
      source: {
        url: 'https://substackcdn.com/image/fetch/f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fpolymathicwebdeveloperdigest.substack.com%2Fapi%2Fv1%2Fpress_kit%2F122489256.jpg%3FbgImage%3Dtrue%26textColor%3D%2523ffffff%26hash%3D1334417104%26version%3D9',
      },
      type: 'IMAGE',
    },
    cardSubtitle: '2nd issue of the polymathic newsletter',
    cardDetailedText:
      'Unveiling the Essence of Testing: Exploring Connections, Empowering Evolution',
  },
  {
    date: 'Apr 27, 2023',
    cardTitle: 'New polymathic newsletter',
    url: 'https://polymathicwebdeveloperdigest.substack.com/p/we-start-with-coding-and-we-get-polymath',
    media: {
      name: 'polymathic newsletter image',
      source: {
        url: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffb3bafbb-f8c2-4740-92f3-a55ae4d0e4c8_640x480.jpeg',
      },
      type: 'IMAGE',
    },
    cardSubtitle: 'Published a new polymathic newsletter issue',
    cardDetailedText:
      'A new format of my newsletter was necessary for me, as I changed perspectives. We talk about being polymath, and many topics that touch different fields: poetry, history, development, space exploration, meditation. And the start of my new project, the Holistic History.',
  },
  {
    date: 'Apr 20, 2023',
    cardTitle: 'Guest at the Holistic Monitor podcast',
    url: 'https://www.youtube.com/watch?v=x11X0LAsqFo',
    media: {
      name: 'Holistic monitor podcast with Alex Buaiscia',
      source: {
        url: 'https://i.ytimg.com/vi/x11X0LAsqFo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfub4UaW9UmWNUa36aaEk8uqATAA',
      },
      type: 'IMAGE',
    },
    cardSubtitle: 'I was guest of the Holistic Monitor podcast by Nic Scogna',
    cardDetailedText:
      "I was guest of the Holistic Monitor podcast by Nic Scogna. The topic is meditation and the awakening of Kundalini energy. I'm sharing my personal experiences and describing meditation techniques that focus on various energy centers within the body. I'm touching on the benefits of Sahaja Yoga, the form of meditation that awakens inner energy and connects us to the divine energy around us.",
  },
  {
    date: 'Apr 17, 2023',
    cardTitle: 'Guest at the Mycelium Network podcast',
    url: 'https://www.youtube.com/watch?v=x11X0LAsqFo',
    media: {
      name: 'Mycelium Network podcast with Alex Buaiscia',
      source: {
        url: 'https://polywork-production.imgix.net/5i5uwcwckjf39exjj8vrd74se5qv?ixlib=rails-4.3.1&w=600&auto=format',
      },
      type: 'IMAGE',
    },
    cardSubtitle: 'Published a new polymathic newsletter issue',
    cardDetailedText:
      "I was guest of the Holistic Monitor podcast by Nic Scogna. The topic is meditation and the awakening of Kundalini energy. I'm sharing my personal experiences and describing meditation techniques that focus on various energy centers within the body. I'm touching on the benefits of Sahaja Yoga, the form of meditation that awakens inner energy and connects us to the divine energy around us.",
  },
  {
    date: 'Feb 24, 2023',
    cardTitle: 'React 18: new features in real working projects',
    url: 'https://www.moravio.com/blog/react-18-new-features-in-real-working-projects-the-good-and-the-issues',
    media: {
      name: 'Moravio post image',
      source: {
        url: 'https://polywork-production.imgix.net/5h7560ci57bcn8zgh0u9tby9ewr8?ixlib=rails-4.3.1&w=600&auto=format',
      },
      type: 'IMAGE',
    },
    cardSubtitle: 'Published a new post on Moravio blog about React 18',
    cardDetailedText:
      'In this article, I discuss the real-world production use of React 18 and how it impacts projects using the "good” and old Create React App(CRA).We will talk about the features coming with the upgrade, and some needed fixes.',
  },
  {
    date: 'Jan 01, 2023',
    cardTitle: 'My retro on 2022',
    url: 'https://polymathicwebdeveloperdigest.substack.com/p/my-retro-on-2022-and-happy-new-year',
    media: {
      name: 'polymathic newsletter image',
      source: {
        url: 'https://substackcdn.com/image/fetch/f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fpolymathicwebdeveloperdigest.substack.com%2Fapi%2Fv1%2Fpress_kit%2F94085267.jpg%3FbgColor%3D%2523195f74%26textColor%3Dhsl(193.84615384615392%252C%252016.13475177304949%2525%252C%252092.76470588235296%2525)%26aspectRatio%3Dsquare%26hash%3D-30897230%26version%3D9',
      },
      type: 'IMAGE',
    },
    cardSubtitle: 'Published a new newsletter issue',
    cardDetailedText:
      'Tracking Career Progress: Reflecting on the Journey from Junior to Senior Developer in 2022',
  },
  {
    date: 'Dec 07, 2022',
    cardTitle: 'Rendering Revamped: A Look at the Differences Between React 17 and 18',
    url: 'https://polymathicwebdeveloperdigest.substack.com/p/rendering-revamped-a-look-at-the',
    media: {
      name: 'newsletter image',
      source: {
        url: 'https://substackcdn.com/image/fetch/f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fpolymathicwebdeveloperdigest.substack.com%2Fapi%2Fv1%2Fpress_kit%2F89033300.jpg%3FbgImage%3Dtrue%26textColor%3D%2523ffffff%26aspectRatio%3Dsquare%26hash%3D-546937227%26version%3D9',
      },
      type: 'IMAGE',
    },
    cardSubtitle: 'Published a new newsletter issue',
    cardDetailedText:
      'Rendering Revamped: A Look at the Differences Between React 17 and 18...and the Suspense Data Fetching Dilemma',
  },
  {
    date: 'Nov 23, 2022',
    cardTitle: 'React 18 great features and... some issues',
    url: 'https://polymathicwebdeveloperdigest.substack.com/p/react-18-great-features-and-some',
    media: {
      name: 'newsletter image',
      source: {
        url: 'https://substackcdn.com/image/fetch/f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fpolymathicwebdeveloperdigest.substack.com%2Fapi%2Fv1%2Fpress_kit%2F85103537.jpg%3FbgImage%3Dtrue%26textColor%3D%2523ffffff%26aspectRatio%3Dsquare%26hash%3D1815199695%26version%3D9',
      },
      type: 'IMAGE',
    },
    cardSubtitle: 'Published a new newsletter issue',
    cardDetailedText:
      "How the new major version of React went to the production build...and the workarounds to fix some problems. This week, it'll be about automatic batching!",
  },
  {
    date: 'Nov 14, 2022',
    cardTitle: 'Tech talk: what is new in React 18',
    url: 'https://www.youtube.com/watch?v=swtK6IVaKDY',
    media: {
      name: 'youtube image',
      source: {
        url: 'https://i.ytimg.com/vi/swtK6IVaKDY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgYihYMA8=&rs=AOn4CLA7NdxzLL1i5DMttKTML65BpzoiCQ',
      },
      type: 'IMAGE',
    },
    cardSubtitle: 'Talk given to Moravio about React 18 with live examples in code sandbox',
    cardDetailedText:
      'Everything new on React 18 and upgrade features and issues from React 17. A tech talk inside my company, Moravio.',
  },
  {
    date: 'Oct 17, 2022',
    cardTitle: 'Developer Experience (DX) at Moravio',
    url: 'https://www.moravio.com/blog/dev-experience',
    media: {
      name: 'youtube image',
      source: {
        url: 'https://www.moravio.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmoravio-web%2Fmedia%2Fcover_a37d4fbfce%2Fcover_a37d4fbfce.png&w=3840&q=75',
      },
      type: 'IMAGE',
    },
    cardSubtitle: 'Article written for Moravio',
    cardDetailedText: 'What is developer experience and why it is important?',
  },
  {
    date: 'Jul 28, 2022',
    cardTitle: 'Integration tests through unit testing',
    url: 'https://www.youtube.com/watch?v=Q8G2XW7JqPI',
    media: {
      name: 'youtube image',
      source: {
        url: 'https://polywork-production.imgix.net/e2zntxmnk8irttgtcyxwyyszc30z?ixlib=rails-4.3.1&w=600&auto=format',
      },
      type: 'IMAGE',
    },
    cardSubtitle: 'Talk given to Moravio about integration testing on React applications',
    cardDetailedText: 'How a full series of behavioral tests becomes integration testing',
  },
]

export default highlightsData

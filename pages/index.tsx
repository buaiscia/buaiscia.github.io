import Link from '@/components/Link'
import Card from '@/components/Card'
import LearningGardenArt from '@/components/LearningGardenArt'
import Tag from '@/components/Tag'
import { PageSEO } from '@/components/SEO'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts: posts.slice(0, 3) } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <section
        className="garden-hero border-b border-gray-200 pt-7 pb-10 dark:border-gray-700 sm:pt-10 sm:pb-12"
        aria-labelledby="home-intro"
      >
        <div>
          <p className="garden-eyebrow">Learning · design · curiosity</p>
          <h1
            id="home-intro"
            className="garden-heading mt-5 max-w-2xl text-5xl leading-[1.03] sm:text-6xl lg:text-[5.25rem]"
          >
            Helping ideas <em className="text-[#7d9d6f] dark:text-primary-300">take root.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-700 dark:text-gray-200 sm:text-xl">
            I explore how people learn and create thoughtful experiences that make complex ideas
            easier to discover. My path connects education, storytelling, and technology.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href="/projects" className="garden-button">
              Explore educational projects <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/blog" className="garden-link">
              Read my writing <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <LearningGardenArt />
      </section>

      <section
        className="border-b border-gray-200 py-11 dark:border-gray-700 sm:py-14"
        aria-labelledby="featured-projects"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="garden-eyebrow mb-3">Selected work</p>
            <h2 id="featured-projects" className="garden-heading text-3xl sm:text-4xl">
              Learning, in different forms
            </h2>
          </div>
          <Link href="/projects" className="garden-link text-sm">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card key={project.slug} {...project} />
          ))}
        </div>
      </section>

      <section
        className="border-b border-gray-200 py-12 dark:border-gray-700 sm:py-16"
        aria-labelledby="recent-writing"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="garden-eyebrow mb-3">Ideas in progress</p>
            <h2 id="recent-writing" className="garden-heading text-3xl sm:text-4xl">
              Recent writing
            </h2>
          </div>
          <Link href="/blog" className="garden-link text-sm">
            All writing <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {posts.map(({ slug, title, date, summary, tags = [] }) => (
            <article
              key={slug}
              className="rounded-[1.75rem] border border-gray-200 bg-[#fffdf6] p-6 dark:border-gray-700 dark:bg-gray-800 sm:p-7"
            >
              <time
                dateTime={date}
                className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300"
              >
                {formatDate(date)}
              </time>
              <h3 className="mt-4 font-serif text-2xl leading-tight text-primary-900 dark:text-gray-100">
                <Link href={`/blog/${slug}`}>{title}</Link>
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-700 dark:text-gray-200">
                {summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.slice(0, 2).map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="background">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#e4ebd8] px-7 py-9 dark:bg-[#304738] sm:px-11 sm:py-11">
          <span
            className="pointer-events-none absolute -right-8 -top-16 h-48 w-48 rounded-full bg-[#d2dfbf] dark:bg-[#3b5742]"
            aria-hidden="true"
          />
          <div className="relative max-w-3xl">
            <p className="garden-eyebrow mb-3">My background</p>
            <h2 id="background" className="garden-heading text-3xl sm:text-4xl">
              Education shapes how I build.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-200">
              My work began in language education and moved through application support into
              software development. Those experiences shape how I think about tools, communication,
              and learning.
            </p>
            <Link href="/about" className="garden-link mt-5 inline-block">
              More about me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

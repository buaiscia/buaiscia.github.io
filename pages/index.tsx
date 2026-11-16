import Link from '@/components/Link'
import Card from '@/components/Card'
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
      <div className="border-b border-gray-200 pt-10 pb-14 dark:border-gray-700 sm:pt-16 sm:pb-20">
        <p className="text-base text-gray-500 dark:text-gray-400">
          Software engineer, curious across disciplines
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
          Hi, I’m Alex.
        </h1>
        <p className="mt-5 max-w-2xl text-2xl leading-snug text-gray-800 dark:text-gray-200 sm:text-3xl">
          I build software and explore how we learn.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          I’m drawn to the connections between technology, history, science, and education. Here I
          share the projects I’m building, the questions I’m exploring, and what I learn along the
          way.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            href="/projects"
            className="inline-flex rounded-md bg-primary-600 px-5 py-3 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Explore my projects
          </Link>
          <Link
            href="/blog"
            className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            Read my writing →
          </Link>
          <Link
            href="/about"
            className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            More about me →
          </Link>
        </div>
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Elsewhere:{' '}
          <Link
            href={siteMetadata.github}
            className="underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100"
          >
            GitHub
          </Link>
          {' · '}
          <Link
            href={siteMetadata.linkedin}
            className="underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100"
          >
            LinkedIn
          </Link>
        </p>
      </div>

      <section
        className="border-b border-gray-200 py-12 dark:border-gray-700"
        aria-labelledby="featured-projects"
      >
        <h2 id="featured-projects" className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Featured projects
        </h2>
        <div className="-m-4 mt-5 flex flex-wrap">
          {projectsData.map((project) => (
            <Card key={project.slug} {...project} />
          ))}
        </div>
      </section>

      <section
        className="border-b border-gray-200 py-12 dark:border-gray-700"
        aria-labelledby="recent-writing"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="recent-writing" className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Recent writing
          </h2>
          <Link href="/blog" className="font-medium text-primary-500 hover:text-primary-600">
            All writing →
          </Link>
        </div>
        <ul className="mt-5 divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map(({ slug, title, date, summary, tags = [] }) => (
            <li key={slug} className="py-6">
              <article>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date)}</time>
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                  <Link href={`/blog/${slug}`}>{title}</Link>
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{summary}</p>
                <div className="mt-3 flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-12" aria-labelledby="background">
        <h2 id="background" className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Background
        </h2>
        <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-300">
          My work began in language education and moved through application support into full-stack
          software development. Those experiences continue to shape how I think about tools,
          communication, and learning.
        </p>
        <Link
          href="/about"
          className="mt-4 inline-block font-medium text-primary-500 hover:text-primary-600"
        >
          More about me →
        </Link>
      </section>
    </>
  )
}

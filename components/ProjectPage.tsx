import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'

export default function ProjectPage({ project, children, relatedPosts }) {
  return (
    <>
      <PageSEO
        title={`${project.title} - ${siteMetadata.author}`}
        description={project.description}
      />
      <div className="border-b border-gray-200 pt-6 pb-4 dark:border-gray-700">
        <Link
          href="/projects"
          className="text-sm font-medium text-primary-500 hover:text-primary-600"
        >
          ← All projects
        </Link>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
          {project.status}
        </p>
        <h1 className="garden-heading mt-3 text-4xl sm:text-5xl md:text-6xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
          {project.disciplines.join(' · ')}
        </p>
      </div>
      <div className="project-prose prose max-w-3xl pt-4 pb-10 dark:prose-dark">{children}</div>
      <section
        className="border-t border-gray-200 py-10 dark:border-gray-700"
        aria-labelledby="related-writing"
      >
        <h2 id="related-writing" className="garden-heading text-3xl">
          Related writing
        </h2>
        {relatedPosts.length ? (
          <ul className="mt-5 space-y-5">
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-medium text-primary-500 hover:text-primary-600"
                >
                  {post.title}
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-500 dark:text-gray-400">No related articles yet.</p>
        )}
      </section>
    </>
  )
}

import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <div className="border-b border-gray-200 pt-12 pb-10 dark:border-gray-700 sm:pt-16">
          <p className="garden-eyebrow mb-4">Ideas made tangible</p>
          <h1 className="garden-heading text-5xl sm:text-6xl">Educational projects</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-200">
            Stories, games, and spaces for exploring ideas together. Each project starts with a
            question about how people learn.
          </p>
        </div>
        <div className="grid gap-5 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card key={project.slug} headingLevel={2} {...project} />
          ))}
        </div>
      </div>
    </>
  )
}

import Link from '@/components/Link'
import ProjectPage from '@/components/ProjectPage'
import projectsData from '@/data/projectsData'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getRelatedPosts } from '@/lib/relatedPosts'

const project = projectsData.find(({ slug }) => slug === 'polyagora')

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { relatedPosts: getRelatedPosts(posts, project.slug) } }
}

export default function PolyAgora({ relatedPosts }) {
  return (
    <ProjectPage project={project} relatedPosts={relatedPosts}>
      <section>
        <h2>Overview</h2>
        <p>
          PolyAgora is a live platform for reading, publishing, and discussing ideas across fields.
          Anyone can explore public articles and conversations. Members can contribute their own
          writing and build a lasting record of the ideas and discussions they take part in.
        </p>
      </section>
      <section>
        <h2>The problem</h2>
        <p>
          Useful conversations often disappear into fast-moving feeds, while ideas that connect
          several disciplines can be hard to find through a single topic or keyword. PolyAgora gives
          people a place to return to those exchanges and follow connections between fields.
        </p>
      </section>
      <section>
        <h2>How it works</h2>
        <p>
          Visitors can browse public articles and their discussions, search for topics, filter by
          fields, and choose how results are sorted. Members can publish an exchange, reply to
          others, or bring an outside article or post into a draft as the starting point for a new
          conversation.
        </p>
        <p>
          Member portfolios bring writing and participation together. Public and private visibility
          controls let people decide what to share, while field-based discovery helps readers find
          discussions beyond their usual areas of interest.
        </p>
      </section>
      <section>
        <h2>My role</h2>
        <p>
          I work across product direction, interface design, frontend and backend development, and
          the way knowledge is organized and discovered on the platform.
        </p>
      </section>
      <section>
        <h2>Current stage</h2>
        <p>
          PolyAgora is deployed and open for public browsing. The platform already supports
          publishing, discussion, discovery, and member portfolios, with ongoing work to improve the
          experience as the community grows.
        </p>
      </section>
      <section>
        <h2>Links</h2>
        <p>
          <Link href="https://polyagora.org">Visit PolyAgora</Link>
        </p>
      </section>
    </ProjectPage>
  )
}

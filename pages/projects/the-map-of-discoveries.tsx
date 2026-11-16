import ProjectPage from '@/components/ProjectPage'
import projectsData from '@/data/projectsData'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getRelatedPosts } from '@/lib/relatedPosts'

const project = projectsData.find(({ slug }) => slug === 'the-map-of-discoveries')

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { relatedPosts: getRelatedPosts(posts, project.slug) } }
}

export default function TheMapOfDiscoveries({ relatedPosts }) {
  return (
    <ProjectPage project={project} relatedPosts={relatedPosts}>
      <section>
        <h2>Overview</h2>
        <p>
          The Map of Discoveries is an Italian-language learning app for a child who enjoys a
          challenge. It offers two paths, mathematics and geometry, with 20 missions in each. Every
          mission gives a problem a short story and invites the child to work out a numerical answer.
          These first paths establish a format that can grow to include history, English, and other
          subjects.
        </p>
      </section>
      <section>
        <h2>How it works</h2>
        <p>
          Each subject has two selectable levels of ten missions. Children can move between
          missions, read the story and question, ask for a hint, and enter one or more numbers. The
          app checks the answers when submitted. Geometry missions also use diagrams to explore
          shapes, grids, symmetry, measurement, and perimeter.
        </p>
        <p>
          After submitting an answer, a worked solution can be opened with a PIN. The app saves
          answers, completed missions, and the child&apos;s own difficulty rating in the browser, so
          they can return to a challenge later.
        </p>
      </section>
      <section>
        <h2>Learning approach</h2>
        <p>
          The missions use stories and concrete challenges to make ideas approachable. In the
          current subjects, a child might divide supplies among characters, follow a route on a
          grid, or calculate the tiles and outer border of a mosaic. The same exploratory approach
          could support future missions in history, English, and other fields.
        </p>
      </section>
      <section>
        <h2>Current stage</h2>
        <p>
          This is a working, Italian-language prototype with mathematics and geometry missions. It
          runs without an account or backend; progress remains in the same browser and is lost if
          its data is cleared. The longer-term plan is to add subjects such as history and English,
          alongside possible features such as parent review and adaptive difficulty. There are no
          learning outcomes to report yet.
        </p>
      </section>
    </ProjectPage>
  )
}

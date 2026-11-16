import ProjectPage from '@/components/ProjectPage'
import projectsData from '@/data/projectsData'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getRelatedPosts } from '@/lib/relatedPosts'

const project = projectsData.find(({ slug }) => slug === 'from-fire-to-stars')

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { relatedPosts: getRelatedPosts(posts, project.slug) } }
}

export default function FromFireToStars({ relatedPosts }) {
  return (
    <ProjectPage project={project} relatedPosts={relatedPosts}>
      <section>
        <h2>Overview</h2>
        <p>
          From Fire to Stars is a printable educational gamebook, inspired in part by historical
          strategy games. Players explore the development of civilizations through branching
          decisions, resource management, historical events, and connected systems.
        </p>
        <p>
          The project draws on history, anthropology, social sciences, mathematics, astronomy, early
          technologies, political organization, and systems thinking.
        </p>
      </section>
      <section>
        <h2>Educational objective</h2>
        <p>
          The aim is to explore relationships rather than memorize isolated facts: how food
          production, population growth, resources, stability, specialization, political authority,
          writing, and calendars may influence one another.
        </p>
      </section>
      <section>
        <h2>Game format</h2>
        <p>
          The planned printable materials may include branching chapters, resource tracking sheets,
          event and crisis cards, technology cards, society or specialist cards, and concept cards.
          These are design possibilities, not a completed set.
        </p>
      </section>
      <section>
        <h2>Current development</h2>
        <p>
          The prototype is in development. Its initial setting focuses on early Mesopotamian
          civilization and the emergence of urban society.
        </p>
      </section>
      <section>
        <h2>Design philosophy</h2>
        <p>
          Decisions and consequences give players a way to examine how historical factors interact.
          The design uses systems thinking to connect subjects that are often taught separately,
          while leaving room to question the model itself.
        </p>
      </section>
      <section>
        <h2>Design explorations</h2>
        <p>Questions I expect to document as the prototype develops include:</p>
        <ul>
          <li>How should food production and consumption be represented?</li>
          <li>What does stability mean as a resource?</li>
          <li>How might specialization change a society?</li>
          <li>What economic and political effects could a granary have?</li>
          <li>How might astronomical knowledge affect agricultural decisions?</li>
        </ul>
        <p>These are design questions, not validated educational findings.</p>
      </section>
      <section>
        <h2>Learning evaluation</h2>
        <p>
          I plan to test the prototype to investigate whether players understand the intended
          relationships. There are no learning results to report yet.
        </p>
      </section>
      <section>
        <h2>Printable prototype</h2>
        <p>
          The printable prototype is in development. A PDF download will be added here when it is
          ready.
        </p>
      </section>
    </ProjectPage>
  )
}

import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`Who's me - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Who's me
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Full-stack Software Developer</div>
            <div className="text-gray-500 dark:text-gray-400">
              <a
                // style={{ textColor: '#0ea5e9' }}
                className="text-red-500 hover:text-blue-500"
                href="https://www.24i.com"
                target="_blank"
                rel="noreferrer"
              >
                24i
              </a>
            </div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Born in Italy, moved to Colombia, Bogota' and then to Czech Republic, Brno, I've
              passed from IT in high school to humanistic studies and languages in the years
              afterwards, getting from teaching to being academic director in a language school.
            </p>
            <p>
              Back in Europe my love for IT rised again, and during my years as application support
              engineer I self learnt development, working on personal and professional projects
              (automation webtools).
            </p>
            <p>
              At the moment I'm employed as fullstack software engineer where I develop using a
              Javascript/Typescript tech stack for frontend and backend (NodeJS), plus serverless
              services.
            </p>
            <p>
              In the little personal free time I try to help other want-to-be developers and write
              about what I learn.
            </p>
            <h4>On the web</h4>
            🛠{' '}
            <a
              style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}
              href="http://www.alexbuaiscia.com"
              target="__blank"
            >
              My website, alexbuaiscia.com
            </a>{' '}
            Under reconstruction (without rush)
            <br />
            🛠{' '}
            <a href="https://github.com/buaiscia" target="__blank">
              My Github repositories
            </a>
            <br />
            🛠{' '}
            <a href="https://www.linkedin.com/in/alex-buaiscia/" target="__blank">
              My Linkedin profile
            </a>
            <br />
            🛠{' '}
            <a href="https://twitter.com/AlexBuaiscia" target="__blank">
              My Twitter where I can be reached
            </a>
            <ul>
              <li>HTML5 / CSS3</li>
              <li>Javascript</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>Express / Restify</li>
              <li>Typescript</li>
              <li>Docker</li>
              <li>AWS SAM + Lambdas</li>
              <li>Swagger</li>
              <li>Postman</li>
              <li>MongoDB</li>
              <li>EJS</li>
              <li>Linux/Unix</li>
              <li>A little of GraphQL</li>
              <li>Some Python and Java</li>
              <li>SOAP/REST services/APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

import siteMetadata from '@/data/siteMetadata'
// import projectsData from '@/data/highlightsData'
// import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { Chrono } from 'react-chrono'
import highlightsData from '@/data/highlightsData'

export default function Highlights() {
  return (
    <>
      <PageSEO
        title={`Highlights - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Highlights
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Articles, newsletter issues, podcast releases and more.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <Chrono
              items={highlightsData}
              mode="VERTICAL_ALTERNATING"
              itemWidth={500}
              hideControls={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}

import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import highlightsData from '@/data/highlightsData'
import siteMetadata from '@/data/siteMetadata'

export default function Highlights() {
  return (
    <>
      <PageSEO
        title={`Highlights - ${siteMetadata.author}`}
        description="A record of projects, writing, talks, and other milestones."
      />
      <header className="border-b border-gray-200 pt-12 pb-10 dark:border-gray-700 sm:pt-16">
        <p className="garden-eyebrow mb-4">Along the way</p>
        <h1 className="garden-heading text-5xl sm:text-6xl">Highlights</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-200">
          Projects, writing, talks, and other moments that have shaped my work.
        </p>
      </header>
      <ol className="ml-2 max-w-4xl border-l-2 border-primary-200 py-12 dark:border-primary-700">
        {highlightsData.map((item, index) => {
          const details = Array.isArray(item.cardDetailedText)
            ? item.cardDetailedText
            : [item.cardDetailedText]

          return (
            <li
              key={`${item.date}-${item.cardTitle}`}
              className="relative pb-7 pl-8 last:pb-0 sm:pl-10"
            >
              <span
                className="absolute -left-[9px] top-7 h-4 w-4 rounded-full border-[3px] border-[#f8f6eb] bg-primary-500 dark:border-[#1d2d24] dark:bg-primary-300"
                aria-hidden="true"
              />
              <article className="rounded-[1.75rem] bg-[#e9eddf] p-6 dark:bg-[#304738] sm:p-8">
                <time className="garden-eyebrow">{String(item.date)}</time>
                <h2 className="mt-3 font-serif text-2xl leading-tight text-primary-900 dark:text-gray-100 sm:text-3xl">
                  {item.url ? (
                    <Link
                      href={item.url}
                      className="hover:underline"
                      aria-label={`Read more about ${item.cardTitle}`}
                    >
                      {item.cardTitle}
                    </Link>
                  ) : (
                    item.cardTitle
                  )}
                </h2>
                {item.cardSubtitle && (
                  <p className="mt-3 font-bold text-gray-700 dark:text-gray-200">
                    {item.cardSubtitle}
                  </p>
                )}
                <div className="mt-3 space-y-3 text-sm leading-7 text-gray-700 dark:text-gray-200">
                  {details.filter(Boolean).map((detail, detailIndex) => (
                    <p key={`${index}-${detailIndex}`}>{detail}</p>
                  ))}
                </div>
              </article>
            </li>
          )
        })}
      </ol>
    </>
  )
}

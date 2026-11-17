import Image from './Image'
import Link from './Link'

type CardProps = {
  title: string
  description: string
  imgSrc?: string
  href?: string
  status?: string
  category?: string
  disciplines?: string[]
  headingLevel?: 2 | 3
}

const Card = ({
  title,
  description,
  imgSrc,
  href,
  status,
  category,
  disciplines = [],
  headingLevel = 3,
}: CardProps) => {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'

  return (
    <article className="garden-project-card flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 text-primary-900 dark:text-gray-100 sm:p-7">
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="mb-5 rounded-2xl object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="mb-5 rounded-2xl object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <p className="garden-eyebrow">{category || status}</p>
      <Heading className="mt-4 font-serif text-2xl leading-tight sm:text-[1.7rem]">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </Heading>
      <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-200">{description}</p>
      {disciplines.length > 0 && (
        <p className="mt-4 text-xs font-semibold text-gray-600 dark:text-gray-300">
          {disciplines.join(' · ')}
        </p>
      )}
      {href && (
        <Link
          href={href}
          className="garden-link mt-auto pt-5 text-sm"
          aria-label={`Link to ${title}`}
        >
          Explore project &rarr;
        </Link>
      )}
    </article>
  )
}

export default Card

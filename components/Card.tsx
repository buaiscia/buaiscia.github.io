import Image from './Image'
import Link from './Link'

type CardProps = {
  title: string
  description: string
  imgSrc?: string
  href?: string
  status?: string
  disciplines?: string[]
}

const Card = ({ title, description, imgSrc, href, status, disciplines = [] }: CardProps) => (
  <div className="w-full p-4 md:w-1/2">
    <div className="h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        {status && (
          <p className="mb-2 text-sm font-medium text-primary-600 dark:text-primary-400">
            {status}
          </p>
        )}
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {disciplines.length > 0 && (
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{disciplines.join(' · ')}</p>
        )}
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card

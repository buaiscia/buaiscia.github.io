import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-xs font-bold text-primary-700 transition-colors hover:bg-primary-200 dark:bg-primary-800 dark:text-primary-100 dark:hover:bg-primary-700"
    >
      {text}
    </Link>
  )
}

export default Tag

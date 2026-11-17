import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 py-9 dark:border-gray-700">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-serif text-2xl text-primary-900 dark:text-gray-100">
            Keep learning, keep wondering.
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} {siteMetadata.author}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex items-center gap-4">
            <SocialIcon kind="github" href={siteMetadata.github} size="5" />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />
          </div>
          <Link href="/about" className="garden-link text-sm">
            Get to know me <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

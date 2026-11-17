import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex min-h-screen flex-col justify-between">
        <header className="flex items-center justify-between gap-2 py-4 sm:py-5">
          <Link
            href="/"
            aria-label={siteMetadata.headerTitle}
            className="flex min-w-0 items-center gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dce8c9] text-primary-700 dark:bg-primary-800 dark:text-primary-200 sm:h-11 sm:w-11">
              <Logo className="h-8 w-8" />
            </span>
            <span className="whitespace-nowrap text-base font-extrabold leading-tight text-primary-900 dark:text-gray-100 sm:text-xl">
              {siteMetadata.headerTitle}
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-3 text-sm leading-5 lg:gap-4">
            <nav
              className="hidden items-center gap-4 lg:flex xl:gap-5"
              aria-label="Main navigation"
            >
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="inline-flex whitespace-nowrap rounded-full px-3 py-2 font-bold text-gray-800 transition-colors hover:bg-primary-100 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-gray-100 dark:hover:bg-primary-800 xl:px-4 last:bg-primary-100 last:text-primary-800 dark:last:bg-primary-800 dark:last:text-primary-100"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main id="main-content" className="mb-auto">
          {children}
        </main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

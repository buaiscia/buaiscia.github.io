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
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between gap-2 py-5 sm:py-8">
          <Link
            href="/"
            aria-label={siteMetadata.headerTitle}
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <Logo className="h-12 w-12 shrink-0 sm:h-16 sm:w-16" />
            <span className="whitespace-nowrap text-base font-semibold leading-tight text-gray-900 dark:text-gray-100 sm:text-xl md:text-2xl">
              {siteMetadata.headerTitle}
            </span>
          </Link>
          <div className="flex shrink-0 items-center text-base leading-5">
            <div className="hidden lg:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-2 font-medium text-gray-900 dark:text-gray-100 xl:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

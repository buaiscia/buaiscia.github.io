import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import PostLayout from '@/layouts/PostLayout'
import PostSimple from '@/layouts/PostSimple'
import AuthorLayout from '@/layouts/AuthorLayout'
// import { BlogNewsletterForm } from './NewsletterForm'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  // BlogNewsletterForm: BlogNewsletterForm,
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  const Layout = { PostLayout, PostSimple, AuthorLayout }[layout]

  return (
    <Layout {...rest}>
      <MDXLayout components={MDXComponents} />
    </Layout>
  )
}

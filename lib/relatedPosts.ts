import kebabCase from './utils/kebabCase'

export function getRelatedPosts(posts, projectSlug) {
  return posts.filter(
    ({ project, tags = [] }) =>
      project === projectSlug || tags.some((tag) => kebabCase(tag) === projectSlug)
  )
}

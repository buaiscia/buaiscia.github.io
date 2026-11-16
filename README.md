# Alex Buaiscia's website

A personal portfolio and writing site built with Next.js static export. The existing GitHub Pages workflow builds the site with `npm run build` and publishes `out/`.

## Local development

```sh
npm ci
npm run dev
```

Run `npm run typecheck`, `npm run lint`, and `npm run build` before publishing. The production build generates the sitemap. The site has no separate test script.

## Writing

Articles live in `data/blog/` as Markdown or MDX. Existing article paths remain under `/blog/`. Add a new article using the existing frontmatter fields (`title`, `date`, `summary`, and `tags`). The `/blog` page is labeled **Writing** in navigation.

To connect a new article to a project page, add the optional `project` field with one of the slugs in `data/projectsData.ts`:

```yaml
project: from-fire-to-stars
```

An article with a tag matching a project slug also appears in that project's related writing. This is a manual publishing workflow; LinkedIn posts can be expanded into articles here when useful.

## Projects

Project summaries and links live in `data/projectsData.ts`; the detailed pages live in `pages/projects/`. The PolyAgora website URL and the From Fire to Stars printable prototype link are intentionally left as text placeholders until confirmed or available.

The Highlights page remains available at `/highlights` and is linked in the main navigation.

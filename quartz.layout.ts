import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const SITE = "https://mtrifiro.github.io/marketing-pattern-language"

// Where every invitation to talk points. Changing it here changes the ask on
// all 123 pattern pages; the About page carries the same link in prose and has
// to be edited alongside it.
const CONVERSATION_URL = "SCHEDULING_URL_PENDING"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.PatternAsk({ url: CONVERSATION_URL })],
  footer: Component.Footer({
    links: {
      // Full URLs, not root-relative: the site is served from a GitHub Pages
      // project subpath, where "/0-Frontmatter/..." would 404.
      Introduction: `${SITE}/0-Frontmatter/Introduction`,
      "The Pattern Summary": `${SITE}/0-Frontmatter/The-Pattern-Summary`,
      About: `${SITE}/about`,
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}

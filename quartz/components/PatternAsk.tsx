import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/patternAsk.scss"

interface Options {
  // Where the invitation points. Kept as an option so the destination lives in
  // quartz.layout.ts next to the footer links rather than buried in a component.
  url: string
}

export default ((opts: Options) => {
  function PatternAsk({ fileData, displayClass }: QuartzComponentProps) {
    // Only the 123 patterns carry `pattern` in frontmatter tags. Chapter
    // introductions, the front matter and the landing page do not, so this
    // renders on pattern pages and nowhere else.
    const tags = fileData.frontmatter?.tags
    if (!Array.isArray(tags) || !tags.includes("pattern")) {
      return null
    }

    return (
      <div class={classNames(displayClass, "pattern-ask")}>
        <p class="pattern-ask-question">Is this the one you're stuck in?</p>
        <p class="pattern-ask-body">
          The patterns are most useful against a live situation. If you're building a technical or
          enterprise market and this one names what you're in the middle of, I'd like to hear where
          it gets your case wrong.
        </p>
        <a class="pattern-ask-link" href={opts.url}>
          Talk it through
        </a>
      </div>
    )
  }

  PatternAsk.css = style

  return PatternAsk
}) satisfies QuartzComponentConstructor<Options>

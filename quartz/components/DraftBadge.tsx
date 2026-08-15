import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/draftBadge.scss"

export default (() => {
  function DraftBadge({ fileData, displayClass }: QuartzComponentProps) {
    const status = fileData.frontmatter?.status
    if (status !== "draft") {
      return null
    }

    return (
      <div class={classNames(displayClass, "draft-badge")}>
        <span class="draft-badge-pill">Draft</span>
        <span class="draft-badge-note">
          This pattern is still in revision — its argument and examples may change.
        </span>
      </div>
    )
  }

  DraftBadge.css = style

  return DraftBadge
}) satisfies QuartzComponentConstructor

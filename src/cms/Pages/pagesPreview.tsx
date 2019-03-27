import React, { FC } from "react"

const defaultSeparator = "<!--break-->"

const PagePreview: FC = props => {
  const MarkdownPreview = CMS.getWidget("markdown").preview
  return (
    <div className="book-page book-page-cms">
      <MarkdownPreview {...props} />
    </div>
  )
}

type PagesProps = {
  value: string
}

const PagesPreview: FC<PagesProps> = props => {
  const markdown = props.value
  const pagesMarkdown = markdown.split(defaultSeparator)

  return (
    <div>
      {pagesMarkdown.map((pageMarkdown, i) => {
        const newProps = { ...props, value: pageMarkdown }
        return <PagePreview {...newProps} key={i} />
      })}
    </div>
  )
}

export default PagesPreview

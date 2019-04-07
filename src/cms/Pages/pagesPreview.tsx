import React, { FC } from "react"

const defaultSeparator = "<!--break-->"

type PagePreview = {
  index: number
}

const PagePreview: FC<PagePreview> = props => {
  const MarkdownPreview = CMS.getWidget("markdown").preview
  return (
    <div className="book-page book-page-cms">
      <MarkdownPreview {...props} />
      {props.index !== 0 && <span className="page-number">{props.index}</span>}
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
    <>
      {pagesMarkdown.map((pageMarkdown, index) => {
        const newProps = { ...props, value: pageMarkdown, index }
        return (
          <>
            <PagePreview {...newProps} key={index} />
          </>
        )
      })}
    </>
  )
}

export default PagesPreview

import React, { Component } from "react"

const defaultSeparator = "<!--break-->"

export const PagePreview = props => {
  const MarkdownPreview = CMS.getWidget("markdown").preview
  return (
    <div className="page-outer">
      <MarkdownPreview {...props} />
    </div>
  )
}

const PagesPreview = props => {
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

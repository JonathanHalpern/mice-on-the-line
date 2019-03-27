import React, { FC } from "react"

type Props = {}

const PreviewTemplate: FC<Props> = props => {
  return (
    <>
      <h1>{props.widgetFor("title")}</h1>
      <div className="preview-body">{props.widgetFor("body")}</div>
    </>
  )
}

export default PreviewTemplate

import React, { FC } from "react"
import styled from "@emotion/styled"
import "../../../static/admin/example.css"

import Turn from "./turn"

type Props = {
  pages: string[]
}

const options = {
  width: 940,
  height: 620,
  display: "double",
  acceleration: true,
  elevation: 50,
}

const Container = styled(Turn)`
  margin: 0 auto;
  user-select: none;
`

const Book: FC<Props> = ({ pages }) => {
  return (
    <Turn options={options}>
      {pages.map((page, index) => (
        <div key={index} className={`book-page ${index <= 1 && "hard"}`}>
          <div dangerouslySetInnerHTML={{ __html: page }} />
        </div>
      ))}
    </Turn>
  )
}

export default Book

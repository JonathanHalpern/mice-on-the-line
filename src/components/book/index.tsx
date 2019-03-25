import React, { FC } from "react"
import styled from "@emotion/styled"

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

  .bookPage {
    height: 100%;
    background: white;

    box-shadow: inset 0px 0px 0px 1px #eee;
    > div {
      height: 100%;
      padding: 45px;
      font-size: 22px;
      line-height: 28px;
    }
  }
`

const Book: FC<Props> = ({ pages }) => {
  return (
    <Container options={options} id="flipbook">
      {pages.map((page, index) => (
        <div key={index} className={`bookPage ${index <= 1 && "hard"}`}>
          <div dangerouslySetInnerHTML={{ __html: page }} />
        </div>
      ))}
    </Container>
  )
}

export default Book

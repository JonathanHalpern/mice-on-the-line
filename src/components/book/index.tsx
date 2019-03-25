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

  .page {
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

  .page img {
    max-width: 100%;
    height: 100%;
  }
`

const Book: FC<Props> = ({ pages }) => {
  return (
    <Container options={options}>
      {pages.map((page, index) => (
        <div key={index} className={`page ${index <= 1 && "hard"}`}>
          <div dangerouslySetInnerHTML={{ __html: page }} />
        </div>
      ))}
    </Container>
  )
}

export default Book

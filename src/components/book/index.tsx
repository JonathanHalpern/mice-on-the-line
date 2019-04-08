import React, { FC } from "react"
import styled from "@emotion/styled"
import "../../../static/admin/page.css"

import Turn from "./turn"

type Props = {
  pages: string[]
}

type Options = {
  width: number
  height: number
  display: string
  acceleration: boolean
  elevation: number
}

type TurnProps = {
  options: Options
}

const options = {
  width: 940,
  height: 620,
  display: "double",
  acceleration: true,
  elevation: 50,
}

const Container = styled(Turn)<TurnProps>`
  margin: 0 auto;
  user-select: none;
  .page-wrapper {
    perspective: 3000px;
    cursor: pointer;
  }

  .even {
    background-image: linear-gradient(to right, #fff 95%, #dadada 100%);
  }

  .odd {
    background-image: linear-gradient(to left, #fff 95%, #cacaca 100%);
  }
  .hard {
    background-image: none;
  }
`

const Book: FC<Props> = ({ pages }) => {
  return (
    <Container options={options}>
      {pages.map((page, index) => (
        <div
          key={index}
          className={`book-page ${(index <= 1 || index >= pages.length - 2) &&
            "hard"}`}
        >
          <div dangerouslySetInnerHTML={{ __html: page }} />
          {index !== 0 && <span className="page-number">{index}</span>}
        </div>
      ))}
    </Container>
  )
}

export default Book

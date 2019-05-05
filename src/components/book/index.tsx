import React, { FC, useState, useRef, useEffect } from "react"
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

type Container = {
  scale: number
}

const basePSize = 22
const baseLineheight = 28
const baseImageWidth = 300
const h1MarginBottom = 40
const h1FontSize = 46

const Container = styled.div<Container>`
  margin: 0 auto;
  user-select: none;
  height: 100%;
  .book-page p {
    font-size: ${props => `${props.scale * basePSize}px`};
    line-height: ${props => `${props.scale * baseLineheight}px`};
  }
  .book-page .page-number {
    font-size: ${props => `${props.scale * basePSize}px`};
  }
  .book-page > div {
    margin: ${props => `${props.scale * 45}px`};
  }
  .book-page .gatsby-resp-image-wrapper {
    max-width: ${props => `${props.scale * baseImageWidth}px`};
  }
  .book-page h1 {
    margin-bottom: ${props => `${props.scale * h1MarginBottom}px`};
    font-size: ${props => `${props.scale * h1FontSize}px`};
  }
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
const TurnWrapper = styled.div`
  padding-top: 5px;
  > div {
    margin: 0 auto;
  }
`

let initialOptions = {
  width: 940,
  height: 0,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: true,
  cornerSize: 300,
  zoom: 2,
}

const margins = [5, 5] //todo: remove this

const getRatio = (containerRef, ideals) => {
  const { clientHeight, clientWidth } = containerRef.current
  const ratioX = (clientWidth - margins[0]) / ideals[0]
  const ratioY = (clientHeight - margins[1]) / ideals[1]
  console.log(clientWidth, ratioX, ideals[0])
  console.log(clientHeight, ratioY, ideals[1])
  return Math.min(ratioX, ratioY, 1)
}

const Book: FC<Props> = ({ pages }) => {
  const [activePage, setActivePage] = useState(0)
  const [options, setOptions] = useState(initialOptions)
  const [scale, setScale] = useState(null)
  const containerRef = useRef(null)

  const ideals = [940, 620]

  useEffect(() => {
    if (!scale) {
      setupScale()
    } else {
      setOptions({ ...options, height: 0 })
      setTimeout(() => {
        setOptions({
          ...options,
          page: activePage ? activePage : undefined,
          width: ideals[0] * scale,
          height: ideals[1] * scale,
        })
      })
    }
  }, [scale])

  const setupScale = () => {
    const ratio = getRatio(containerRef, ideals)
    console.warn(ratio)
    setScale(ratio)
  }

  useEffect(() => {
    window.addEventListener("resize", setupScale)
    return () => window.removeEventListener("resize", setupScale)
  }, [])

  return (
    <Container ref={containerRef} scale={scale}>
      {options.height !== 0 && (
        <TurnWrapper>
          <Turn options={options} onPageTurn={setActivePage}>
            {pages.map((page, index) => (
              <div
                key={index}
                className={`book-page ${(index <= 1 ||
                  index >= pages.length - 2) &&
                  "hard"}`}
              >
                <div dangerouslySetInnerHTML={{ __html: page }} />
                {index !== 0 && <span className="page-number">{index}</span>}
              </div>
            ))}
          </Turn>
        </TurnWrapper>
      )}
    </Container>
  )
}

export default Book

import React, { FC, useState, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
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
const basePMargin = 15
const baseSignSize = 60
const baseSignMargin = 10
const baseLineheight = 28
const baseImageWidth = 300
const h1MarginBottom = 40
const h1FontSize = 46
const pageNumberBottom = 20

const HandWritten = styled.p`
  font-family: Chelsea Olivia;
`

const Container = styled.div<Container>`
  margin: 0 auto;
  user-select: none;
  height: 100%;
  .book-page p {
    font-size: ${props => `${props.scale * basePSize}px`};
    line-height: ${props => `${props.scale * baseLineheight}px`};
    margin: ${props => `0 0 ${props.scale * basePMargin}px 0`};
  }
  .book-page ${HandWritten} {
    font-size: ${props => `${props.scale * baseSignSize}px`};
    margin: ${props => `${props.scale * baseSignMargin}px 0 0 0`};
    text-align: center;
  }
  .book-page .page-number {
    font-size: ${props => `${props.scale * basePSize}px`};
    bottom: ${props => `${props.scale * pageNumberBottom}px`};
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

const margins = [0, 0] //todo: remove this

const getRatio = (containerRef, ideals) => {
  const { clientHeight, clientWidth } = containerRef.current
  const ratioX = (clientWidth - margins[0]) / ideals[0]
  const ratioY = (clientHeight - margins[1]) / ideals[1]
  return Math.min(ratioX, ratioY, 1)
}

const Book: FC<Props> = ({ pages, coverImage }) => {
  const [activePage, setActivePage] = useState(0)
  const [options, setOptions] = useState(initialOptions)
  const [scale, setScale] = useState(null)
  const containerRef = useRef(null)

  const ideals = [940, 620]

  useEffect(() => {
    if (!scale) {
      setupScale()
    } else {
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

  let resizeTimer

  const debouncedSetupScale = () => {
    setOptions({ ...options, height: 0 })
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(setupScale, 500)
  }

  const setupScale = () => {
    const ratio = getRatio(containerRef, ideals)
    setScale(ratio)
    setOptions({
      ...options,
      page: activePage ? activePage : undefined,
      width: ideals[0] * ratio,
      height: ideals[1] * ratio,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", debouncedSetupScale)
    return () => window.removeEventListener("resize", debouncedSetupScale)
  }, [])

  return (
    <Container ref={containerRef} scale={scale}>
      {options.height !== 0 && (
        <TurnWrapper>
          <Turn options={options} onPageTurn={setActivePage}>
            <div key={0} className="book-page hard">
              <div>
                <h1>Mice on the Line</h1>
                <Img fluid={coverImage.childImageSharp.fluid} />

                <HandWritten>by Natalie Woodward</HandWritten>
              </div>
            </div>
            {pages.map((page, index) => (
              <div
                key={index}
                className={`book-page ${(index === 0 ||
                  index >= pages.length - 2) &&
                  "hard"}`}
              >
                <div dangerouslySetInnerHTML={{ __html: page }} />
                {index !== pages.length - 1 && (
                  <span className="page-number">{index + 1}</span>
                )}
              </div>
            ))}
          </Turn>
        </TurnWrapper>
      )}
    </Container>
  )
}

export default Book

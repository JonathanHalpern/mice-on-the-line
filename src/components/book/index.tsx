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

const Container = styled.div`
  margin: 0 auto;
  user-select: none;
  height: 100%;
  @media only screen and (orientation: portrait) {
    height: 100vw;
    transform: rotate(90deg);
    .book-page p {
      font-size: 3.25vw;
    }
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

let initialOptions = {
  width: 940,
  height: 0,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: true,
}

const margin = 50 //todo: remove this

const Book: FC<Props> = ({ pages }) => {
  const [activePage, setActivePage] = useState(0)
  const [options, setOptions] = useState(initialOptions)
  const containerRef = useRef(null)

  console.log(activePage)
  console.log(containerRef, containerRef.current)

  useEffect(() => {
    console.log(containerRef, containerRef.current.clientHeight)
    const height = containerRef.current.clientHeight - margin
    console.log(options)
    setOptions({ ...options, height })

    function handleResize() {
      console.log("resize")
      setOptions({ ...options, height: 0 })
      setTimeout(() => {
        const aheight = containerRef.current.clientHeight - margin
        setOptions({ ...options, height: aheight })
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Container ref={containerRef}>
      {options.height !== 0 && (
        <div>
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
        </div>
      )}
    </Container>
  )
}

export default Book

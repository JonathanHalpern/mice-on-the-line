import React, { FC } from "react"
import styled from "@emotion/styled"
import { StaticQuery, graphql, Link } from "gatsby"

type Props = {
  storyTitle: string
  storyId: string
  description: string
  x: number
  y: number
  mouseLeave: () => void
}

const Wrapper = styled.g``

const Background = styled.rect`
  fill: rgb(256, 256, 256);
  stroke-width: 3;
  stroke: rgb(0, 0, 0);
`

const CloseButton = styled.image`
  cursor: pointer;
  width: 10px;
  :hover {
  }
`

const width = 80
const height = 80
const margin = 10

const StoryPreview: FC<Props> = ({
  storyId,
  storyTitle,
  description,
  x,
  y,
  mouseLeave,
}) => {
  const mouseImage = require(`../../images/${storyId}-cover.jpeg`)
  const closeIcon = require(`../../images/close.png`)
  return (
    <Wrapper
      transform={`matrix(1 0 0 1 ${x - width / 2} ${y - height / 2})`}
      onMouseLeave={mouseLeave}
    >
      <Link to={`/${storyId}`}>
        <Background width={width} height={height} />
        {/* <text
          textAnchor="middle"
          x={width / 2}
          y="15"
          fill="#1C3F94"
          fontSize="8"
        >
          {storyTitle}
        </text> */}
        <image
          width={width}
          height={height}
          xlinkHref={mouseImage}
          x={0}
          y={0}
        />
        {/* <text
          textAnchor="middle"
          x={width / 2}
          y="90"
          width="30"
          id="s-910gbthnlgr_label_x0a__1_"
          fill="#1C3F94"
          className="blue-fill"
        >
          {description}
        </text> */}
      </Link>
      <CloseButton xlinkHref={closeIcon} x={0} y={0} onMouseDown={mouseLeave} />
    </Wrapper>
  )
}
export default StoryPreview

import React, { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

type Props = {
  storyId: string
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

const width = 50
const height = 50

const StoryPreview: FC<Props> = ({ storyId, x, y, mouseLeave, image }) => {
  const closeIcon = require(`../../img/close.png`)
  return (
    <Wrapper
      transform={`matrix(1 0 0 1 ${x - 5} ${y - 5})`}
      onMouseLeave={mouseLeave}
    >
      <Link to={`/${storyId}`}>
        <Background width={width} height={height} />
        {image && (
          <image
            width={width}
            height={height}
            xlinkHref={image.publicURL}
            x={0}
            y={0}
          />
        )}
      </Link>
      <CloseButton xlinkHref={closeIcon} x={0} y={0} onMouseDown={mouseLeave} />
    </Wrapper>
  )
}
export default StoryPreview

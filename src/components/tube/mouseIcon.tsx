import React, { FC } from "react"
import styled from "@emotion/styled"

import mouse from "../../images/mouse-outline.png"

const StyledImage = styled.image`
  @keyframes example {
    0% {
      width: 10px;
      transform: translate(0px, 0px);
    }
    50% {
      width: 14px;
      transform: translate(-2px, -2px);
    }
    100% {
      width: 10px;
      transform: translate(0px, 0px);
    }
  }
  width: 10px;
  transform: translate(0px, 0px);
  animation-timing-function: ease-in-out;
  animation-name: example;
  animation-duration: 3s;
  animation-iteration-count: infinite;
`

type Props = {
  x: number
  y: number
}

const Tube: FC<Props> = ({ x, y }) => {
  return <StyledImage xlinkHref={mouse} x={x} y={y} />
}

export default Tube

import React, { FC, useState, useEffect } from "react"
import styled from "@emotion/styled"
import { Spring } from "react-spring/renderprops"

import mouse from "../../images/mouse-outline.png"

type Props = {
  x: number
  y: number
}

const length = 12

const Tube: FC<Props> = ({ x, y }) => {
  const [resetAnimation, setResetAnimation] = useState(false)
  const [isReversed, setIsReversed] = useState(false)

  return (
    <Spring
      config={{ mass: 1, tension: 120, friction: 14 }}
      from={{ stretch: 1 }}
      to={{ stretch: 1.5 }}
      reset={resetAnimation}
      reverse={isReversed}
      onRest={() => {
        setIsReversed(!isReversed)
        setResetAnimation(false)
        setResetAnimation(true)
      }}
    >
      {props => {
        {
          const stretch = props.stretch * length
          const shift = ((props.stretch - 1) * length) / 2
          return (
            <image
              xlinkHref={mouse}
              height={stretch}
              width={stretch}
              transform={`translate(${-shift}, ${-shift})`}
              x={x}
              y={y}
            />
          )
        }
      }}
    </Spring>
  )
}

export default Tube

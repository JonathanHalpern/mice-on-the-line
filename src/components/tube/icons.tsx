import React, { FC } from "react"

import MouseIcon from "./mouseIcon"

type Props = {
  mouseOver: (hoverEvent: StationHover) => void
}

type StationHover = {
  id: string
  x: number
  y: number
}

const data = [
  {
    x: 530,
    y: 480.5,
    id: "charing-cross",
  },
  {
    x: 530,
    y: 452.5,
    id: "leicester-square",
  },
  {
    x: 541,
    y: 440.5,
    id: "covent-garden",
  },
  {
    x: 489.5,
    y: 427,
    id: "oxford-circus",
  },
  {
    x: 620.5,
    y: 447,
    id: "bank",
  },
]

const Icons: FC<Props> = ({ mouseOver }) => (
  <g id="icons">
    {data.map(icon => (
      <g
        key={icon.id}
        onMouseEnter={() => {
          mouseOver(icon)
        }}
        onClick={() => {
          mouseOver(icon)
        }}
      >
        <MouseIcon x={icon.x} y={icon.y} />
      </g>
    ))}
  </g>
)
export default Icons

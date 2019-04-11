import React, { FC } from "react"

import MouseIcon from "./mouseIcon"

type Station = {
  id: string
  x: number
  y: number
}

type Props = {
  stations: Station[]
  mouseOver: (hoverEvent: Station) => void
}

const Icons: FC<Props> = ({ mouseOver, stations }) => (
  <g id="icons">
    {stations.map(station => (
      <g
        key={station.id}
        onMouseEnter={() => {
          mouseOver(station)
        }}
        onClick={() => {
          mouseOver(station)
        }}
      >
        <MouseIcon x={station.x} y={station.y} />
      </g>
    ))}
  </g>
)
export default Icons

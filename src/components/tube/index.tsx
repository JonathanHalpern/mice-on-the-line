import React, { useState } from "react"
import styled from "@emotion/styled"

import River from "./river"
import Lines from "./lines"
import StationNames from "./stationNames"
import InterchangeCircles from "./interchangeCircles"
import StoryPreview from "./storyPreview"
import Icons from "./icons"

const SvgWrapper = styled.div`
  width: 100%;
`

const StyledSvg = styled.svg`
  @import url(http://fonts.googleapis.com/css?family=Hammersmith+One);
  font-family: "HammersmithOne", "Hammersmith One";
  font-size: 4.6px;
`
const nullStation = {
  id: "",
  x: 0,
  y: 0,
}

const Tube = ({ storiesMeta }) => {
  const [hoveredSation, setHoveredStation] = useState(nullStation)
  const story = storiesMeta.find(story => story.id === hoveredSation.id)
  return (
    <SvgWrapper>
      <StyledSvg width="100%" viewBox="400 332 300 200">
        <River />
        <Lines />
        <StationNames />
        <InterchangeCircles />
        <Icons mouseOver={setHoveredStation} />
        {hoveredSation.id && (
          <StoryPreview
            storyId={hoveredSation.id}
            storyTitle={story.title}
            description={story.description}
            x={hoveredSation.x}
            y={hoveredSation.y}
            mouseLeave={() => {
              setHoveredStation(nullStation)
            }}
          />
        )}
      </StyledSvg>
    </SvgWrapper>
  )
}

export default Tube

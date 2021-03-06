import React, { Component } from "react"
import styled from "@emotion/styled"
import { toast } from "react-toastify"

import River from "./river"
import Lines from "./lines"
import StationNames from "./stationNames"
import InterchangeCircles from "./interchangeCircles"
import StoryPreview from "./storyPreview"
import Icons from "./icons"

import { Story } from "../../../types"

const SvgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
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

type Props = {
  storiesMeta: Story[]
}
type State = {
  hoveredStation: Station
}

const xOffset = 380
const yOffset = 378

class Tube extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    toast.info("Hover over a station, to see which mouse lives there", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: false,
    })
    this.state = {
      hoveredStation: nullStation,
    }
  }
  render() {
    const { storiesMeta } = this.props
    const { hoveredStation } = this.state
    const story =
      storiesMeta.length > 0 &&
      storiesMeta.find(story => story.id === hoveredStation.id)
    return (
      <SvgWrapper>
        <StyledSvg width="100%" viewBox={`${xOffset} ${yOffset} 320 150`}>
          <River />
          <Lines />
          <StationNames />
          <InterchangeCircles />
          <Icons mouseOver={this.setHoveredStation} stations={storiesMeta} />
          {story && (
            <StoryPreview
              storyId={hoveredStation.id}
              x={hoveredStation.x}
              y={hoveredStation.y}
              image={hoveredStation.previewImage}
              mouseLeave={() => {
                this.setHoveredStation(nullStation)
              }}
            />
          )}
        </StyledSvg>
      </SvgWrapper>
    )
  }
  setHoveredStation = (hoveredStation: Station) => {
    this.setState({
      hoveredStation,
    })
  }
}

export default Tube

import React from "react"
import styled from "@emotion/styled"

import River from "./river"
import Lines from "./lines"
import StationNames from "./stationNames"
import InterchangeCircles from "./interchangeCircles"
import { navigate } from "gatsby"

const SvgWrapper = styled.div`
  @import url(http://fonts.googleapis.com/css?family=Hammersmith+One);
  svg {
    font-family: "HammersmithOne", "Hammersmith One";
    font-size: 4.6px;
  }

  @-webkit-keyframes flashline {
    0% {
      opacity: 0;
    }
    15%,
    70% {
      opacity: 1;
    }
    85%,
    100% {
      opacity: 0;
    }
  }

  @keyframes flashline {
    0% {
      opacity: 0;
    }
    15%,
    70% {
      opacity: 1;
    }
    85%,
    100% {
      opacity: 0;
    }
  }

  .linedisrupted {
    -webkit-animation: flashline 1s ease infinite;
    animation: flashline 1s ease infinite;
  }
`

const StyledSvg = styled.svg`
  transform: matrix(0.550118, 0, 0, 0.550118, -246.677, -204.039);
  margin-top: 0px;
  margin-left: -11px;
`

const Tube = () => (
  <SvgWrapper>
    <StyledSvg
      id="status-map"
      data-tag="May2018b"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns-xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="1247.244px"
      height="907.087px"
      // viewBox="64.094 122.25 985.889 657.072"
      viewBox="500 300 300 300"
      enableBackground="new 0 0 1247.244 907.087"
      xml-space="preserve"
      className="coloured-disruptions"
      data-margin-width="11.438118882830338"
      data-margin-height="0"
    >
      <River />
      <Lines />
      <StationNames />
      <InterchangeCircles
        mouseOver={station => {
          console.log(station)
          navigate(`/${station}`)
        }}
      />
    </StyledSvg>
  </SvgWrapper>
)

export default Tube

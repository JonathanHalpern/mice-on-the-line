import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import tube from "../images/tube.svg"
import Svg from "../components/tube"

const StyledImg = styled.img`
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <img src={tube} /> */}
    <Svg />
  </Layout>
)

export default IndexPage

import React from "react"
import styled from "@emotion/styled"

const StyledFooter = styled.footer`
  background: #f16666;
  /* position: fixed; */
  width: 100%;
  bottom: 0;
  padding: 5px;
  p {
    color: white;
    margin: 0;
  }
  display: block;
  @media screen and (orientation: landscape) and (min-device-width: 319px) and (max-device-width: 780px) {
    display: none;
  }
`

const Footer = () => (
  <StyledFooter>
    <p>© 2019 Natalie Woodward</p>
  </StyledFooter>
)

export default Footer

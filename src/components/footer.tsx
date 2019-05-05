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
`

const Footer = () => (
  <StyledFooter>
    <p>© 2019 Natalie Woodward</p>
  </StyledFooter>
)

export default Footer

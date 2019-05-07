import { Link } from "gatsby"
import React from "react"
import { FaBars } from "react-icons/fa"
import styled from "@emotion/styled"

const StyledHeader = styled.header`
  background: #f16666;
  width: 100%;
  display: block;
  @media screen and (orientation: landscape) and (min-device-width: 319px) and (max-device-width: 780px) {
    display: none;
  }
`

const LandscapeMobile = styled.div`
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
  border: 1px solid black;
  border-radius: 3px;
  background: white;
  padding: 2px > svg {
    margin: 0;
  }
  @media screen and (orientation: landscape) and (min-device-width: 319px) and (max-device-width: 780px) {
    display: inline-flex;
  }
`
const Normal = styled.div`
  display: block;
  @media screen and (orientation: landscape) and (min-device-width: 319px) and (max-device-width: 780px) {
    display: none;
  }
`

// const Normal = styled.header`
//   @media only screen and (max-width : 768px) {
//     display: block
//   }
// `

const Header = ({ siteTitle, onMenuToggle }) => {
  return (
    <>
      <LandscapeMobile>
        <FaBars onClick={onMenuToggle} size="1.5em" />
      </LandscapeMobile>
      <StyledHeader>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0.3rem`,
          }}
        >
          <div>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
            </h1>
          </div>
        </div>
      </StyledHeader>
    </>
  )
}

export default Header

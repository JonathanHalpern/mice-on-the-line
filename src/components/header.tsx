import { Link } from "gatsby"
import React from "react"
import { FaBars } from "react-icons/fa"
import SignIn from "../components/signIn"
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
  @media screen and (orientation: landscape) and (min-device-width: 319px) and (max-device-width: 780px) {
    display: block;
  }
`

const BurgerWrapper = styled.div`
  display: inline-flex;
  border: 1px solid black;
  border-radius: 3px;
  background: white;
  padding: 2px > svg {
    margin: 0;
  }
  cursor: pointer;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0.3rem;
  ${BurgerWrapper} {
    color: white;
    border: none;
    background: none;
  }
`

const Title = styled.h1`
  margin: 0;
  display: inline-block;
  margin-left: 20px;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const BurgerMenu = ({ onClick }) => (
  <BurgerWrapper>
    <FaBars onClick={onClick} size="1.7em" />
  </BurgerWrapper>
)

const Header = ({ siteTitle, onMenuToggle }) => {
  return (
    <>
      <LandscapeMobile>
        <BurgerMenu onClick={onMenuToggle} />
      </LandscapeMobile>
      <StyledHeader>
        <Content>
          <BurgerMenu onClick={onMenuToggle} />
          <Title>
            <StyledLink to="/">{siteTitle}</StyledLink>
          </Title>
          <SignIn />
        </Content>
      </StyledHeader>
    </>
  )
}

export default Header

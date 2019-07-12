import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { FaTimesCircle } from "react-icons/fa"

const Container = styled.div`
  position: fixed;
  width: 100%;
  background: #f16666;
  z-index: 100;
  padding: 10px;
  border-bottom: 1px solid #eee;
  transform: translateY(0);
  @keyframes slideInFromLeft {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: 0.5s ease-out 0s 1 slideInFromLeft;
`

const IconContainer = styled.div`
  cursor: pointer;
  display: inline-block;
`

const LinkList = styled.ul`
  list-style: none;
  margin: 5px 0 0 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
]

const sideBar = ({ onClose }) => {
  return (
    <Container>
      <IconContainer onClick={onClose}>
        <FaTimesCircle size="1.5em" color="white" />
      </IconContainer>
      <LinkList>
        {pages.map(page => (
          <li key={page.link}>
            <StyledLink to={page.link}>{page.title}</StyledLink>
          </li>
        ))}
      </LinkList>
    </Container>
  )
}

export default sideBar

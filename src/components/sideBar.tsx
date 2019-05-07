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
`

const StyledLink = styled(Link)`
  display: block;
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
      <FaTimesCircle onClick={onClose} size="1.5em" />
      {pages.map(page => (
        <StyledLink to={page.link} key={page.link}>
          {page.title}
        </StyledLink>
      ))}
    </Container>
  )
}

export default sideBar

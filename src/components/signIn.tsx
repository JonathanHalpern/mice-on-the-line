// ./src/components/SignIn/index.js
import React, { cloneElement } from "react"
import styled from "@emotion/styled"
import Auth from "../containers/Auth"

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 10px;
  color: rgba(0, 0, 0, 0.54);
  border: none;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  transition: color 200ms linear;
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`

const SignIn = ({ icon, text }) => {
  return (
    <Auth>
      {auth => {
        const onClick = () => {
          auth.isAuthed ? auth.signOut() : auth.signIn("google")
        }
        return (
          <Container onClick={onClick}>
            sign {auth.isAuthed ? "out" : "in"}
            {icon && cloneElement(icon)}
            <span>{text}</span>
          </Container>
        )
      }}
    </Auth>
  )
}
export default SignIn

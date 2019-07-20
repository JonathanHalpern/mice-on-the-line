// ./src/components/SignIn/index.js
import React, { useState, useCallback, FC } from "react"
import styled from "@emotion/styled"
import Modal from "@material-ui/core/Modal"
import Auth from "../containers/Auth"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const SignIn: FC = () => {
  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    console.log("clise")
    setOpen(false)
  }

  const attemptSignIn = auth => async () => {
    console.log(email, password)
    try {
      await auth.signIn({ email, password })
      console.log("success")
      handleClose()
    } catch (error) {
      console.log("fail")
    }
  }

  const onAuthClick = auth => {
    auth.isAuthed ? auth.signOut() : handleOpen()
  }

  return (
    <Auth>
      {auth => {
        return (
          <>
            <Button
              onClick={() => {
                onAuthClick(auth)
              }}
              color="primary"
              variant="contained"
            >
              sign {auth.isAuthed ? "out" : "in"}
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <Paper>
                <Title id="modal-title">Sign In</Title>
                <StyledForm noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value)
                    }}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value)
                    }}
                    margin="normal"
                  />
                  <br />
                  <ButtonBar>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={attemptSignIn(auth)}
                    >
                      Sign In
                    </Button>
                    <Button variant="contained" onClick={handleClose}>
                      Cancel
                    </Button>
                  </ButtonBar>
                </StyledForm>
              </Paper>
            </Modal>
          </>
        )
      }}
    </Auth>
  )
}

const Paper = styled.div`
  position: absolute;
  background-color: white;
  border: 2px solid #000;
  padding: 20px;
  outline: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const Title = styled.h2`
  margin: 0;
  text-align: center;
`

const StyledForm = styled.form`
  margin: 0;
`

const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  button {
    flex: 1;
    :not(:last-child) {
      margin-right: 20px !important;
    }
  }
`

export default SignIn

import React, { useState } from "react"
import styled from "@emotion/styled"

const { API } = process.env

const contactEmail = "natnatwoodward@gmail.com"

const StyledForm = styled.form`
  > input {
    display: block;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
  }
`

const contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSent, setIsSent] = useState(false)
  const [isErrored, setIsErrored] = useState(false)

  const handleSubmit = evt => {
    evt.preventDefault()
    fetch(`${API}/contactForm`, {
      method: "post",
      body: JSON.stringify({
        name,
        to: contactEmail,
        from: email,
        message,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw response
        }
        setIsSent(true)
        console.log(response)
      })
      .catch(err => {
        setIsErrored(true)
        console.log(err)
      })
      .finally(() => {
        setEmail("")
        setName("")
        setMessage("")
      })
  }

  return (
    <>
      <h3>Send a message</h3>
      <StyledForm onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <p>Email</p>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <p>Message</p>
        <textarea
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </StyledForm>
      {isSent && <p>Thanks for messaging, I'll be in touch</p>}
      {isErrored && (
        <p>Sorry, there was a problem sending your message, try again later</p>
      )}
    </>
  )
}

export default contact

import React, { FC, useState, useRef, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from "./header"
import Footer from "./footer"
import SideBar from "./sideBar"
import Auth from "../containers/Auth"
import SignIn from "../components/signIn"
import GoogleIcon from "../components/google"
import "./layout.css"
import "../style/font-face.css"

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`

const OuterWrapper = styled.main`
  flex: 1;
  background: #fff;
  overflow-y: scroll;
`

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
`

const StyledGoogleIcon = styled(GoogleIcon)`
  margin-right: 5px;
`

const Layout: FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const containerRef = useRef(null)

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Global
            styles={css`
              p {
                color: #4f464f;
              }
              h1 {
                color: #6367a7;
              }
            `}
          />
          <BodyWrapper ref={containerRef}>
            <Header
              siteTitle={data.site.siteMetadata.title}
              onMenuToggle={() => {
                setShowMenu(!showMenu)
              }}
            />
            <OuterWrapper>
              <Auth>
                {auth => {
                  console.log(auth)
                  return auth.isAuthed ? (
                    <Wrapper>{children}</Wrapper>
                  ) : (
                    <p>Need to sign in</p>
                  )
                }}
              </Auth>
            </OuterWrapper>
            <Footer />
            {showMenu && (
              <SideBar
                onClose={() => {
                  setShowMenu(false)
                }}
              />
            )}

            <ToastContainer />
          </BodyWrapper>
        </>
      )}
    />
  )
}

export default Layout

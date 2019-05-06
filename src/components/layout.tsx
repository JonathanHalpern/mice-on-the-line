import React, { FC } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import Header from "./header"
import Footer from "./footer"
import ScrollLock from "react-scrolllock"
import "./layout.css"
import "../style/font-face.css"

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const OuterWrapper = styled.main<Props>`
  flex: 1;
  background: #fff5ff;
  padding: 10px;
  /* padding-top: 48px; */
  /* ${({ isScrollLockActive }) =>
    !isScrollLockActive && `overflow-y: scroll`} */
`

const Wrapper = styled.div`
  max-width: 940px;
  margin: 0 auto;
  height: 100%;
`
type Props = {
  isScrollLockActive: boolean
}

const Layout: FC<Props> = ({ children, isScrollLockActive }) => (
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
      <ScrollLock isActive={isScrollLockActive}>
        <Global
          styles={css`
            * {
              color: #4f464f;
            }
            h1 {
              color: #6367a7;
            }
          `}
        />
        <BodyWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <OuterWrapper isScrollLockActive={isScrollLockActive}>
            <Wrapper>{children}</Wrapper>
          </OuterWrapper>
          <Footer />
        </BodyWrapper>
      </ScrollLock>
    )}
  />
)

export default Layout

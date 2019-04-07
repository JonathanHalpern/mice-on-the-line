/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { FC } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

import Header from "./header"
import ScrollLock from "react-scrolllock"
import "./layout.css"

const Layout: FC = ({ children }) => (
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
      <ScrollLock>
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
        <Header siteTitle={data.site.siteMetadata.title} />

        <main>{children}</main>
      </ScrollLock>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

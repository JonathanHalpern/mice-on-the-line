/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// ./gatsby-browser.js
/* eslint-disable react/prop-types, import/no-extraneous-dependencies */
import React from "react"
import FirebaseProvider from "./src/containers/FirebaseProvider"

import firebase from "./src/services/firebase"

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = (
    <FirebaseProvider firebase={firebase}>{element}</FirebaseProvider>
  )

  return ConnectedRootElement
}

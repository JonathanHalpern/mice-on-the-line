import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" keywords={[`contact`]} />
    <p>Contact form will go here</p>
  </Layout>
)

export default ContactPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout isScrollLockActive={false}>
    <SEO title="Contact" keywords={[`contact`]} />
    <p>Contact form will go here</p>
  </Layout>
)

export default ContactPage

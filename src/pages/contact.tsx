import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"

const ContactWrapper = styled.div`
  padding: 20px;
`

const ContactPage = () => (
  <Layout isScrollLockActive={false}>
    <SEO title="Contact" keywords={[`contact`]} />
    <ContactWrapper>
      <Contact />
    </ContactWrapper>
  </Layout>
)

export default ContactPage

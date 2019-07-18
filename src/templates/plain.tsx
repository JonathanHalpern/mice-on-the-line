import React, { FC } from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Layout from "../containers/Layout"
import SEO from "../components/seo"

const Container = styled.div`
  padding: 20px;
`

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
      }
      html: string
      excerpt: string
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const PlainTemplate: FC<Props> = ({ data }) => {
  const content = data.markdownRemark
  return (
    <Layout>
      <SEO title={content.frontmatter.title} description={content.excerpt} />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </Container>
    </Layout>
  )
}

export default PlainTemplate

export const plainQuery = graphql`
  query plainById($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        name
        title
      }
    }
  }
`

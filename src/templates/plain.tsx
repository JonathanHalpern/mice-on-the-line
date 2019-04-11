import React, { FC } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
    <Layout isScrollLockActive={false}>
      <SEO title={content.frontmatter.title} description={content.excerpt} />
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
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

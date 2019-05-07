import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Book from "../components/book"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BookWrapper = styled.div`
  padding: 10px;
  height: 100%;
  width: 100%;
`

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        description: string
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

class BlogPostTemplate extends React.Component<Props> {
  render() {
    const post = this.props.data.markdownRemark
    const { coverImage } = post.frontmatter
    const pages = post.html.split("<!--break-->")

    return (
      <Layout isScrollLockActive={false}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <BookWrapper>
          <Book pages={pages} coverImage={coverImage} />
        </BookWrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query storyById($id: String!) {
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
        title
        description
        coverImage {
          childImageSharp {
            fluid(maxWidth: 380) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

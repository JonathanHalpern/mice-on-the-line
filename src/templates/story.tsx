import React from "react"
import styled from "@emotion/styled"
import { Link, graphql } from "gatsby"
import Book from "../components/book"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"

const Title = styled.h1`
  text-align: center;
  margin: 0 0 60px 0;
`

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #fff5ff;
  padding: 30px;
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
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Wrapper>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Title>{post.frontmatter.title}</Title>
        <Book />
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      </Wrapper>
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
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

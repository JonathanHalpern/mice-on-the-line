import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Book from "../components/book"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const Outer = styled.div`
  overflow: hidden;
`

const Wrapper = styled.div`
  /* width: 100vw;
  /* height: 100vh; */
  height: 100%;
  background: #fff5ff;
  padding: 15px 40px;
  */ h1 {
    color: #6367a7;
    text-align: center;
    margin-bottom: 80px;
    font-size: 46px;
  }
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
    const pages = post.html.split("<!--break-->")
    console.log(post.html)
    console.log(pages)

    return (
      <Layout>
        <Wrapper>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />

          <Book pages={pages} />
        </Wrapper>
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
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

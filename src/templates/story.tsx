import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Book from "../components/book"
import Layout from "../containers/Layout"
import SEO from "../components/seo"
import Auth from "../containers/Auth"
import SignIn from "../components/signIn"

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

const BlogPostTemplate = props => {
  const audioTracks = props.data.audios.edges
    .map(edge => edge.node)
    .sort((a, b) => a.name - b.name)
  const post = props.data.markdownRemark
  const { coverImage } = post.frontmatter
  const pages = post.html.split("<!--break-->")

  return (
    <Layout isScrollLockActive={false}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Auth>
        {auth => {
          return auth.isAuthed ? (
            <BookWrapper>
              <Book
                pages={pages}
                coverImage={coverImage}
                audioTracks={audioTracks}
              />
            </BookWrapper>
          ) : (
            <CentreContent>
              <SignInMessage>
                Sign in to read stories! If you do not have a password, contact
                Natalie via the Contact page.
              </SignInMessage>
              <SignIn />
            </CentreContent>
          )
        }}
      </Auth>
    </Layout>
  )
}

export default BlogPostTemplate

const CentreContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SignInMessage = styled.p`
  margin-top: 30px;
  font-size: 16px;
`

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
    audios: allFile(
      filter: { extension: { eq: "mp3" }, relativeDirectory: { eq: $id } }
    ) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`

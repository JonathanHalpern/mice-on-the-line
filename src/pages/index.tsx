import React, { FC } from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { StoryData } from "../../types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tube from "../components/tube"
import { ToastContainer } from "react-toastify"

const Container = styled.div`
  background: white;
  margin: auto;
  width: 100%;
  height: 100%;
`
type Props = {
  data: StoryData
}

const IndexPage: FC<Props> = ({ data }) => (
  <Layout isScrollLockActive={true}>
    <ToastContainer />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Tube
        storiesMeta={data.allMarkdownRemark.edges.map(
          edge => edge.node.frontmatter
        )}
      />
    </Container>
  </Layout>
)

export const IndexPageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "story" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            id
            description
            x
            y
            previewImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage

import React, { FC } from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { StoryData } from "../../types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tube from "../components/tube"

const Container = styled.div`
  background: white;
`
type Props = {
  data: StoryData
}

const IndexPage: FC<Props> = ({ data }) => (
  <Layout isScrollLockActive={true}>
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
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            id
            description
            x
            y
          }
        }
      }
    }
  }
`

export default IndexPage

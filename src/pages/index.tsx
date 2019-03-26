import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Svg from "../components/tube"

const IndexPage = ({ data }) => (
  <Layout>
    {console.log(data)}
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Svg
      storiesMeta={data.allMarkdownRemark.edges.map(
        edge => edge.node.frontmatter
      )}
    />
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
          }
        }
      }
    }
  }
`

export default IndexPage

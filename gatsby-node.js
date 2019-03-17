const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/story.tsx`)
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              title
              id
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      const { id } = edge.node.frontmatter
      createPage({
        path: `/${id}`,
        component: blogPostTemplate,
        context: {
          id,
        },
      })
    })
  })
}

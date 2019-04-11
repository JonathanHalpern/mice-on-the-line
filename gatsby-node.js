const path = require(`path`)

const getTemplate = templateKey => {
  switch (templateKey) {
    case "story":
      return path.resolve(`src/templates/story.tsx`)
    case "plain":
      return path.resolve(`src/templates/plain.tsx`)
    default:
      return false
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              title
              id
              templateKey
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
      const { id, templateKey } = edge.node.frontmatter
      const component = getTemplate(templateKey)
      if (component) {
        createPage({
          path: `/${id}`,
          component,
          context: {
            id,
          },
        })
      }
    })
  })
}

export type Story = {
  id: string
  title: string
  description: string
}

export type StoryEdge = {
  node: {
    frontmatter: Story
  }
}

export type StoryData = {
  allMarkdownRemark: {
    edges: StoryEdge[]
  }
}

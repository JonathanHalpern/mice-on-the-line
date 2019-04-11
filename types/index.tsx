export type Story = {
  id: string
  title: string
  description: string
  x: number
  y: number
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

module.exports = {
  createLocationField: (layoutName, node, createNodeField) => {
    if (node.frontmatter.layout == layoutName) {
      return createNodeField({
        node,
        name: `location`,
        value: layoutName,
      })
    }
  },
  filterEdgesByLayout: (layout, queryResult) => {
    return queryResult.data.allMarkdownRemark.edges.filter(
      edge => edge.node.frontmatter.layout === layout
    )
  },
}

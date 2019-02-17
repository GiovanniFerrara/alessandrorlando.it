const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const {
  createLocationField,
  filterEdgesByLayout,
} = require('./utils/functions')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    // Create a location field from frontmatter.layout
    createLocationField('photography', node, createNodeField)
    createLocationField('music', node, createNodeField)
    createLocationField('video', node, createNodeField)
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const GalleryTemplate = path.resolve(`src/Templates/GalleryTemplate/index.js`)
  const AlbumTemplate = path.resolve(`src/Templates/AlbumTemplate/index.js`)

  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  return graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//" } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              layout
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const photographyEdges = filterEdgesByLayout('photography', result)
    const musicEdges = filterEdgesByLayout('music', result)
    // Create the pages for each  photographic album added
    photographyEdges.forEach(edge => {
      createPage({
        path: `${edge.node.fields.slug}`,
        component: GalleryTemplate,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
    // Create the pages for each  music album added
    musicEdges.forEach(edge => {
      createPage({
        path: `${edge.node.fields.slug}`,
        component: AlbumTemplate,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
  })
}

import React from 'react'
import { graphql } from 'gatsby'
import PhotographySub from '../../../components/PhotographySub'

const Component = PhotographySub()

const Index = ({ data }) => {
  return (
    <div>
      <Component data={data} />
    </div>
  )
}

export default Index

export const pagequery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { category: { regex: "/infront/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover
            category
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`

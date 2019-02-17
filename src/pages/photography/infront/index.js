import React from 'react'
import { graphql } from 'gatsby'
import PhotographySub from '../../../components/PhotographySub'
import Img from 'gatsby-image'

const Index = ({ data }) => {
  return (
    <div>
      <PhotographySub data={data} />
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
            cover {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  src
                }
              }
            }
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

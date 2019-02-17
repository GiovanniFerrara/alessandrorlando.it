import React from 'react'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import commons from '../../../content/pages/commons.yaml'
import Gallery from '../../components/Gallery'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Index = ({ data }) => {
  return (
    <div>
      <Layout page="music">
        <FullWidthBackground
          srcMobile={commons.backgroundMobile}
          srcDesktop={commons.backgroundDesktop}
        >
          <Gallery array={data.allMarkdownRemark.edges} />
        </FullWidthBackground>
      </Layout>
    </div>
  )
}

export default Index

export const pagequery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { regex: "/music/" } } }
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
          }
          fields {
            location
            slug
          }
        }
      }
    }
  }
`

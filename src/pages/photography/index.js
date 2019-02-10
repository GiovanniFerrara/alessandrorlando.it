import React from 'react'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import commons from '../../../content/pages/commons.yaml'
import { graphql } from 'gatsby'
import Gallery from '../../components/Gallery'

const Index = ({ data }) => {
  return (
    <div>
      <Layout>
        <FullWidthBackground
          srcMobile={commons.backgroundMobile}
          srcDesktop={commons.backgroundDesktop}
        >
          <Gallery array={data.allMarkdownRemark.photos} />
        </FullWidthBackground>
      </Layout>
    </div>
  )
}

export default Index

export const pagequery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { category: { regex: "/photography/" } } }
    ) {
      photos: edges {
        photo: node {
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

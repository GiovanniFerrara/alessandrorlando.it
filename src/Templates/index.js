import React from 'react'
import './style.scss'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import FullWidthBackground from '../components/FullWidthBackground'
import commons from '../../content/pages/commons.yaml'

const GalleryTemplate = ({ data }) => {
  return (
    <Layout>
      <FullWidthBackground
        srcMobile={commons.backgroundMobile}
        srcDesktop={commons.backgroundDesktop}
      >
        <div className="gallery-template">
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          ;
        </div>
      </FullWidthBackground>
    </Layout>
  )
}

export default GalleryTemplate

export const queryGallery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

import React from 'react'
import './style.scss'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import FullWidthBackground from '../components/FullWidthBackground'
import commons from '../../content/pages/commons.yaml'
import BackButton from '../components/BackButton'
const GalleryTemplate = props => {
  console.log(props)
  return (
    <Layout>
      <FullWidthBackground
        srcMobile={commons.backgroundMobile}
        srcDesktop={commons.backgroundDesktop}
      >
        <BackButton
          linkTo={props.data.markdownRemark.frontmatter.category}
          hRef={`photography/${props.data.markdownRemark.frontmatter.category}`}
        />

        <div className="gallery-template">
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
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
        category
      }
    }
  }
`

import React from 'react'
import './style.scss'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import commons from '../../../content/pages/commons.yaml'
import BackButton from '../../components/BackButton'
import GalleryColumns from './../../components/GalleryColumns'
import PropTypes from 'prop-types'

const GalleryTemplate = props => {
  console.log(props)
  return (
    <Layout page={props.data.markdownRemark.fields.location}>
      <FullWidthBackground
        srcMobile={commons.backgroundMobile}
        srcDesktop={commons.backgroundDesktop}
      >
        <BackButton
          linkTo={props.data.markdownRemark.frontmatter.category}
          hRef={`photography/${props.data.markdownRemark.frontmatter.category}`}
        />
        <GalleryColumns pics={props.data.markdownRemark.frontmatter.pics} />
      </FullWidthBackground>
    </Layout>
  )
}

export default GalleryTemplate

// GalleryTemplate.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       html: PropTypes.string,
//       frontmatter: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         category: PropTypes.string.isRequired,
//         pics: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// }

export const queryGallery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        pics {
          picture {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          description
        }
      }
      fields {
        location
      }
    }
  }
`

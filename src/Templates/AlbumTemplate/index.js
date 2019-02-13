import React from 'react'
import './style.scss'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import commons from '../../../content/pages/commons.yaml'
import BackButton from '../../components/BackButton'

const GalleryTemplate = props => {
  console.log(props)
  return (
    <Layout
      page={
        props.data.markdownRemark.fields.location
          ? props.data.markdownRemark.fields.location
          : ''
      }
    >
      <FullWidthBackground
        srcMobile={commons.backgroundMobile}
        srcDesktop={commons.backgroundDesktop}
      >
        <BackButton linkTo={'Music'} hRef={`music/`} />
        <div className="gallery-template container row">
          <div className="col-lg-6">
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
            <img src={props.data.markdownRemark.frontmatter.cover} />
          </div>
          <div className="col-lg-6">
            <h2>Testi</h2>
            <ul>
              {props.data.markdownRemark.frontmatter.songs.map(item => (
                <li>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </FullWidthBackground>
    </Layout>
  )
}

export default GalleryTemplate

export const queryGallery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        cover
        title
        songs {
          title
          text
        }
      }
      fields {
        slug
      }
    }
  }
`

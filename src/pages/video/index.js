import React from 'react'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import EmbeddedVideo from '../../components/EmbeddedVideo'
import commons from '../../../content/pages/commons.yaml'
import video from '../../../content/pages/video.yaml'
import { graphql } from 'gatsby'
import Gallery from '../../components/Gallery'

const Index = ({ data }) => {
  const dataArray = [
    {
      node: {
        frontmatter: {
          cover: video.coverClip,
          title: video.titleClip,
        },
        fields: {
          slug: 'clip',
        },
      },
    },
    {
      node: {
        frontmatter: {
          cover: video.coverStage,
          title: video.titleStage,
        },
        fields: {
          slug: 'stage',
        },
      },
    },
    {
      node: {
        frontmatter: {
          cover: video.coverHome,
          title: video.titleHome,
        },
        fields: {
          slug: 'home',
        },
      },
    },
  ]
  return (
    <div>
      <Layout>
        <FullWidthBackground
          srcMobile={commons.backgroundMobile}
          srcDesktop={commons.backgroundDesktop}
        >
          <Gallery array={dataArray} page={'video/'} />
        </FullWidthBackground>
      </Layout>
    </div>
  )
}

export default Index

export const pagequery = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/video/" } }) {
      edges {
        node {
          frontmatter {
            title
            category
            link
          }
          html
          fields {
            slug
          }
        }
      }
    }
  }
`

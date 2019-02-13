import React from 'react'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import commons from '../../../content/pages/commons.yaml'
import { graphql } from 'gatsby'
const Index = ({ data }) => {
  return (
    <div>
      <Layout page="concerts&events">
        <FullWidthBackground
          srcMobile={commons.backgroundMobile}
          srcDesktop={commons.backgroundDesktop}
        >
          <div
            className="container"
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.posts[0].post.html,
            }}
          />
        </FullWidthBackground>
      </Layout>
    </div>
  )
}

export default Index

export const pagequery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/concertsevents/" } }
    ) {
      posts: edges {
        post: node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`

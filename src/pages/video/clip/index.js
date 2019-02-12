import React from 'react'
import { graphql } from 'gatsby'
import VideoSub from '../../../components/VideoSub'

const Component = VideoSub()
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
      filter: { frontmatter: { category: { regex: "/clip/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            link
            category
          }
          html
        }
      }
    }
  }
`

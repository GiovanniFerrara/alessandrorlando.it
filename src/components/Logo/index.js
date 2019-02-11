import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/logo/" }) {
          childImageSharp {
            fixed(width: 240) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div className="logo-wrapper">
        <Img
          style={{
            position: 'absolute',
            marginBottom: 0,
          }}
          className="logo-img"
          fixed={data.file.childImageSharp.fixed}
        />
      </div>
    )}
  />
)

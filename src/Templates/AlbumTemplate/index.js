import React, { Component } from 'react'
import './style.scss'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import commons from '../../../content/pages/commons.yaml'
import BackButton from '../../components/BackButton'
import SongList from './SongList'

class AlbumTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songSelect: 0,
    }
  }
  handleSongClick = e => {
    console.log(e.target.id)
    this.setState({
      songSelect: e.target.id,
    })
  }
  render() {
    const props = this.props
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
            <SongList
              songs={props.data.markdownRemark.frontmatter.songs}
              songSelect={this.state.songSelect}
              handleSongClick={this.handleSongClick}
            />
          </div>
        </FullWidthBackground>
      </Layout>
    )
  }
}

export default AlbumTemplate

export const queryGallery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        cover
        title
        songs {
          title
          text
          link
        }
      }
      fields {
        slug
      }
    }
  }
`

import React, { Component } from 'react'
import './style.scss'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import commons from '../../../content/pages/commons.yaml'
import BackButton from '../../components/BackButton'
import SongList from './SongList'
import Lyrics from './Lyrics'
import AlbumInfo from './AlbumInfo'

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
          <div className="album-template container">
            <SongList
              songs={props.data.markdownRemark.frontmatter.songs}
              songSelect={this.state.songSelect}
              handleSongClick={this.handleSongClick}
            />
            <AlbumInfo
              link={
                props.data.markdownRemark.frontmatter.songs[
                  this.state.songSelect
                ].link
              }
              cover={props.data.markdownRemark.frontmatter.cover}
              title={props.data.markdownRemark.frontmatter.title}
              image={
                props.data.markdownRemark.frontmatter.songs[
                  this.state.songSelect
                ].image
              }
            />
            <Lyrics
              song={
                props.data.markdownRemark.frontmatter.songs[
                  this.state.songSelect
                ]
              }
              songSelect={
                props.data.markdownRemark.frontmatter.songs[
                  this.state.songSelect
                ]
              }
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
          image
        }
      }
      fields {
        slug
        location
      }
    }
  }
`

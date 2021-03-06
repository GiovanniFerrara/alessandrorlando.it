import React, { Component } from 'react'
import './style.scss'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import commons from '../../../content/pages/commons.yaml'
import BackButton from '../../components/BackButton'
import SongList from '../../components/SongList'
import Lyrics from '../../components/Lyrics'
import AlbumInfo from '../../components/AlbumInfo'
import Img from 'gatsby-image'

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
          <div className="album-template container">
            <SongList
              songs={props.data.markdownRemark.frontmatter.songs}
              songSelect={this.state.songSelect}
              handleSongClick={this.handleSongClick}
              title={props.data.markdownRemark.frontmatter.title}
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
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              src
            }
          }
        }
        title
        songs {
          titleSong
          text
          link
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
                src
              }
            }
          }
        }
      }
      fields {
        slug
        location
      }
    }
  }
`

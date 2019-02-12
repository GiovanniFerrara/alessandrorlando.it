import React from 'react'
import './style.scss'
import SingleVideo from './SingleVideo'

const EmbeddedVideo = ({ videos }) => {
  const videosArray = videos.map(video => ({
    category: video.node.frontmatter.category,
    link: video.node.frontmatter.link,
    title: video.node.frontmatter.title,
    description: video.node.frontmatter.title,
  }))
  return (
    <div className="embedded-video row center container justify-content-around">
      {videosArray.map(video => (
        <SingleVideo key={video.title} video={video} />
      ))}
    </div>
  )
}

export default EmbeddedVideo

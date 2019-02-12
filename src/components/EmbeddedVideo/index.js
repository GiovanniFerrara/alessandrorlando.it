import React from 'react'
import './style.scss'
import SingleVideo from './SingleVideo'

const EmbeddedVideo = ({ link }) => {
  return (
    <div className="embedded-video row center container justify-content-around">
      <SingleVideo link={link} />
      <SingleVideo link={link} />
      <SingleVideo link={link} />
    </div>
  )
}

export default EmbeddedVideo

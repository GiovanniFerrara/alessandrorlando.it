import React from 'react'

import './style.scss'
const SingleVideo = ({ link }) => {
  return (
    <div className="col-lg-5 single-video embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={link}
        frameborder="0"
        allow="accelerometer;autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  )
}

export default SingleVideo

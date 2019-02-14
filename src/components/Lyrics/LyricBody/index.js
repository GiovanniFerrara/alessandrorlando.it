import React, { Fragment } from 'react'
import './style.scss'

const LyricBody = ({ text }) => {
  return (
    <div className="lyric-body" dangerouslySetInnerHTML={{ __html: text }} />
  )
}

export default LyricBody

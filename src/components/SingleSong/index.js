import React from 'react'
import './style.scss'
const SingleSong = ({ title, id, handleSongClick, songSelect }) => {
  return (
    <li
      className={`single-song ${songSelect == id ? 'active' : ''}`}
      id={id}
      onClick={handleSongClick}
    >
      {title}
    </li>
  )
}

export default SingleSong

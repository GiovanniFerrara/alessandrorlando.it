import React, { Fragment } from 'react'
import './style.scss'
import SingleSong from '../SingleSong'
import LyricBody from './LyricBody'

const SongList = ({ song, songSelect }) => {
  return (
    <div className="lyrics__wrapper">
      <div className="lyrics__title">
        <h5> {song.title} </h5>
      </div>
      <LyricBody text={song.text} />
    </div>
  )
}

export default SongList

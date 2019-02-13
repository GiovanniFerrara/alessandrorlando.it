import React, { Fragment } from 'react'
import './style.scss'
import SingleSong from '../SingleSong'
import LyricBody from './LyricBody'

const SongList = ({ song, songSelect }) => {
  return (
    <div className="lyrics__wrapper">
      <SingleSong
        title={song.title}
        songSelect={songSelect}
        handleSongClick={() => {}}
      />
      <LyricBody text={song.text} />
    </div>
  )
}

export default SongList

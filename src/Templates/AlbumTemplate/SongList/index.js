import React, { Fragment } from 'react'
import './style.scss'
import SingleSong from '../SingleSong'

const SongList = ({ songs, songSelect, handleSongClick }) => {
  return (
    <div>
      <ul className="song-list__wrapper">
        {songs.map((song, i) => (
          <SingleSong
            key={'song' + i}
            id={i}
            title={song.title}
            songSelect={songSelect}
            handleSongClick={handleSongClick}
          />
        ))}
      </ul>
    </div>
  )
}

export default SongList

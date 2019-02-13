import React, { Fragment } from 'react'
import './style.scss'
import SingleSong from '../SingleSong'

const SongList = ({ songs, songSelect, handleSongClick }) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default SongList

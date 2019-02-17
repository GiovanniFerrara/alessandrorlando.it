import React, { Fragment } from 'react'
import './style.scss'
import SingleSong from '../SingleSong'

const SongList = ({ songs, songSelect, handleSongClick, title }) => {
  return (
    <Fragment>
      <ul className="song-list__wrapper">
        <div className="song-list__title">
          <h2> {title} </h2>
        </div>
        {songs.map((song, i) => (
          <SingleSong
            key={'song' + i}
            id={i}
            title={song.titleSong}
            songSelect={songSelect}
            handleSongClick={handleSongClick}
          />
        ))}
      </ul>
    </Fragment>
  )
}

export default SongList

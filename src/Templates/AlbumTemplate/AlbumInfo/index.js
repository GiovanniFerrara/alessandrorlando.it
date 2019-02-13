import React from 'react'
import Iframe from './Iframe'
import './style.scss'

const AlbumInfo = ({ link, image, cover, title }) => {
  return (
    <div className="album-info__wrapper">
      <Iframe link={link} />
      <img
        style={{
          width: '100%',
        }}
        src={image ? image : cover}
        alt={title}
      />
    </div>
  )
}

export default AlbumInfo

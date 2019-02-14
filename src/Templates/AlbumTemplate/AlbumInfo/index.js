import React from 'react'
import Iframe from './Iframe'
import './style.scss'

const AlbumInfo = ({ link, image, cover, title }) => {
  return (
    <div className="album-info__wrapper">
      <img
        className="album-info__img"
        src={image ? image : cover}
        alt={title}
      />
      <Iframe link={link} />
    </div>
  )
}

export default AlbumInfo

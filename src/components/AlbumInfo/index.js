import React from 'react'
import Iframe from './Iframe'
import './style.scss'

const AlbumInfo = ({ link, image, cover, title }) => {
  let src
  if (image) {
    if (image.childImageSharp) {
      src = image.childImageSharp.fluid.src || image
    }
  } else {
    if (cover.childImageSharp) {
      src = cover.childImageSharp.fluid.src || cover
    }
  }

  return (
    <div className="album-info__wrapper">
      <img className="album-info__img" src={src} alt={title} />
      <Iframe link={link} />
    </div>
  )
}

export default AlbumInfo

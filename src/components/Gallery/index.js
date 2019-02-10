import React from 'react'
import Image from './Image'
import './style.scss'

const Gallery = ({ array }) => {
  return (
    <div className="gallery__wrapper">
      {array.map(item => {
        console.log(item.photo.frontmatter.cover)
        return (
          <Image
            key={item}
            src={item.photo.frontmatter.cover}
            title={item.photo.frontmatter.title}
            alt={item.photo.frontmatter.category}
            href={item.photo.fields.slug}
          />
        )
      })}
    </div>
  )
}

export default Gallery

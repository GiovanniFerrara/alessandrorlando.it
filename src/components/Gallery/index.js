import React from 'react'
import Image from './Image'
import './style.scss'
import BackButton from '../BackButton'

const Gallery = ({
  array = [
    ({
      photo: {
        frontmatter: { slug = '', title = '', category = '' },
      },
    } = {}),
  ],
}) => {
  return (
    <div className="gallery__wrapper">
      <BackButton hRef="photography" linkTo="photography" />
      {array.map(item => {
        return (
          <Image
            key={item.photo.frontmatter.slug}
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

import React from 'react'
import Image from '../Image'
import './style.scss'

const Gallery = ({
  array = [
    ({
      node: {
        frontmatter: { slug = '', title = '', category = '' },
      },
    } = {}),
  ],
  page = '',
}) => {
  return (
    <div className="gallery__wrapper container">
      {array.map(item => {
        return (
          <Image
            key={item.node.frontmatter.cover}
            src={item.node.frontmatter.cover}
            title={item.node.frontmatter.title}
            alt={item.node.frontmatter.category}
            href={page + item.node.fields.slug}
          />
        )
      })}
    </div>
  )
}

export default Gallery

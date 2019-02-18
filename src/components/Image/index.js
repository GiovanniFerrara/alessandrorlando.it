import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

const Image = ({ src = '', title = '', alt = '', href }) => {
  let srcImage
  if (src && src.childImageSharp) {
    srcImage = src.childImageSharp.fluid.src
  } else if (src) {
    srcImage = src
  }
  return (
    <div className="gallery_img_wrapper">
      <Link className="gallery_link__wrapper" to={href}>
        <img className="gallery_img" src={srcImage} alt={alt} />
        <figcaption>{title}</figcaption>
      </Link>
    </div>
  )
}

export default Image

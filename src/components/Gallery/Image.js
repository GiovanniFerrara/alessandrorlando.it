import React from 'react'
import Link from 'gatsby-link'
const Image = ({ src, title = '', alt = '', href }) => {
  return (
    <div className="gallery_img_wrapper">
      <Link className="gallery_link__wrapper" to={'photography/' + href}>
        <img className="gallery_img" src={src} alt={alt} />
        <figcaption>{title}</figcaption>
      </Link>
    </div>
  )
}

export default Image

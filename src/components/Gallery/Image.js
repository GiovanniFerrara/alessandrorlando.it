import React from 'react'
import Link from 'gatsby-link'
const Image = ({ src, title = '', alt = '', href }) => {
  return (
    <div className="gallery_img_wrapper">
      <Link to={'photography/' + href}>
        <img className="gallery_img" src={src} title={title} alt={alt} />
      </Link>
    </div>
  )
}

export default Image

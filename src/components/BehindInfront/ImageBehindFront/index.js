import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const ImageBehindFront = ({ src, description, title = '', alt = '', href }) => {
  console.log(src)
  return (
    <div className="behind-front__wrapper">
      <Link to={'photography/' + href}>
        <img className="behind-front__img" src={src} alt={alt} />
        <figcaption className="behind-front__caption">{description}</figcaption>
      </Link>
    </div>
  )
}

export default ImageBehindFront

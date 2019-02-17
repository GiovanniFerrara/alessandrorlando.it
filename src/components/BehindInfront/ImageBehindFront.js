import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const ImageBehindFront = ({ src, title = '', alt = '', href }) => {
  console.log(src)
  return (
    <div className="behind-front__wrapper">
      <Link to={'photography/' + href}>
        <img className="behind-front__img" src={src} title={title} alt={alt} />
      </Link>
    </div>
  )
}

export default ImageBehindFront

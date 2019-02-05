import React from 'react'
import './FullScreenImg.sass'
import { Fragment } from 'react'

const FullWidthImg = ({ src, title = '', alt = '' }) => {
  return (
    <Fragment>
      <img src={src} title={title} alt={alt} />
    </Fragment>
  )
}

export default FullWidthImg

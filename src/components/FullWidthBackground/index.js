import React, { Children } from 'react'
import './style.sass'
import { Fragment } from 'react'

const FullWidthImg = ({ src, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        backgroundPosition: 'center center',
      }}
    >
      {children}
    </div>
  )
}

export default FullWidthImg

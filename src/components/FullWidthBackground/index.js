import React, { Children } from 'react'
import { Fragment } from 'react'
import Media from 'react-media'

const FullWidthImg = ({ srcDesktop, srcMobile, children }) => {
  return (
    <div>
      <Media query="(max-width: 599px)">
        <div
          style={{
            backgroundImage: `url(${srcMobile})`,
            backgroundSize: 'cover',
            height: '100vh',
            width: '100%',
            backgroundPosition: 'center center',
          }}
        >
          {children}
        </div>
      </Media>
      <Media query="(min-width: 600px)">
        <div
          style={{
            backgroundImage: `url(${srcDesktop})`,
            backgroundSize: 'cover',
            height: '100vh',
            width: '100%',
            backgroundPosition: 'center center',
          }}
        >
          {children}
        </div>
      </Media>
    </div>
  )
}

export default FullWidthImg

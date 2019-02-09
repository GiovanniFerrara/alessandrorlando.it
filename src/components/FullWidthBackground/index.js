import React, { Children } from 'react'
import { Fragment } from 'react'
import Media from 'react-media'
import './style.scss'
const FullWidthBackground = ({ srcDesktop, srcMobile, children }) => {
  return (
    <div>
      <Media query="(max-width: 599px)">
        <div
          className="full-width-background"
          style={{
            backgroundImage: `url(${srcMobile})`,
          }}
        >
          {children}
        </div>
      </Media>
      <Media query="(min-width: 600px)">
        <div
          className="full-width-background"
          style={{
            backgroundImage: `url(${srcDesktop})`,
          }}
        >
          {children}
        </div>
      </Media>
    </div>
  )
}

export default FullWidthBackground

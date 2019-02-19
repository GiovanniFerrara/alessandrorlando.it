import React, { Children } from 'react'
import { Fragment } from 'react'
import Media from 'react-media'
import './style.scss'
const FullWidthBackground = ({
  srcDesktop,
  srcMobile,
  children,
  classDom,
  classHomepage = '',
}) => {
  return (
    <div>
      <div
        className={`full-width-background ${classDom} ${classHomepage}`}
        style={{
          backgroundImage: `url(${srcDesktop})`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default FullWidthBackground

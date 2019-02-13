import React, { Children } from 'react'
import { Fragment } from 'react'
import Media from 'react-media'
import './style.scss'
const FullWidthBackground = ({ srcDesktop, srcMobile, children, classDom }) => {
  console.log(classDom)
  return (
    <div>
      <Media query="(max-width: 900px)">
        <div
          className={'full-width-background ' + classDom}
          style={{
            backgroundImage: `url(${srcMobile})`,
          }}
        >
          {children}
        </div>
      </Media>
      <Media query="(min-width: 901px)">
        <div
          className={'full-width-background ' + classDom}
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

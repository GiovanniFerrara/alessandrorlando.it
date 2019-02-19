import React from 'react'
import ImageBehindFront from './ImageBehindFront'
import './style.scss'

const BehindInfront = ({ array }) => {
  return (
    <div className="behind-front__wrapper">
      {array.map(item => {
        return (
          <ImageBehindFront
            key={item.src}
            src={item.src}
            title={item.title}
            alt={item.alt}
            href={item.href}
            description={item.description}
          />
        )
      })}
    </div>
  )
}

export default BehindInfront

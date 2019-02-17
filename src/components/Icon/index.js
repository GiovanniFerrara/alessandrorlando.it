import React from 'react'
import { IconContext } from 'react-icons'

const Icon = ({ color, size, link, children }) => {
  return (
    <div>
      <IconContext.Provider value={{ color: color, size: size }}>
        <a href={link}>{children}</a>
      </IconContext.Provider>
    </div>
  )
}

export default Icon

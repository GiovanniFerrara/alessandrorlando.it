import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import React from 'react'
import { IconContext } from 'react-icons'

const IconsHome = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: 'white', size: '80px' }}>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaFacebook />
        </a>
      </IconContext.Provider>
    </div>
  )
}

export default IconsHome

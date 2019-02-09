import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import React from 'react'
import { IconContext } from 'react-icons'

const IconsHome = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: 'white', size: '50px' }}>
        <a href="">
          <FaInstagram
            style={{
              width: '500px',
            }}
          />
        </a>
        <a href="">
          <FaFacebook />
        </a>
      </IconContext.Provider>
    </div>
  )
}

export default IconsHome

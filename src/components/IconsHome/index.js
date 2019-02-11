import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaSpotify } from 'react-icons/fa'
import React, { Fragment } from 'react'
import { IconContext } from 'react-icons'
import Icon from '../Icon'
import './style.scss'
const IconsHome = () => {
  return (
    <div className="container">
      <div className="icons-wrapper">
        <Icon
          color="#c1558b"
          link="https://www.instagram.com/ilsognodiprometeo/"
          size="55px"
        >
          <FaInstagram />
        </Icon>
        <Icon
          color="#3b5998"
          link="https://www.facebook.com/alessandrorlando/"
          size="53px"
        >
          <FaFacebook />
        </Icon>
        <Icon
          color="#1db954"
          link="https://open.spotify.com/album/4c5QhfPnSAAFCkxdBnMztS"
          size="55px"
        >
          <FaSpotify />
        </Icon>
        <Icon
          color="#e30000"
          link="https://www.youtube.com/channel/UCLos2Vm9pLVJrOUT5cGjyyA"
          size="55px"
        >
          <FaYoutube />
        </Icon>
      </div>
    </div>
  )
}

export default IconsHome

import React from 'react'
import close from '../../../../img/svg/close.svg'
import './style.scss'
const CloseButton = ({ closeModal }) => {
  return (
    <span onClick={closeModal} className="closeModal">
      <img src={close} alt="X" />
    </span>
  )
}

export default CloseButton

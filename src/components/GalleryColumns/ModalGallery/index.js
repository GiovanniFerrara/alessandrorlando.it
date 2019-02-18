import React from 'react'
import Modal from 'react-modal'
import CloseButton from './CloseButton'
import './style.scss'
const ModalGallery = ({ modalIsOpen, closeModal, modalData }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={300}
        contentLabel="Modal"
        ariaHideApp={false}
        className="modalPort"
      >
        <CloseButton closeModal={closeModal} />
        <img
          className="modal-gallery__img"
          src={modalData.src}
          alt={modalData.description}
        />
        <div className="modal-gallery__description">
          {modalData.description}
        </div>
      </Modal>
    </div>
  )
}

export default ModalGallery

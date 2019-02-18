import React, { Component, Fragment } from 'react'
import './style.scss'
import ModalGallery from './ModalGallery'

class GalleryColumns extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      modalData: {
        src: '',
        description: '',
      },
    }
  }
  openModal = data => {
    console.log(this.state)
    this.setState(() => ({
      modalIsOpen: true,
      modalData: data,
    }))
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    })
  }
  render() {
    const { pics } = this.props
    return (
      <div className="gallery-columns">
        <ModalGallery
          modalIsOpen={this.state.modalIsOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
          modalData={this.state.modalData}
        />
        {pics.map((pic, i) => {
          return (
            <div
              key={pic.description + i}
              className="gallery-columns--inner"
              onClick={() =>
                this.openModal({
                  src: pic.picture.childImageSharp.fluid.src,
                  description: pic.description,
                })
              }
            >
              <img
                className="gallery-columns__img"
                src={pic.picture.childImageSharp.fluid.src}
                alt={pic.description}
              />
              <figcaption className="gallery-columns__caption">
                {pic.description}
              </figcaption>
            </div>
          )
        })}
      </div>
    )
  }
}

export default GalleryColumns

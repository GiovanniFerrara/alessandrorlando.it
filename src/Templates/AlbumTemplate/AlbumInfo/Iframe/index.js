import React from 'react'

const Iframe = ({ link }) => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      {link && (
        <iframe
          className="embed-responsive-item"
          src={link}
          width="300"
          height="100"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        />
      )}
    </div>
  )
}

export default Iframe

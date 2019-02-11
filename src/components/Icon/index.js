import React from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'

const Icon = props => {
  return (
    <div>
      <IconContext.Provider value={{ color: props.color, size: props.size }}>
        <a href={props.link}>{props.children}</a>
      </IconContext.Provider>
    </div>
  )
}

export default Icon

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.object,
}

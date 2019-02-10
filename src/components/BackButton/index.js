import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import './style.scss'

const BackButton = ({ linkTo, hRef }) => {
  return (
    <Fragment>
      <Link className="back__button" to={hRef}>
        Torna a "{linkTo}"
      </Link>
    </Fragment>
  )
}

export default BackButton

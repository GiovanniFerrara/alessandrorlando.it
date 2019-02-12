import React from 'react'
import Link from 'gatsby-link'

const Item = ({ pageName, location }) => {
  return (
    <li className={pageName == location ? 'nav-item active' : 'nav-item'}>
      <Link className="nav-link" to={pageName}>
        {pageName}
      </Link>
    </li>
  )
}

export default Item

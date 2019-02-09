import React from 'react'
// import Navi from '../Navi'
import { siteMetadata } from '../../../gatsby-config'
import 'modern-normalize/modern-normalize.css'
import '../../scss/gatstrap.scss'
// import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Meta from '../Meta'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { children } = this.props
    return (
      <div>
        <Meta site={siteMetadata} title="Alessandro Orlando" />
        {children}
      </div>
    )
  }
}

export default Layout

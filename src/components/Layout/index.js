import React from 'react'
// import Navi from '../Navi'
// import { siteMetadata } from '../../../gatsby-config'
import 'modern-normalize/modern-normalize.css'
import '../../scss/gatstrap.scss'
import 'font-awesome/css/font-awesome.css'
import $ from 'jquery'
import Popper from 'popper.js'
import Meta from '../Meta'
import Navi from '../Navi'
import './style.scss'
class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
  render() {
    const { children } = this.props
    return (
      <div>
        {/* <Meta site={siteMetadata} title="Alessandro Orlando" /> */}
        <Navi location={this.props.location} title={this.props.title} />
        {children}
      </div>
    )
  }
}

export default Layout

import React from 'react'
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
    this.state = {
      classDom: 'invisible',
    }
  }
  componentDidMount() {
    const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js')
    this.setState(() => ({
      classDom: 'visible',
    }))
  }
  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        index,
        classDom: this.state.classDom,
      })
    })

    const { page } = this.props
    return (
      <div className="layout-wrapper">
        {/* <Meta site={siteMetadata} title="Alessandro Orlando" /> */}
        <Navi location={page} title={this.props.title} />
        {children}
      </div>
    )
  }
}

export default Layout

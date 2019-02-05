import React from 'react'
// import Navi from '../Navi'
import { siteMetadata } from '../../../gatsby-config'
import 'modern-normalize/modern-normalize.css'
import '../../scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}

export default Layout

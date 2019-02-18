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
      isCookieAccepted: false,
    }
  }
  handleAcceptCookies = status => {
    if (status == 'allow') {
      this.setState({
        isCookieAccepted: true,
      })
    }
    if (status == 'deny') {
      this.setState({
        isCookieAccepted: false,
      })
    }
  }

  componentDidMount() {
    const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js')
    this.setState(() => ({
      classDom: 'visible',
    }))

    setTimeout(() => {
      window.cookieconsent.initialise({
        palette: {
          popup: {
            background: '#252e39',
          },
          button: {
            background: '#2b6bac',
          },
        },
        revokable: true,
        onStatusChange: this.handleAcceptCookies,
        theme: 'classic',
        type: 'opt-in',
        content: {
          message:
            "Questo sito utilizza i cookies per garantirti un'esperienza di navigazione migliore.",
          dismiss: 'Ok!',
          deny: 'Rifiuta i cookies',
          link: 'Scopri di più',
        },
      })
      if (document.cookie == 'cookieconsent_status=allow') {
        this.handleAcceptCookies('allow')
      }
    }, 3000)
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
        <Navi location={page} title={this.props.title} />
        {children}
      </div>
    )
  }
}

export default Layout

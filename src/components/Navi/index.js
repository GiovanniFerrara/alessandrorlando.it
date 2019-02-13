import React from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo'
import Item from './Item'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav
        className="navbar navbar-expand-lg navbar-bg-color fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <Logo />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
            <span className="navbar-line nl1" />
            <span className="navbar-line nl2" />
            <span className="navbar-line nl3" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <Item location={location} pageName="music" />
              <Item location={location} pageName="photography" />
              <Item location={location} pageName="video" />
              <Item location={location} pageName="concerts&events" />
              <Item location={location} pageName="contact" />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navi

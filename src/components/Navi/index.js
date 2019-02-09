import React from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo'
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
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="music">
                  MUSIC
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="photography">
                  PHOTOGRAPHY
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="video">
                  VIDEO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="concerts-events">
                  CONCERTS&EVENTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navi

import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaRegEnvelopeOpen, FaEnvelope } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import contact from '../../../content/pages/contact.yaml'
import './style.scss'
const ContactForm = () => {
  return (
    <IconContext.Provider value={{ color: 'white', size: '50px' }}>
      <section className="mb-4 container">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          {contact.title}
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          {contact.subtitle}
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label for="name" className="">
                      {contact.name}
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label for="email" className="">
                      {contact.email}
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label for="subject" className="">
                      {contact.subject}
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="5"
                      className="form-control md-textarea"
                    />
                    <label for="message">{contact.message}</label>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left">
                <button className="btn btn-dark">Send</button>
              </div>
            </form>

            <div className="status" />
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x" />
                <p>{contact.something}</p>
              </li>

              <li>
                <FaPhone />
                <p>{contact.myTelephone}</p>
              </li>

              <li>
                <FaEnvelope />
                <p>{contact.myEmail}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  )
}

export default ContactForm

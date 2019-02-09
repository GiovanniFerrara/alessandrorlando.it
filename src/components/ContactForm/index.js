import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaRegEnvelopeOpen } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const ContactForm = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: 'white', size: '50px' }}>
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Contatti</h2>
                <hr className="divider my-4" />
                <p className=" mb-5">
                  Ready to start your next project with us? Give us a call or
                  send us an email and we will get back to you as soon as
                  possible!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center">
                <FaPhone />
                <div>+1 (202) 555-0149</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <FaRegEnvelopeOpen />
                <a className="d-block" href="mailto:contact@yourwebsite.com">
                  contact@yourwebsite.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </IconContext.Provider>
    </div>
  )
}

export default ContactForm

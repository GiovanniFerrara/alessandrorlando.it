import React from 'react'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import commons from '../../../content/pages/commons.yaml'
import ContactForm from '../../components/ContactForm'

const Index = () => {
  return (
    <div>
      <Layout page="contact">
        <FullWidthBackground
          srcMobile={commons.backgroundMobile}
          srcDesktop={commons.backgroundDesktop}
        >
          <ContactForm />
        </FullWidthBackground>
      </Layout>
    </div>
  )
}

export default Index

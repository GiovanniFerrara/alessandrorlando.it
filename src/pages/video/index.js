import React from 'react'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import EmbeddedVideo from '../../components/EmbeddedVideo'
import commons from '../../../content/pages/commons.yaml'
const Index = () => {
  return (
    <div>
      <Layout>
        <FullWidthBackground
          srcMobile={commons.backgroundMobile}
          srcDesktop={commons.backgroundDesktop}
        >
          <EmbeddedVideo link="https://www.youtube.com/embed/7U63UJ2z8iA" />
        </FullWidthBackground>
      </Layout>
    </div>
  )
}

export default Index

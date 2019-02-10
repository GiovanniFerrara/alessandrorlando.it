import React from 'react'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import commons from '../../../content/pages/commons.yaml'
import content from '../../../content/pages/concertsevents.yaml'

const Index = () => {
  return (
    <div>
      <Layout>
        <FullWidthBackground
          srcMobile={commons.backgroundMobile}
          srcDesktop={commons.backgroundDesktop}
        >
          <div dangerouslySetInnerHTML={{ __html: content.body }} />
        </FullWidthBackground>
      </Layout>
    </div>
  )
}

export default Index

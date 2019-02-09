import React from 'react'
import Layout from '../components/Layout'
import FullWidthBackground from '../components/FullWidthBackground'
import commons from '../../content/pages/commons.yaml'
import Navi from '../components/Navi'
const Index = () => {
  return (
    <div>
      <Layout>
        <FullWidthBackground
          srcMobile={commons.backgroundMobile}
          srcDesktop={commons.backgroundDesktop}
        >
          <Navi location="/music" title="Music" />
        </FullWidthBackground>
      </Layout>
    </div>
  )
}

export default Index

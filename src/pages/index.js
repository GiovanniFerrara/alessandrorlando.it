import React from 'react'
import Layout from '../components/Layout'
import FullWidthBackground from '../components/FullWidthBackground'
import homepage from '../../content/pages/homepage.yaml'
import IconsHome from '../components/IconsHome'

const Index = () => {
  return (
    <div>
      <Layout page="/">
        <FullWidthBackground
          srcMobile={homepage.backgroundMobile}
          srcDesktop={homepage.backgroundDesktop}
          classHomepage="full-width-background__home"
        >
          <IconsHome />
        </FullWidthBackground>
      </Layout>
    </div>
  )
}

export default Index

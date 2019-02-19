import React from 'react'
import Layout from '../../components/Layout'
import FullWidthBackground from '../../components/FullWidthBackground'
import photography from '../../../content/pages/photography.yaml'
import commons from '../../../content/pages/commons.yaml'
import { graphql } from 'gatsby'
import BehindInfront from '../../components/BehindInfront'

const behind = {
  key: photography.behind,
  src: photography.behind,
  title: 'behind',
  alt: 'behind',
  href: 'behind',
  description: 'Behind the scenes',
}
const infront = {
  key: photography.infront,
  src: photography.infront,
  title: 'infront',
  alt: 'infront',
  href: 'infront',
  description: 'In front the scenes',
}

const Index = () => {
  return (
    <div>
      <Layout page="photography">
        <FullWidthBackground
          srcMobile={commons.backgroundMobile}
          srcDesktop={commons.backgroundDesktop}
        >
          <div className="container">
            <BehindInfront array={[behind, infront]} />
          </div>
        </FullWidthBackground>
      </Layout>
    </div>
  )
}

export default Index

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
}
const infront = {
  key: photography.infront,
  src: photography.infront,
  title: 'infront',
  alt: 'infront',
  href: 'infront',
}

const Index = () => {
  return (
    <div>
      <Layout>
        <FullWidthBackground
          srcMobile={commons.backgroundMobile}
          srcDesktop={commons.backgroundDesktop}
        >
          <BehindInfront array={[behind, infront]} />
        </FullWidthBackground>
      </Layout>
    </div>
  )
}

export default Index

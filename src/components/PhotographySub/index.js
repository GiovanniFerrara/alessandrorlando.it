import React from 'react'
import Layout from '../Layout'
import FullWidthBackground from '../FullWidthBackground'
import commons from '../../../content/pages/commons.yaml'
import Gallery from '../Gallery'
import BackButton from '../BackButton'

const PhotographySub = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Layout page="photography">
        <FullWidthBackground
          srcMobile={commons.backgroundMobile}
          srcDesktop={commons.backgroundDesktop}
        >
          <BackButton hRef={'photography'} linkTo={'Photography'} />
          <Gallery array={data.allMarkdownRemark.edges} page="" />
        </FullWidthBackground>
      </Layout>
    </div>
  )
}

export default PhotographySub

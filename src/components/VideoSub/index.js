import React from 'react'
import Layout from '../Layout'
import FullWidthBackground from '../FullWidthBackground'
import commons from '../../../content/pages/commons.yaml'
import BackButton from '../BackButton'
import EmbeddedVideo from '../EmbeddedVideo'

const VideoSub = () => {
  return ({ data }) => {
    return (
      <div>
        <Layout page="video">
          <FullWidthBackground
            srcMobile={commons.backgroundMobile}
            srcDesktop={commons.backgroundDesktop}
          >
            <BackButton hRef={'video'} linkTo={'Video'} />
            <EmbeddedVideo videos={data.allMarkdownRemark.edges} />
          </FullWidthBackground>
        </Layout>
      </div>
    )
  }
}

export default VideoSub

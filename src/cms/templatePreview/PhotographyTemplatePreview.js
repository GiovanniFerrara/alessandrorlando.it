import GalleryTemplate from '../../templates/GalleryTemplate'
import React from 'react'

const PhotographyTemplatePreview = ({ entry, widgetFor }) => {
  const data = {
    markdownRemark: {
      html: widgetFor('body'),
      frontmatter: {
        title: entry.getIn(['data', 'title']),
        category: entry.getIn(['data', 'category']),
      },
      fields: {
        location: 'photography',
      },
    },
  }
  console.log(data)
  return <GalleryTemplate data={data} />
}

export default PhotographyTemplatePreview

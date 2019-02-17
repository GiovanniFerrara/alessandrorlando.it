import AlbumTemplate from '../../templates/AlbumTemplate'
import React from 'react'

const AlbumTemplatePreview = ({ entry, widgetsFor }) => {
  const data = {
    markdownRemark: {
      frontmatter: {
        cover: entry.getIn(['data', 'cover']),
        title: entry.getIn(['data', 'title']),
        songs: entry.getIn(['data', 'songs']).toJS(),
      },
      fields: {
        slug: '',
        location: '',
      },
    },
  }
  console.log(data)
  return <AlbumTemplate data={data} />
}

export default AlbumTemplatePreview

import AlbumTemplate from '../../templates/AlbumTemplate'
import React from 'react'

const AlbumTemplatePreview = ({ entry, widgetFor }) => {
  const data = {
    frontmatter: {
      cover: entry.getIn(['data', 'cover']),
      title: entry.getIn(['data', 'title']),
      songs: entry.getIn(['data', 'songs']),
    },
    fields: {
      slug: '',
      location: '',
    },
  }
  return <AlbumTemplate data={data} />
}

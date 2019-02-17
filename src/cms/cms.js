import CMS from 'netlify-cms'
import AlbumTemplatePreview from './templatePreview/AlbumTemplatePreview'
import PhotographyTemplatePreview from './templatePreview/PhotographyTemplatePreview'

CMS.registerPreviewTemplate('music', AlbumTemplatePreview)
CMS.registerPreviewTemplate('photography', PhotographyTemplatePreview)

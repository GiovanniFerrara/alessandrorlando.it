import CMS from 'netlify-cms'
import AlbumTemplatePreview from './templatePreview/AlbumTemplatePreview'
import PhotographyTemplatePreview from './templatePreview/PhotographyTemplatePreview'
import {
  InlineSelectControl,
  InlineSelectPreview,
} from 'netlify-cms-widget-inline-select'

CMS.registerWidget('inline-select', InlineSelectControl, InlineSelectPreview)
CMS.registerPreviewTemplate('music', AlbumTemplatePreview)
CMS.registerPreviewTemplate('photography', PhotographyTemplatePreview)

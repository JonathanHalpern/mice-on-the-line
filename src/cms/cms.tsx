import CMS from "netlify-cms"

import { PagesControl, PagesPreview } from "./Pages"
import PreviewTemplate from "./previewTemplate"

CMS.registerPreviewStyle("./example.css")
CMS.registerPreviewTemplate("stories", PreviewTemplate)
CMS.registerWidget("pages", PagesControl, PagesPreview)

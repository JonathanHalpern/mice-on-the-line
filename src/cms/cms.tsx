import CMS from "netlify-cms"

import { PagesControl, PagesPreview } from "./Pages"
import PreviewTemplate from "./previewTemplate"

CMS.registerPreviewStyle("./page.css")
CMS.registerPreviewTemplate("stories", PreviewTemplate)
CMS.registerWidget("pages", PagesControl, PagesPreview)

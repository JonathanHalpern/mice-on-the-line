import CMS from "netlify-cms"

import { PagesControl, PagesPreview } from "./Pages"

CMS.registerPreviewStyle("./example.css")
CMS.registerWidget("pages", PagesControl, PagesPreview)

import CMS from "netlify-cms"

import { PagesControl, PagesPreview } from "./Pages"

console.log("do stuff")
CMS.registerPreviewStyle("./example.css")
CMS.registerWidget("pages", PagesControl, PagesPreview)

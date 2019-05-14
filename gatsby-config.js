var proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Mice on the Line`,
    description: `Stories about the mice who live on the London Underground`,
    author: `Natalie Woodward`,
  },
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [
    "gatsby-plugin-typescript",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.tsx`,
      },
    },
    "gatsby-plugin-emotion",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content`,
        name: "content",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            // options: {
            //   name: "images",
            // },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 380,
              showCaptions: false,
              linkImagesToOriginal: false,
              wrapperStyle: "pointer-events: none;",
            },
          },
          // "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/img/gatsby-icon.png`,
      },
    },
  ],
}

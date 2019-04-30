module.exports = {
  siteMetadata: {
    title: `Mice on the Line`,
    description: `Stories about the mice who live on the London Underground`,
    author: `Natalie Woodward`,
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.tsx`,
      },
    },
    "gatsby-plugin-emotion",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
          // {
          //   resolve: "gatsby-remark-relative-images",
          //   options: {
          //     name: "images",
          //   },
          // },
          // {
          //   resolve: "gatsby-remark-images",
          //   options: {
          //     maxWidth: 300,
          //     showCaptions: false,
          //     linkImagesToOriginal: false,
          //     wrapperStyle: "pointer-events: none;",
          //   },
          // },
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Patrik Lau - Portfolio`,
    description: `Patrik Lau's Design Portfolio.`,
    author: `@patrik.lau`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon_colour_inverse@3x.png`, // This path is relative to the root of the site.
      },
    },
    // Added transformer for markdown files
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Make CSS grids available
          // with options
          {
          resolve: "gatsby-remark-images-grid",
            options: {
              className: "gatsby-remark-images-grid",
              gridGap: "20px",
              margin: "20px auto",
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `path/to/dir`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          // unwraps images from <p> tags
          "gatsby-remark-unwrap-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200,
              linkImagesToOriginal: false // point!
            },
          },
          // medium style zoom on images for gatsby-remark-images
          // https://www.gatsbyjs.org/packages/gatsby-remark-images-medium-zoom/?=remark-image
          {
            resolve: `gatsby-remark-images-medium-zoom`, // point!
            options: {
              margin:10,
              background:"#fff", 
            }
          },
        ],
      },
    },
    "gatsby-plugin-sass",
    // Added typography plugin
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // Added gatsby transfrmer json
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // Added google font plugin
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`,`400`,`500`,`600`, `700`],
          },
        ],
      },
    },
  ],
}

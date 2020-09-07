/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Graham Healy",
    titleTemplate: "%s · Graham Healy | Fullstack Software Engineer",
    description:
      "A fullstack software engineer from Dublin.",
    url: "https://www.grahamhealy.ie.com", // No trailing slash allowed!
    // image: "/images/<img>.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@grahamhealyy",
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: true
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // name: `markdown-pages`,
        path: `${__dirname}/src/markdown`,
      },
    },
  ],
}

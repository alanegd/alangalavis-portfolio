/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `alanegd`,
    siteTitle: `alanegd`,
    description: `Alan Galavis personal portfolio`,
    siteUrl: `https://alanegd.netlify.app/`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alanegd`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`
      }
    }
  ]
};
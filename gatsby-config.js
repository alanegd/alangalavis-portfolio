/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `alanegd`,
    siteTitle: `alanegd`,
    description: `Alan Galavis personal portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alanegd`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/coding.svg`
      }
    }
  ]
};
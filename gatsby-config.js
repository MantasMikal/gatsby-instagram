require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Source Instagram',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-instagram',
        short_name: 'starter',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      // resolve: require.resolve(`./plugins/gatsby-source-instagram-all`),
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_TOKEN
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}

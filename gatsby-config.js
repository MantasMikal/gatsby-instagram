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
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "IGQVJYX2JHZAnJtSk5TRkhZAMzFJTUxWcnpGSDR1a2pMUTBmSlZAGMmhyWG9rUmttMS02cXQyZAGJBLXVMemZAXcVRLR1VfQUh2WFBPLUs0R3dWWm5SY3g2bFVwR1VVTGxxbVdXZADJGNzRpM09sR0UxbEhSRQZDZD"
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}

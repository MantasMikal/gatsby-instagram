module.exports = {
  siteMetadata: {
    title: 'Gatsby Instagram',
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
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "IGQVJWUTVheTBiNC1wa3k0LUJTeVZAEY1dXVFFlTmEtMkotYzMyZAXl5dEJpOFdBZATRCQ0tfaVA1ODRpUkJFRmpFT04za1lCQVliZADd5Q2FUaFoxRGtJeHgydDZAnWVBaQmZA3MWYybnAtNlh5c09XT3ZAHMAZDZD"
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}

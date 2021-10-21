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
        access_token: "IGQVJVWFY2Tkw3SlBzaFJOZAzc3M1dqVU14SkM1UHZA4UVZAzM284ckNHaVBRZAmtYZA2hyaXpkbzcyOVV1LWN1dk5rX19SaHJVc3hmamVCN3FCQXhRQmtfMUxjNDhIdlJibFRleFNxaFRtVUF1eGhFYnFqbQZDZD"
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}

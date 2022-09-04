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
        // don't forget to store your access token in a .env file
        // https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
        access_token: "IGQVJYQUtfVmVlTkViY1NCVVNKa1I4VGxWa2NQWjhVOFZAQV2p0VXdsbTlxWWwxSGJzSnNJQzhxVTdPblBGcU1oTjFWN3kybWhoWmh0R3hCczE4Q0pDMHRNZAlBzQVN5cm9QZA3ZA0TWdRYTRDTFRvQXJEQwZDZD"
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}

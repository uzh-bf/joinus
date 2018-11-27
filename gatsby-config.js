module.exports = {
  siteMetadata: {
    title: 'Join us @ IBF',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-less',
      {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: "UA-129908390-1",
              head: true,
          },
      },
  ],
  pathPrefix: `joinus`
}

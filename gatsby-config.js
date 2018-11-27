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
              sampleRate: 5,
              head: true,
              siteSpeedSampleRate: 10,
              anonymize: true,
          },
      },
  ],
  pathPrefix: `joinus`
}

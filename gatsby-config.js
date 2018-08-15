module.exports = {
  siteMetadata: {
    title: 'Test Site',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React nd Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'zjhj2zw7f6x8',
        accessToken: '6b0b858cfb289e86a123b8dba9d8c77e36bf3a9079e9ad9f5c58c791b803ea1c'
      }
    }
  ],
}

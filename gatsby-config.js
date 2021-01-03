/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:  {
    title: "Gatsby TUtorial",
    description: "some random description",
    author: "@rosentoshev",
    data: ["item 1", "item 2"],
    person: {
      name: "peter",
      age: 32
    }
  }
  ,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `51zgshj46fzc`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: `m660eKD9QWJ0JfA-ZC9BmjTN-IJBkTREkJjtzKt4QK0`,
      },
    },
  ],
}
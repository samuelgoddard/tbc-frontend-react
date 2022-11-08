module.exports = {
  siteMetadata: {
    title: `tbc.`,
    description: `welcome to your curated style...`,
    author: `@samuelgoddard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-148522557-1",
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // ...other options...
        failOnError: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tbc-website`,
        short_name: `tbc`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, 
        whitelist: ['whitelist'], // Don't remove this selector
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: '986c1f6a5143e089716a40c7a0b248',
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `3123926007`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //       component: require.resolve(`./src/components/layout.js`)
    //   }
    // }
  ],
}

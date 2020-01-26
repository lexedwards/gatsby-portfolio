module.exports = {
  siteMetadata: {
    title: `Alex Edwards / Full Stack Dev`,
    description: `Alex Edwards' Full-Stack Portfolio`,
    about: {
      author: `Alex Edwards`,
      email: `hello@alexedwards.co`,
      twitter: `twitter.com/_lexedwards`,
      github: `github.com/lexedwards`,
      linkedIn: `linkedin.com/in/lexedwards`
    },
    siteURL: `alexedwards.co`,
    headline: ``,
    image: ``,
    logo: ``
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `vectors`,
        path: `${__dirname}/src/svg`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Edwards / Full Stack Web Debv`,
        short_name: `Alex Edwards Web Dev`,
        start_url: `/`,
        background_color: `#2a323c`,
        theme_color: `#FFF`,
        theme_color_in_head: true,
        display: `minimal-ui`,
        icon: `./src/images/Person.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)(),
          require("autoprefixer")(),
          require('cssnano')()
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-156302723-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

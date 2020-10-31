const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: false,
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `1921572799`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage`,
        path: `${__dirname}/src/images/homepage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact`,
        path: `${__dirname}/src/images/contact`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/images/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `footer`,
        path: `${__dirname}/src/images/footer`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `coworking`,
        path: `${__dirname}/src/images/coworking`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Victor Rose`,
        short_name: `victorrose`,
        start_url: `/`,
        background_color: `#DECAB2`,
        theme_color: `#DECAB2`,
        display: `minimal-ui`,
        icon: `static/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Playfair Display\:700`, `Roboto\:300,700`],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@common': path.resolve(__dirname, 'src/components/common'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@sections': path.resolve(__dirname, 'src/components/sections'),
          '@styles': path.resolve(__dirname, 'src/styles/'),
          '@static': path.resolve(__dirname, 'static/'),
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/
        },
      }
    }
  ],
};

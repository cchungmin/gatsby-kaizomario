module.exports = {
  siteMetadata: {
    title: `KaizoMario`,
    description: `KaizoMario Website based on Gatsby project.`,
    author: `@gatsbyjs, @cchungmin`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
        // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-firebase`,
      options: {
        // point to the firebase private key downloaded
        credential:
          process.env.NODE_ENV === 'development'
            ? require('./firebase-key.json')
            : {
                type: process.env.FIREBASE_TYPE,
                project_id: process.env.FIREBASE_PROJECT_ID,
                private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
                private_key: process.env.FIREBASE_PRIVATE_KEY
                  ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
                  : '',
                client_email: process.env.FIREBASE_CLIENT_EMAIL,
                client_id: process.env.FIREBASE_CLIENT_ID,
                auth_uri: process.env.FIREBASE_AUTH_URI,
                token_uri: process.env.FIREBASE_TOKEN_URI,
                auth_provider_x509_cert_url:
                  process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
                client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
              },
        // your firebase database root url
        databaseURL: 'https://popping-heat-9561.firebaseio.com',
        types: [
          {
            type: 'socialLinkData',
            path: 'v1/data/socialLinks',
            query: ref => ref.limitToLast(10),
            map: node => {
              return { socialLink: node };
            },
          },
          {
            type: 'skillData',
            path: 'v1/data/skills',
            query: ref => ref.limitToLast(10),
            map: node => {
              return { skill: node };
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App
    // Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};

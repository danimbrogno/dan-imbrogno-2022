import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dan Imbrogno`,
    description: "Startup CTO and Full Stack Engineer bringing ideas to life with open source magic.",
    siteUrl: `https://danimbrogno.com`,
    email: 'dan@3vl.ca',
    github: '3vlinc'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-transformer-json", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "data",
      "path": "./src/data/"
    },
    __key: "data"
  },{
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `oxygen\:300,400,700`,
        `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  }
  ,{
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  }]
};

export default config;

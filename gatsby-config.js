module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Meu Portfólio",
  },
   plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-us-east-1.graphcms.com/v2/ckwgt0db90jga01xo4hkvaz6s/master",
    },
  },  
    `gatsby-plugin-react-helmet`,    
  ],
}
module.exports = {
  siteMetadata: {
    title: `Ivy Chen`,
    name: `Ivy Chen`,
    siteUrl: `https://ivychen-design.netlify.app/`,
    description: `Ivy Chen is a product designer and illustrator based in the SF Bay Area`,
    hero: {
      heading: `Ivy Chen is a product designer and illustrator based in the SF Bay Area`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ivavay`,
      },
      {
        name: `github`,
        url: `https://github.com/ivavay`,
      },
      {
        name: `devto`,
        url: `https://dev.to/ivavay`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/ivy-chen-4065aab7/`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/wonderbar.studio/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};

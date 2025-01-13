module.exports = {
  pathPrefix: "/portfolio-minimal-gatsby",
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://usman2x.github.io/portfolio-minimal-gatsby/",
        manifestSettings: {
          favicon: "./content/images/portfolio.png",
          siteName: "My Minimal Portfolio",
          shortName: "Portfolio",
          startUrl: "/portfolio-minimal-gatsby/",
          backgroundColor: "#FFFFFF",
          themeColor: "#000000",
          display: "minimal-ui",
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", 
          usePathPrefixForArticles: false,
        },
      },
    },
  ],
};

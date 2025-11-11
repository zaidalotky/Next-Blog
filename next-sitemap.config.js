/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yourdomain.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: path.startsWith('/blog/') ? 0.8 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};

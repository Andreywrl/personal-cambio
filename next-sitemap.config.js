module.exports = {
    siteUrl: 'https://personalcambio.com.br/',
    changefreq: 'monthly',
    generateRobotsTxt: true, 
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      host: 'https://personalcambio.com.br/',
      sitemap: 'https://personalcambio.com.br/sitemap.xml',
    },
  };
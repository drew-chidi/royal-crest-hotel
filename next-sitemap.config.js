// const siteUrl = 'https://www.royalcresthotel.com/';

module.exports = {
  siteUrl: 'https://www.royalcresthotel.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};

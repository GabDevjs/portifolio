/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  generateRobotsTxt: true,
  outDir: "./.next/static/media/",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: ["*", "/api/og/*"],
        disallow: [""],
      },
    ],
  },
};

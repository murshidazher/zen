import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Generates a robots.txt file which tells the search engine crawlers
 * which pages or files the crawler can or can't request from your site.
 *
 * More: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 *
 * @returns {MetadataRoute.Robots} object
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/404"],
    },
    sitemap: new URL("/sitemap.xml", siteConfig.url).href,
  };
}

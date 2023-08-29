import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Generates the sitemap which help search engine crawlers crawl your site more efficiently.
 *
 * More: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generate-a-sitemap
 *
 * @returns {MetadataRoute.Sitemap} object.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
  ];
}

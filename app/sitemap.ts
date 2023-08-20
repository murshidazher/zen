import type { MetadataRoute } from "next";

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
      url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "").href,
      lastModified: new Date(),
    },
  ];
}

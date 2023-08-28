import { getCldImageUrl } from "@/lib/utils";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Murshid Azher",
  title: "Murshid Azher — Senior Software Engineer at :Different",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  license: "https://github.com/murshidazher/zen/blob/main/LICENSE",
  ogImage: getCldImageUrl({
    transformations:
      "f_webp,fl_awebp.progressive.progressive:semi,f_webp,fl_awebp,q_80",
    path: "opengraph-image.png",
  }),
  locale: "en_US",
  description:
    "Murshid is a creative developer with expertise in crafting enterprise grade applications.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    email: "hello@murshidazher.com",
    twitter: "https://twitter.com/murshidazher",
    github: "https://github.com/murshidazher",
    linkedin: "https://linkedin.com/in/murshidazher",
    dribbble: "https://dribbble.com/murshidazher",
    instagram: "https://www.instagram.com/murshidazher",
    behance: "https://www.behance.net/murshidazher",
    medium: "https://medium.com/@imurshid",
    resume: "https://read.cv/murshidazher",
  },
};

import { getCldImageUrl } from "@/lib/utils";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Murshid Azher",
  title: "Murshid Azher — Senior Software Engineer at :Different",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "/").href,
  googleAnalytics: "UA-176773451-1",
  license: "https://github.com/murshidazher/zen/blob/main/LICENSE",
  ogImage: getCldImageUrl({
    transformations:
      "f_webp,fl_awebp.progressive.progressive:semi,f_webp,fl_awebp,q_80",
    path: "og-image.jpg",
  }),
  locale: "en_US",
  description:
    "Hey, I'm Murshid Azher — a seasoned engineer who specializes in the craft of delivering polished softwares and memorable user experiences.",
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
  keywords:
    "Murshid Azher, Portfolio, Sri Lankan Developer, Contact, Automation, Typography, Software Engineer, Developer, Product Design, UX Design, UI Design, Front-end, Web Development, Visual Identity, Back-end, Software, TypeScript Developer, Technical Leadership",
};

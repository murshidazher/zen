export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Murshid Azher",
  title: "Murshid Azher — Senior Software Engineer at :Different",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  license: "https://github.com/murshidazher/zen/blob/main/LICENSE",
  ogImage: "https://ui.shadcn.com/og.jpg",
  locale: "en_US",
  description:
    "Murshid is a creative developer from the south with five years of expertise in developing and creating brands spanning from consumer apps to enterprise-level solutions",
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

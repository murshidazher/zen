import type { Person } from "schema-dts";

import { siteConfig } from "@/config/site";
import { getCldImageUrl, toJsonLd } from "@/lib/utils";
import VisuallyHidden from "@/components/ui/visually-hidden";

/**
 * This won't be shown in Google's SERP since this schema is yet to be supported.
 *
 * Note: https://developers.google.com/search/docs/appearance/structured-data/search-gallery
 */
export const profileJsonLd = toJsonLd<Person>({
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Observability Engineer",
  url: siteConfig.url,
  sameAs: [
    "https://twitter.com/murshidazher",
    "https://github.com/murshidazher",
    "https://linkedin.com/in/murshidazher",
    "https://dribbble.com/murshidazher",
    "https://www.instagram.com/murshidazher",
    "https://www.behance.net/murshidazher",
    "https://medium.com/@imurshid",
    "https://read.cv/murshidazher",
  ],
  image: getCldImageUrl({
    transformations:
      "f_webp,fl_awebp.progressive.progressive:semi,f_webp,fl_awebp,q_80",
    path: "og-image.jpg",
  }),
  birthPlace: {
    "@type": "Place",
    name: "Jeddah, Saudi Arabia",
  },
  givenName: "Murshid",
  familyName: "Azher",
  description: siteConfig.description,
  gender: "Male",
  worksFor: {
    "@type": "Organization",
    name: "iVedha",
    sameAs: ["https://ivedha.com/"],
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Stony Brook University, New York",
      sameAs: "https://www.stonybrook.edu/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Buckinghamshire New University",
      sameAs: "https://www.bucks.ac.uk/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Westminster, London",
      sameAs: "https://www.westminster.ac.uk/",
    },
  ],
  workLocation: {
    "@type": "Place",
    name: "Toronto, Canada",
  },
  knowsLanguage: ["English", "Sinhala", "Tamil"],
  knowsAbout: [
    "Product Development",
    "Software Development",
    "Technical Leadership",
  ],
  nationality: {
    "@type": "Country",
    name: "Sri Lanka",
  },
});

const ProfileJsonLd = () => {
  return (
    <div
      id="profile-metadata"
      className="sr-only"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: profileJsonLd }}
    />
  );
};

export default ProfileJsonLd;

import type { Person } from "schema-dts";

import { siteConfig } from "@/config/site";
import { toJsonLd } from "@/lib/utils";
import { getHeadShotUrl } from "@/components/landing";

const profileJsonLd = toJsonLd<Person>({
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  brand: ["Murshid Azher", ":Different"],
  jobTitle: "Senior Software Engineer",
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
  image: getHeadShotUrl(),
  alumniOf: {
    "@type": "EducationalOrganization",
    alumni: "Stony Brook University, New York",
  },
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
    name: ":Different",
  },
  workLocation: {
    "@type": "Place",
    name: "Sydney, Australia",
  },
  knowsLanguage: "English",
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
  return <div dangerouslySetInnerHTML={{ __html: profileJsonLd }} />;
};

export default ProfileJsonLd;

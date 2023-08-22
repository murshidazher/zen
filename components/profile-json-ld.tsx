import Script from "next/script";

import { siteConfig } from "@/config/site";
import { getHeadShotUrl } from "@/components/landing";

const profileJsonLd = {
  "@context": "https://json-ld.org/contexts/person.jsonld",
  "@type": "Person",
  name: siteConfig.name,
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
  alumniOf: "Stony Brook University, New York",
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
  knowsAbout: ["Product Development", "Technical Leadership"],
  nationality: {
    "@type": "Country",
    name: "Sri Lanka",
  },
};

const ProfileJsonLd = () => {
  return (
    <Script
      id="app-ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(profileJsonLd, null, 2),
      }}
    />
  );
};

export default ProfileJsonLd;

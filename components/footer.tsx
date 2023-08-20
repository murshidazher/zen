import { siteConfig } from "@/config/site";
import { convertArabicToRoman } from "@/lib/utils";

import Link from "./ui/link";

export const Footer = () => {
  return (
    <section
      id="footer"
      className="prose prose-neutral dark:prose-invert my-5 px-8 text-xs font-light leading-5 tracking-wide text-neutral-700 dark:text-white"
    >
      <p className="m-0">
        Licensed under the&nbsp;
        <Link href={siteConfig.license}>MIT License</Link>.
      </p>
      <p className="m-0">
        &copy;&nbsp;{convertArabicToRoman(new Date().getFullYear())}
        &nbsp;Murshid Azher.
      </p>
    </section>
  );
};

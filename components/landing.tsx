import { ImageObject } from "schema-dts";

import { siteConfig } from "@/config/site";
import { googleSansDisplay } from "@/lib/fonts";
import { cn, getCldImageUrl, toJsonLd } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/ui/icons";
import { Indicator } from "@/components/ui/indicator";

export const getHeadShotUrl = () =>
  getCldImageUrl({
    transformations:
      "dpr_1.0,c_scale,f_webp,fl_awebp.progressive.progressive:semi,f_webp,fl_awebp,q_80",
    path: "avatar.jpg",
  });

const headShotJsonLd = toJsonLd<ImageObject>({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  url: getHeadShotUrl(),
  contentUrl: getHeadShotUrl(),
  caption: "Murshid Azher's Avatar",
  description: "An avatar image of Murshid Azher",
  thumbnailUrl: getHeadShotUrl(),
  license: siteConfig.license,
  acquireLicensePage: siteConfig.license,
  creditText: "Murshid Azher",
  representativeOfPage: "True",
  creator: {
    "@type": "Person",
    name: "Murshid Azher",
  },
  copyrightNotice: "Murshid Azher",
});

export const Landing = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section id="landing" aria-label="Landing">
      <div className="mx-auto max-w-7xl px-8 py-12 font-sans lg:pt-24">
        <div className="mx-auto max-w-xl lg:ml-2">
          <div className="md:flex md:items-center md:justify-between md:space-x-5">
            <div className="flex items-center space-x-5">
              <div className="relative shrink-0">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    height={64}
                    width={64}
                    data-sizes="auto"
                    src={getHeadShotUrl()}
                    className="rounded-full border dark:border-2 dark:border-zinc-800"
                    alt={`A photo of ${siteConfig.name}.`}
                  />
                  <AvatarFallback>
                    <Icons.logo className="h-14 w-14" />
                  </AvatarFallback>
                </Avatar>
                <script type="application/ld+json" suppressHydrationWarning>
                  {headShotJsonLd}
                </script>
              </div>
              <div className="pt-1.5">
                <h1
                  className={cn(
                    "bold font-display text-black dark:text-white lg:text-xl",
                    googleSansDisplay.variable
                  )}
                >
                  {siteConfig.name}
                </h1>
                <p className="prose prose-stone dark:prose-invert text-sm font-light">
                  Engineer / Technical Leadership
                </p>
                <div className="relative mt-3 flex items-center">
                  <Indicator color="sky" className="left-[-2px] animate-none" />
                  <p className="prose prose-stone dark:prose-invert ml-4 mt-[2px] text-xs font-light">
                    Currently in Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

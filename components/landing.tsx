import { siteConfig } from "@/config/site";
import { googleSansDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "@/components/ui/image";
import { Indicator } from "@/components/ui/indicator";

export const Landing = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section id="landing" aria-label="Landing">
      <div className="mx-auto max-w-7xl px-8 py-12 font-sans lg:pt-24">
        <div className="mx-auto max-w-xl lg:ml-2">
          <div>
            <div className="md:flex md:items-center md:justify-between md:space-x-5">
              <div className="flex items-center space-x-5">
                <div className="shrink-0">
                  <div className="relative">
                    <Image
                      src={"/images/avatar.jpg"}
                      width={64}
                      height={64}
                      alt={`A photo of ${siteConfig.name}.`}
                      className="h-16 w-16 rounded-full border dark:border-2 dark:border-zinc-800 lg:h-24 lg:w-24"
                      priority
                    />
                    <span
                      className="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    />
                  </div>
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
                    <Indicator
                      color="sky"
                      className="left-[-2px] animate-none"
                    />
                    <p className="prose prose-stone dark:prose-invert ml-4 mt-[2px] text-xs font-light">
                      Currently in Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

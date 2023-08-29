import { Separator } from "@/components/ui/separator";
import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { Footnotes } from "@/components/footnotes";
import GlitchIcon from "@/components/glitch-icon";
import { Landing } from "@/components/landing";
import { OverlayHighlights } from "@/components/overlay-highlights";
import { SiteNav } from "@/components/site-nav";

export default function IndexPage() {
  return (
    <div className="mx-4 my-24 max-w-[40rem] sm:m-[11%] lg:m-[180px]">
      <OverlayHighlights />
      <Landing />
      <Content />
      <Separator className="mx-8 my-auto mt-8 h-[1px] w-[var(--separator-size)] border-neutral-300 dark:bg-white" />
      <Footnotes />
      <Separator className="mx-8 my-auto mb-16 mt-8 h-[1px] w-[var(--separator-size)] border-neutral-300 dark:bg-white" />
      <div className="mb-6 ml-8 h-10 w-10">
        <GlitchIcon />
      </div>
      <SiteNav className="xs:mb-4 mb-0 pl-6" />
      <Footer />
    </div>
  );
}

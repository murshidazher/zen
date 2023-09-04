import { SocialLink } from "@/types/social-link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import Link from "@/components/ui/link";
import { Separator } from "@/components/ui/separator";
import { Tooltip } from "@/components/ui/tooltip";
import ContactIcon from "@/components/contact-icon";
import ThemeToggle from "@/components/theme-toggle";

const socialLinks: SocialLink[] = [
  {
    href: siteConfig.links.twitter,
    name: "Twitter",
    component: <Icons.twitter />,
  },
  {
    href: siteConfig.links.github,
    name: "GitHub",
    component: <Icons.gitHub />,
  },
  {
    href: siteConfig.links.linkedin,
    name: "LinkedIn",
    component: <Icons.linkedin />,
  },
];

interface SiteNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SiteNav = ({ className }: SiteNavProps) => {
  return (
    <div
      className={cn(
        "social-links bottom-4 right-4 flex flex-row gap-1 sm:fixed sm:flex-col",
        className
      )}
    >
      {socialLinks.map((link) => (
        <Tooltip content={link.name} key={link.name}>
          <Link
            href={link.href}
            className={cn(
              "rounded p-2",
              "anchor-highlight-none",
              "hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
            aria-label={link.name}
          >
            {link.component}
          </Link>
        </Tooltip>
      ))}

      <Separator
        orientation={"vertical"}
        className="my-auto h-5 w-[1px] border-neutral-300 dark:border-neutral-700 sm:h-[1px] sm:w-full"
      />

      <Tooltip content="View my resume">
        <Link
          className={cn(
            "rounded p-2",
            "anchor-highlight-none",
            "hover:bg-neutral-100 dark:hover:bg-neutral-800"
          )}
          href={siteConfig.links.resume}
        >
          <Icons.resume />
        </Link>
      </Tooltip>

      <div className="quick-links">
        <Tooltip content="Get in touch">
          <div>
            <ContactIcon />
          </div>
        </Tooltip>
      </div>
      <ThemeToggle />
    </div>
  );
};

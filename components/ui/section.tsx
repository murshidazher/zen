import slugify from "slugify";

import { googleSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  hideTitle?: boolean;
}

const Section = ({
  className,
  title,
  children,
  hideTitle = false,
}: SectionProps) => {
  const id = title ? slugify(title, { lower: true, strict: true }) : undefined;

  return (
    <section id={id} aria-label={title} className={className}>
      <div className="prose prose-sm prose-neutral dark:prose-invert">
        {!hideTitle && (
          <h4
            className={cn(
              "font-sans text-black dark:text-white",
              googleSans.variable
            )}
          >
            {title}
          </h4>
        )}
        <div className="mt-3 space-y-3">{children}</div>
      </div>
    </section>
  );
};

export default Section;

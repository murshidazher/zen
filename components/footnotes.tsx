import Section from "@/components/ui/section";

export const Footnotes = () => (
  <Section title="Footnote" className="mt-8 pl-6" hideTitle>
    <ol className="pl-8 text-xs text-neutral-500 dark:text-neutral-400">
      <li id="fn-1">
        I often tune into podcasts like Software at Scale, Software Daily, and
        Tech Lead Journal for insightful content in the tech industry.
      </li>
      <li id="fn-2">
        I authored my thesis titled &quot;An Automated and Modular Approach for
        Mitigating Toggle Debt&quot;.
      </li>
    </ol>
  </Section>
);

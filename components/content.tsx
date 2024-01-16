import { siteConfig } from "@/config/site";
import Footnote from "@/components/ui/footnote";
import Link from "@/components/ui/link";
import Section from "@/components/ui/section";
import ContactButton from "@/components/contact-button";

export const Content = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-8 pb-12 font-sans">
        <div className="mx-auto max-w-xl lg:ml-2">
          <div className="grid gap-12 md:gap-8">
            <Section className="mt-24" title="About" hideTitle>
              <p>
                I&apos;m a <em>seasoned engineer</em> who specializes in the
                craft&nbsp;of delivering polished softwares and memorable user
                experiences.
              </p>

              <p>
                I enjoy the challenge in tackling complex customer issues
                through technological means, encompassing the entire journey
                from planning to delivery using a data-driven approach.
              </p>
              <p>
                For the past 6 years, I&apos;ve collaborated with a diverse
                range of companies, ranging from startups to well-established
                corporations.
              </p>
            </Section>
            <Section title="Work">
              <p>
                I currently work as an <em>Observability Engineer</em> at&nbsp;
                <Link href="https://ivedha.com/">iVedha</Link>, a firm renowned
                for its expertise in delivering cutting-edge software-driven
                cloud services and solutions to facilitate enterprises in their
                digital transformation needs.
              </p>
              <p>
                My primary focus at iVedha predominantly revolves around&nbsp;
                <em>Site Reliability</em>, with a major emphasis on enhancing
                logging and monitoring, automating application onboarding,
                streamlining incident remediation through automation,
                implementing predictive anomaly detection, and other related
                tasks.
              </p>
              <p>
                Prior to joining iVedha in 2023 — I&apos;ve spent couple of
                years working at&nbsp;
                <Link href="https://different.com.au/">:Different</Link>, a
                property management as a service, where I worked with many
                incredible talents to automate and scale rent rolls.
              </p>
              <p>
                If you need to know more about my work experiences,&nbsp;
                <Link href={`${siteConfig.links.resume}#work-experience`}>
                  see my CV
                </Link>
                .
              </p>
            </Section>
            <Section title="After Hours">
              <p>
                During my free hours, I enjoy experimenting with emerging
                technologies and trends to understand their practical
                applications and potential uses.
              </p>
              <p>
                When I&apos;m not pushing pixels, you might find me tuning into
                podcasts
                <Footnote index={1} />, enjoying some quality time cuddling with
                my cats or hanging out with friends and family.
              </p>
            </Section>
            <Section title="Education">
              <p>
                In 2023, I graduated from the University of Westminster, London
                with a Master of Science in&nbsp;
                <em>Advanced Software Engineering</em>
                <Footnote index={2} />.
              </p>

              <p>
                Prior to that, I pursued a Bachelor of Computing in&nbsp;
                <em>Software Engineering</em> at Buckinghamshire New University
                and a Bachelor of Science in&nbsp;
                <em>Computer Science</em> at the State University of New York,
                Stony Brook.
              </p>
              <p>
                For more on education & certification,&nbsp;
                <Link href={`${siteConfig.links.resume}#education`}>
                  see my CV
                </Link>
                .
              </p>
            </Section>
            <Section title="Availability">
              <p>
                I&apos;ve limited availability, but I&apos;m always open to
                engaging in exciting freelance and consultancy roles. If
                you&apos;re intrigued, feel free to reach out.
              </p>
              <ContactButton />
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
};

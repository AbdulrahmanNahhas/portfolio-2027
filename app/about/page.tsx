import { copy } from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { PersonalFacts, Principles } from "@/components/personal-sections";
import { aboutData, siteConfig } from "@/lib/data";
export const metadata: Metadata = {
  title: copy.about.aboutMe,
  description: copy.about.metaDescription,
};
export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        kicker={copy.about.eyebrow}
        title={copy.about.title}
        description={copy.about.description}
      />
      <section className="inner-section content-width about-layout">
        <div>
          <div className="reading-copy">
            {aboutData.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="interest-tags">
            {aboutData.interests.map((interest) => (
              <span className="interest-tag" key={interest}>
                {interest}
              </span>
            ))}
          </div>
          <Link className="text-link mt-8" href="/skills">
            {copy.about.whatImLearning}
            <ArrowUpRightIcon />
          </Link>
        </div>
        <aside className="personal-card">
          <span className="eyebrow">{copy.about.identityLabel}</span>
          <div className="personal-monogram">
            {siteConfig.displayName.toLowerCase()}
            {copy.about.decoration}
          </div>
          <h2>{siteConfig.name}</h2>
          <p>{siteConfig.bio}</p>
          <span className="personal-tag">
            {copy.about.studentFirstCuriousAlways}
          </span>
        </aside>
      </section>
      <PersonalFacts />
      <Principles />
      <section className="hello-section content-width">
        <span aria-hidden="true">{copy.about.decoration2}</span>
        <div>
          <h2>{copy.about.journeyTitle}</h2>
          <p>{copy.about.journeyDescription}</p>
        </div>
        <Link href="/work" className="text-link">
          {copy.about.thoseEarlierChapters}
          <ArrowUpRightIcon />
        </Link>
      </section>
    </PageLayout>
  );
}

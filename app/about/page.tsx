import { cn } from "@/lib/utils";
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
      <section
        className={cn(
          "inner-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)] about-layout",
          "pt-[35px] pb-12.5 gap-[35px] grid grid-cols-[1fr] items-start",
          "min-[600px]:pt-[55px] min-[600px]:pb-[75px] min-[600px]:gap-10 min-[600px]:grid-cols-[1.3fr_1fr] min-[900px]:gap-22.5",
        )}
      >
        <div>
          <div
            className={cn(
              "reading-copy",
              "text-[15px] leading-[1.95] text-muted-foreground max-w-162.5",
              "min-[600px]:text-[17px]",
              "[&_p+p]:mt-5",
            )}
          >
            {aboutData.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className={cn("interest-tags", "gap-2.5 flex flex-wrap mt-7.5")}>
            {aboutData.interests.map((interest) => (
              <span
                className={cn(
                  "interest-tag",
                  "px-[17px] py-2.5 rounded-[50px] border border-solid border-border text-[12px]",
                )}
                key={interest}
              >
                {interest}
              </span>
            ))}
          </div>
          <Link
            className={cn(
              "text-link mt-8",
              "gap-3 border-b [border-bottom-style:solid] border-b-current inline-flex items-center text-[13px] font-[650] pb-1.5",
              "[&_svg]:size-[17px] [&_svg]:[transition:transform_0.2s]",
              "[&:hover_svg]:transform-[translate(3px,_-2px)]",
            )}
            href="/skills"
          >
            {copy.about.whatImLearning}
            <ArrowUpRightIcon />
          </Link>
        </div>
        <aside
          className={cn(
            "personal-card",
            "p-[25px] rounded-[18px] bg-mint text-object-ink transform-[rotate(1deg)]",
            "min-[900px]:p-[35px] min-[600px]:transform-[rotate(3deg)]",
            "[&_.personal-monogram]:font-heading [&_.personal-monogram]:text-[68px] [&_.personal-monogram]:font-extrabold [&_.personal-monogram]:leading-[1] [&_.personal-monogram]:tracking-[-5px] [&_.personal-monogram]:mt-5",
            "min-[600px]:[&_.personal-monogram]:text-[clamp(42px,_5.5vw,_78px)]",
            "[&_h2]:font-heading [&_h2]:text-[27px] [&_h2]:leading-[1.15] [&_h2]:mt-5 [&_h2]:mb-2.5 [&_h2]:font-bold",
            "[&_p]:text-[13px] [&_p]:leading-[1.8]",
            "[&_.personal-tag]:px-3 [&_.personal-tag]:py-1.5 [&_.personal-tag]:rounded-[20px] [&_.personal-tag]:inline-block [&_.personal-tag]:bg-[#ffffff70] [&_.personal-tag]:text-[11px] [&_.personal-tag]:mt-5",
          )}
        >
          <span
            className={cn(
              "eyebrow",
              "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
              "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
            )}
          >
            {copy.about.identityLabel}
          </span>
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
      <section
        className={cn(
          "hello-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "py-7 gap-4.5 border-t border-b [border-top-style:solid] [border-bottom-style:solid] border-t-border border-b-border flex items-center mb-10",
          "min-[600px]:py-10 min-[600px]:gap-7.5 min-[600px]:mb-[75px] max-[600px]:flex-wrap",
          "[&>span]:text-[48px] [&>span]:text-primary [&>span]:leading-[1]",
          "min-[600px]:[&>span]:text-[70px]",
          "[&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-[24px] [&_h2]:tracking-[-0.7px]",
          "min-[600px]:[&_h2]:text-[29px]",
          "[&_p]:text-muted-foreground [&_p]:text-[11px] [&_p]:mt-[5px]",
          "min-[600px]:[&_p]:text-[13px]",
          "[&>a]:ml-15.5",
          "min-[600px]:[&>a]:ml-auto",
        )}
      >
        <span aria-hidden="true">{copy.about.decoration2}</span>
        <div>
          <h2>{copy.about.journeyTitle}</h2>
          <p>{copy.about.journeyDescription}</p>
        </div>
        <Link
          href="/work"
          className={cn(
            "text-link",
            "gap-3 border-b [border-bottom-style:solid] border-b-current inline-flex items-center text-[13px] font-[650] pb-1.5",
            "[&_svg]:size-[17px] [&_svg]:[transition:transform_0.2s]",
            "[&:hover_svg]:transform-[translate(3px,_-2px)]",
          )}
        >
          {copy.about.thoseEarlierChapters}
          <ArrowUpRightIcon />
        </Link>
      </section>
    </PageLayout>
  );
}

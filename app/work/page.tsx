import { cn } from "@/lib/utils";
import { copy } from "@/lib/content";
import type { Metadata } from "next";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { experiences } from "@/lib/data";
export const metadata: Metadata = {
  title: copy.journey.metaTitle,
  description: copy.journey.metaDescription,
};
export default function WorkPage() {
  return (
    <PageLayout>
      <PageHeader
        kicker={copy.journey.eyebrow}
        title={copy.journey.title}
        description={copy.journey.description}
      />
      <section
        className={cn(
          "inner-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "pt-[35px] pb-12.5",
          "min-[600px]:pt-[55px] min-[600px]:pb-[75px]",
        )}
      >
        <div
          className={cn(
            "chapter-list",
            "gap-7 grid grid-cols-[1fr]",
            "min-[600px]:gap-[25px] min-[600px]:grid-cols-[repeat(2,_minmax(0,_1fr))]",
          )}
        >
          {experiences.map((experience) => (
            <article
              className={cn(
                "chapter-card",
                "p-[25px] rounded-[16px] border border-solid border-border bg-card",
                "min-[600px]:p-8",
                "[&_h2]:font-heading [&_h2]:text-[30px] [&_h2]:font-bold [&_h2]:tracking-[-0.8px] [&_h2]:leading-[1.15] [&_h2]:mt-[23px]",
                "[&_.chapter-role]:text-primary [&_.chapter-role]:text-[12px] [&_.chapter-role]:mt-2.5 [&_.chapter-role]:mb-5",
                "[&>p]:text-muted-foreground [&>p]:text-[13px] [&>p]:leading-[1.9]",
                "[&_li]:text-muted-foreground [&_li]:text-[13px] [&_li]:leading-[1.9]",
                "[&_ul]:mt-5 [&_ul]:pl-[17px] [&_ul]:list-disc",
                "[&_li+li]:mt-2.5",
              )}
              key={experience.id}
            >
              <div
                className={cn(
                  "chapter-label",
                  "gap-5 flex justify-between text-[10px] text-muted-foreground",
                )}
              >
                <span
                  className={cn(
                    "eyebrow",
                    "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
                    "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
                  )}
                >
                  {experience.period}
                </span>
                <span>{experience.location}</span>
              </div>
              <h2>{experience.company}</h2>
              <p className="chapter-role">{experience.position}</p>
              <p>{experience.description}</p>
              {experience.responsibilities.length > 0 && (
                <ul>
                  {experience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

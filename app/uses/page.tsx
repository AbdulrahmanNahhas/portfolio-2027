import { cn } from "@/lib/utils";
import { copy } from "@/lib/content";
import type { Metadata } from "next";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { type UseItem, usesData } from "@/lib/data";
export const metadata: Metadata = {
  title: copy.toolbox.metaTitle,
  description: copy.toolbox.metaDescription,
};
function ToolCard({ item }: { item: UseItem }) {
  const links = [
    {
      label: copy.toolbox.linkLabels.website,
      href: item.links?.website,
    },
    {
      label: copy.toolbox.linkLabels.code,
      href: item.links?.code,
    },
    {
      label: copy.toolbox.linkLabels.external,
      href: item.links?.external,
    },
  ].filter((link) => link.href);
  return (
    <article
      className={cn(
        "tool-card",
        "p-[25px] gap-3 rounded-[14px] border border-solid border-border bg-card flex flex-col",
        "[&_.tool-monogram]:rounded-[10px] [&_.tool-monogram]:grid [&_.tool-monogram]:place-items-center [&_.tool-monogram]:size-12 [&_.tool-monogram]:bg-secondary [&_.tool-monogram]:text-primary [&_.tool-monogram]:font-heading [&_.tool-monogram]:text-[22px] [&_.tool-monogram]:font-bold",
        "[&_h3]:font-heading [&_h3]:font-bold [&_h3]:text-[23px] [&_h3]:tracking-[-0.5px]",
        "[&_.eyebrow]:text-[9px]",
        "[&_p]:text-[12px] [&_p]:text-muted-foreground [&_p]:leading-[1.9] [&_p]:grow",
        "[&_.tool-links]:gap-[15px] [&_.tool-links]:flex [&_.tool-links]:mt-[5px]",
      )}
    >
      <span className="tool-monogram" aria-hidden="true">
        {item.name.slice(0, 2)}
      </span>
      <span
        className={cn(
          "eyebrow",
          "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
          "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
        )}
      >
        {item.tag}
      </span>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <div
        className={cn(
          "tool-links",
          "[&_a]:gap-[5px] [&_a]:text-[11px] [&_a]:flex [&_a]:items-center",
          "[&_svg]:w-3",
        )}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.name} ${link.label.toLowerCase()}`}
          >
            {link.label}
            <ArrowUpRightIcon />
          </a>
        ))}
      </div>
    </article>
  );
}
export default function UsesPage() {
  return (
    <PageLayout>
      <PageHeader
        kicker={copy.toolbox.eyebrow}
        title={copy.toolbox.title}
        description={copy.toolbox.description}
      />
      <section
        className={cn(
          "inner-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "pt-[35px] pb-12.5",
          "min-[600px]:pt-[55px] min-[600px]:pb-[75px]",
        )}
      >
        <h2
          className={cn(
            "subheading",
            "font-heading text-[32px] font-bold tracking-[-0.8px] mb-[25px]",
          )}
        >
          {copy.toolbox.theEverydayCompanions}
        </h2>
        <div
          className={cn(
            "tools-grid",
            "gap-4.5 grid grid-cols-[1fr]",
            "min-[600px]:grid-cols-[repeat(2,_minmax(0,_1fr))] min-[900px]:grid-cols-[repeat(3,_minmax(0,_1fr))]",
          )}
        >
          {usesData.main.map((item) => (
            <ToolCard item={item} key={item.name} />
          ))}
        </div>
      </section>
      <section
        className={cn(
          "inner-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "pt-[35px] pb-12.5",
          "min-[600px]:pt-[55px] min-[600px]:pb-[75px]",
        )}
      >
        <h2
          className={cn(
            "subheading",
            "font-heading text-[32px] font-bold tracking-[-0.8px] mb-[25px]",
          )}
        >
          {copy.toolbox.keepingAnEyeOnThese}
        </h2>
        <div
          className={cn(
            "tools-grid",
            "gap-4.5 grid grid-cols-[1fr]",
            "min-[600px]:grid-cols-[repeat(2,_minmax(0,_1fr))] min-[900px]:grid-cols-[repeat(3,_minmax(0,_1fr))]",
          )}
        >
          {usesData.watching.map((item) => (
            <ToolCard item={item} key={item.name} />
          ))}
        </div>
      </section>
      <section
        className={cn(
          "inner-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "pt-[35px] pb-12.5",
          "min-[600px]:pt-[55px] min-[600px]:pb-[75px]",
        )}
      >
        <h2
          className={cn(
            "subheading",
            "font-heading text-[32px] font-bold tracking-[-0.8px] mb-[25px]",
          )}
        >
          {copy.toolbox.onTheWorkbench}
        </h2>
        <div
          className={cn(
            "learning-grid",
            "gap-5.5 grid grid-cols-[1fr]",
            "min-[600px]:grid-cols-[repeat(2,_minmax(0,_1fr))]",
          )}
        >
          {usesData.stack.map((group) => (
            <article
              className={cn(
                "learning-card",
                "p-6 rounded-[15px] border border-solid border-border bg-card",
                "min-[900px]:p-7.5",
                "[&_h2]:font-heading [&_h2]:text-[25px] [&_h2]:font-[650] [&_h2]:mb-5",
                "[&_ul]:gap-[15px] [&_ul]:flex [&_ul]:flex-col",
                "[&_li]:gap-[15px] [&_li]:flex [&_li]:justify-between [&_li]:text-[13px]",
                "[&_li_span:last-child]:text-[10px] [&_li_span:last-child]:text-muted-foreground",
              )}
              key={group.category}
            >
              <h2>{group.category}</h2>
              <div
                className={cn("interest-tags", "gap-2.5 flex flex-wrap mt-7.5")}
              >
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className={cn(
                      "interest-tag",
                      "px-[17px] py-2.5 rounded-[50px] border border-solid border-border text-[12px]",
                    )}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

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
    { label: copy.toolbox.linkLabels.website, href: item.links?.website },
    { label: copy.toolbox.linkLabels.code, href: item.links?.code },
    { label: copy.toolbox.linkLabels.external, href: item.links?.external },
  ].filter((link) => link.href);
  return (
    <article className="tool-card">
      <span className="tool-monogram" aria-hidden="true">
        {item.name.slice(0, 2)}
      </span>
      <span className="eyebrow">{item.tag}</span>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <div className="tool-links">
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
      <section className="inner-section content-width">
        <h2 className="subheading">{copy.toolbox.theEverydayCompanions}</h2>
        <div className="tools-grid">
          {usesData.main.map((item) => (
            <ToolCard item={item} key={item.name} />
          ))}
        </div>
      </section>
      <section className="inner-section content-width">
        <h2 className="subheading">{copy.toolbox.keepingAnEyeOnThese}</h2>
        <div className="tools-grid">
          {usesData.watching.map((item) => (
            <ToolCard item={item} key={item.name} />
          ))}
        </div>
      </section>
      <section className="inner-section content-width">
        <h2 className="subheading">{copy.toolbox.onTheWorkbench}</h2>
        <div className="learning-grid">
          {usesData.stack.map((group) => (
            <article className="learning-card" key={group.category}>
              <h2>{group.category}</h2>
              <div className="interest-tags">
                {group.tools.map((tool) => (
                  <span key={tool} className="interest-tag">
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

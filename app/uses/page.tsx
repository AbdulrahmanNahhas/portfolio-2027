import {
  CodeIcon as Code2,
  ArrowSquareOutIcon as ExternalLink,
  GlobeIcon as Globe,
} from "@phosphor-icons/react";
import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeader } from "@/components/section";
import { type UseItem, usesData } from "@/lib/data";
import Image from "next/image";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The software, tools, and projects Abdulrahman Nahhas relies on and recommends — plus the independent work he's watching and supporting.",
};

const softwareCardClass =
  "group rounded-2xl border border-border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card hover:shadow-lg hover:shadow-foreground/5";

/** First-two-letters monogram on a cobalt field — the no-image placeholder. */
function Monogram({ name }: { name: string }) {
  const letters = name.trim().slice(0, 2).toUpperCase();
  return (
    <div className="relative grid aspect-square place-items-center overflow-hidden size-18 pt-8 p-2 bottom-6">
      <div aria-hidden className="signal-grid absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 90% at 50% 28%, color-mix(in oklch, var(--primary) 18%, transparent), transparent 70%)",
        }}
      />
      <span className="font-display relative text-4xl italic tracking-tight text-primary group-hover:scale-110 duration-200">
        {letters}
      </span>
    </div>
  );
}

function ItemCard({ item }: { item: UseItem }) {
  const links = [
    {
      label: "Website",
      icon: Globe,
      href: item.links?.website,
    },
    {
      label: "Code",
      icon: Code2,
      href: item.links?.code,
    },
    {
      label: "More",
      icon: ExternalLink,
      href: item.links?.external,
    },
  ].filter((link) => link.href);

  return (
    <div
      className="
        group flex h-full flex-col overflow-hidden rounded-2xl
        border border-border bg-card/40
        transition-all duration-300
        hover:-translate-y-1
        hover:border-foreground/20
        hover:bg-card
        hover:shadow-lg
        hover:shadow-foreground/5
      "
    >
      <div className="flex flex-col p-3 h-full">
        {/* Header */}
        <div className="flex items-center gap-3">
          {item.image ? (
            <div className="relative size-20 shrink-0 overflow-hidden rounded-xl
              group-hover:scale-95 duration-300 transition-all mb-2">
              <Image
                src={item.image}
                alt={`${item.name} logo`}
                className="size-full object-cover"
                loading="lazy"
                width={200}
                height={200}
              />
            </div>
          ) : item.logo ? (
            <div className="flex border border-border/40 size-18 mb-2 shrink-0 items-center justify-center rounded-xl bg-muted/40">
              <Icon
                icon={item.logo}
                className="size-12 transition-transform duration-250 group-hover:-rotate-5 group-hover:scale-110"
                style={{
                  color: item.color,
                }}
              />
            </div>
          ) :  (
            <Monogram name={item.name} />
          )}

          <div className="flex flex-col min-w-0 gap-1">
            <span className="kicker text-primary/80 text-[8px]!">
              {item.tag}
            </span>

            <h3
              className="
                font-display text-2xl text-[26px]
                tracking-tight text-foreground
                truncate
              "
            >
              {item.name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p
          className="
            text-sm leading-relaxed
            text-muted-foreground
            flex-1
          "
        >
          {item.description}
        </p>

        {/* Links */}
        {links.length > 0 && (
          <div className="mt-3 flex items-center gap-2">
            {links.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="
                  inline-flex items-center gap-1.5
                  rounded-lg border border-border
                  bg-background/50
                  px-2.5 py-1.5
                  text-xs text-muted-foreground
                  transition-colors
                  hover:bg-accent
                  hover:text-foreground
                "
              >
                <Icon className="size-3.5" />
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function UsesPage() {
  const {  main, watching, stack } = usesData;

  return (
    <PageLayout>
      <PageHeader
        kicker="Uses"
        title="The software I use, recommend, and keep an eye on."
        description="What's on my machine, what I'd point you to, and the independent projects I'm watching and supporting. Mostly open source, deliberately chosen."
      />

      {/* Software — the daily setup */}
      <Section bordered>
        <SectionHeader label="Use & recommend" count={main.length} />
        <p className="-mt-8 mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          A curated shortlist I&apos;d point others to — distros, apps, tools, and services worth
          your time.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {main.map((item, index) => (
            <Reveal key={item.name} delay={index * 50}>
              <ItemCard item={item} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Watching & supporting — projects I admire */}
      <Section bordered>
        <SectionHeader label="Watching & supporting" count={watching.length} />
        <p className="-mt-8 mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Independent, decentralized, and well-crafted work I&apos;m following and rooting for.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {watching.map((item, index) => (
            <Reveal key={item.name} delay={index * 50}>
              <ItemCard item={item} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Primary stack — at a glance */}
      <Section>
        <SectionHeader label="Primary stack" count={stack.length} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((column, index) => (
            <Reveal key={column.category} delay={index * 60}>
              <div>
                <p className="kicker text-primary/80">{column.category}</p>
                <ul className="mt-4 space-y-2.5">
                  {column.tools.map((tool) => (
                    <li
                      key={tool}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        text="Want to compare setups, ask about a tool, or talk about the trade-offs behind these choices?"
        links={[
          { href: "/projects", label: "See the work" },
          { href: "/contact", label: "Get in touch", primary: true },
        ]}
      />
    </PageLayout>
  );
}

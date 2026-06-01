import { LinkButton } from "@/components/link-button";

type CtaLink = {
  label: string;
  href: string;
  primary?: boolean;
};

type CtaSectionProps = {
  text: string;
  links: CtaLink[];
};

export function CtaSection({ text, links }: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-border py-24">
      <div aria-hidden="true" className="section-field absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl border border-foreground/25 bg-card/35 p-6 text-center sm:p-8">
          <p className="mx-auto mb-8 max-w-xl text-lg leading-8 text-muted-foreground">{text}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {links.map((link) => (
            <LinkButton
              key={link.href}
              href={link.href}
              variant={link.primary ? "primary" : "secondary"}
              icon={link.primary ? "arrow-up-right" : "arrow-right"}
            >
              {link.label}
            </LinkButton>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

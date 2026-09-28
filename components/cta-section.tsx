import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";

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
    <section className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, color-mix(in oklch, var(--primary) 12%, transparent), transparent 70%)",
            }}
          />
          <div className="relative">
            <p className="kicker text-primary/80">Let&apos;s talk</p>
            <p className="font-display mx-auto mt-5 max-w-2xl text-balance text-2xl leading-snug tracking-tight text-foreground sm:text-3xl md:text-4xl">
              {text}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {links.map((link) => (
                <LinkButton
                  key={link.href}
                  href={link.href}
                  variant={link.primary ? "primary" : "outline"}
                  size="lg"
                  icon={link.primary ? "arrow-up-right" : "arrow-right"}
                >
                  {link.label}
                </LinkButton>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-10">
        <p className="mx-auto mb-8 max-w-xl text-muted-foreground">{text}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 ${
                link.primary
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "border border-border hover:border-foreground hover:bg-foreground/5"
              }`}
            >
              <span>{link.label}</span>
              {link.primary && <ArrowUpRight className="size-4" />}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
import { copy } from "@/lib/content";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
export function PageLayout({
  children,
  showFooter = true,
}: {
  children: ReactNode;
  showFooter?: boolean;
}) {
  return (
    <div className="overflow-clip">
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
export function PageHeader({
  kicker,
  title,
  description,
  children,
}: {
  kicker: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={cn(
        "page-header mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
        "py-10 border-b [border-bottom-style:solid] border-b-border",
        "min-[600px]:py-12.5 min-[900px]:pt-17.5 min-[900px]:pb-15",
        "[&_.eyebrow>span]:text-[22px] [&_.eyebrow>span]:text-primary",
        "[&_h1]:font-heading [&_h1]:max-w-237.5 [&_h1]:font-[750] [&_h1]:text-[43px] [&_h1]:leading-[1.08] [&_h1]:tracking-[-0.055em] [&_h1]:mt-6",
        "min-[600px]:[&_h1]:text-[clamp(42px,_5.3vw,_70px)]",
        "[&>p]:text-[14px] [&>p]:leading-[1.85] [&>p]:text-muted-foreground [&>p]:max-w-162.5 [&>p]:mt-6",
        "min-[600px]:[&>p]:text-[16px]",
      )}
    >
      <span
        className={cn(
          "eyebrow",
          "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
          "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
        )}
      >
        <span aria-hidden="true">{copy.pageLayout.decoration}</span> {kicker}
      </span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}

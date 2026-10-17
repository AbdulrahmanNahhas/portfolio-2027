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
    <div className="site-shell">
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
    <section className="page-header content-width">
      <span className="eyebrow">
        <span aria-hidden="true">{copy.pageLayout.decoration}</span> {kicker}
      </span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}

import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

interface PageLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function PageLayout({ children, showFooter = true }: PageLayoutProps) {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-foreground/10">
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]">
        <div className="absolute inset-0 noise" />
      </div>

      <Navigation />

      {children}

      {showFooter && <Footer />}
    </main>
  );
}

interface PageHeaderProps {
  number: string;
  label: string;
  title: string;
  description?: string;
}

export function PageHeader({ number, label, title, description }: PageHeaderProps) {
  return (
    <section className="relative border-b border-foreground/30 pb-16 pt-28">
      <div className="absolute inset-0 grid-overlay opacity-45" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex items-center gap-4">
          <span className="border border-foreground/35 px-3 py-1 font-mono text-xs text-foreground">
            {number}
          </span>
          <div className="h-px w-12 bg-foreground/35" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {label}
          </span>
        </div>

        <h1 className="mb-6 text-5xl font-semibold tracking-normal text-foreground md:text-7xl">
          {title}
        </h1>

        {description && (
          <p className="max-w-2xl border-l border-foreground/30 pl-5 text-lg leading-8 text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

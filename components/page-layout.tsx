import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

interface PageLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function PageLayout({ children, showFooter = true }: PageLayoutProps) {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      {children}
      {showFooter && <Footer />}
    </main>
  );
}

interface PageHeaderProps {
  kicker: string;
  title: string;
  description?: string;
  /** Optional node rendered under the lede (e.g. meta chips). */
  children?: ReactNode;
}

export function PageHeader({ kicker, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-14 pt-32 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(60% 80% at 18% 0%, color-mix(in oklch, var(--primary) 10%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          <p className="kicker text-primary/80">{kicker}</p>
        </div>

        <h1 className="font-display mt-6 max-w-4xl text-balance text-5xl leading-[0.98] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  muted?: boolean;
  /** Constrain to a comfortable editorial measure. */
  size?: "default" | "wide";
};

type SectionHeaderProps = {
  label: string;
  count?: string | number;
  icon?: ComponentType<{ className?: string }>;
  className?: string;
};

type Stat = {
  label: string;
  value: string | number;
};

export function Section({
  children,
  className = "",
  bordered = false,
  muted = false,
  size = "default",
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 sm:py-24",
        bordered && "border-b border-border",
        muted && "bg-secondary/40",
        className,
      )}
    >
      <div className={cn("mx-auto px-5 sm:px-8", size === "wide" ? "max-w-7xl" : "max-w-6xl")}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ label, count, icon: Icon, className = "" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 flex items-center gap-4", className)}>
      <div className="flex items-center gap-2.5">
        {Icon && <Icon className="size-4 text-muted-foreground" />}
        <span className="kicker">{label}</span>
      </div>
      <div className="h-px flex-1 bg-border" />
      {count !== undefined && (
        <span className="kicker tabular-nums text-muted-foreground/70">{count}</span>
      )}
    </div>
  );
}

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="border-t border-border pt-4">
          <p className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            {stat.value}
          </p>
          <p className="kicker mt-2.5">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

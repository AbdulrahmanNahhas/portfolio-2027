import type { ComponentType, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  muted?: boolean;
};

type SectionHeaderProps = {
  label: string;
  count?: string | number;
  icon?: ComponentType<{ className?: string }>;
  active?: boolean;
  className?: string;
};

type Stat = {
  label: string;
  value: string | number;
};

export function Section({ children, className = "", bordered = false, muted = false }: SectionProps) {
  return (
    <section
      className={`relative py-24 ${bordered ? "border-b border-border" : ""} ${
        muted ? "bg-card/30" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">{children}</div>
    </section>
  );
}

export function SectionHeader({
  label,
  count,
  icon: Icon,
  active = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 flex items-center gap-4 ${className}`}>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="size-4 text-muted-foreground" />}
        {active && <span className="size-2 bg-warning soft-pulse" />}
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="h-px flex-1 bg-border" />
      {count !== undefined && (
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {count}
        </span>
      )}
    </div>
  );
}

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="mb-2 font-mono text-3xl text-foreground md:text-4xl">{stat.value}</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

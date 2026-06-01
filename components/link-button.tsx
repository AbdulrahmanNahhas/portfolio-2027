import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type LinkButtonVariant = "primary" | "secondary" | "ghost";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  icon?: "arrow-right" | "arrow-up-right" | "none";
  variant?: LinkButtonVariant;
};

const variantClassName: Record<LinkButtonVariant, string> = {
  primary:
    "border-foreground bg-foreground text-background hover:bg-background hover:text-foreground",
  secondary:
    "border-foreground/40 bg-background/20 text-foreground hover:border-foreground hover:bg-foreground/10",
  ghost:
    "border-border bg-transparent text-foreground hover:border-foreground hover:bg-foreground/5",
};

function Icon({ name }: { name: NonNullable<LinkButtonProps["icon"]> }) {
  if (name === "none") return null;
  if (name === "arrow-up-right") {
    return <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />;
  }

  return <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />;
}

export function LinkButton({
  href,
  children,
  className,
  external = false,
  icon = "arrow-right",
  variant = "secondary",
}: LinkButtonProps) {
  const classNames = cn(
    "group inline-flex items-center justify-center gap-3 border px-7 py-4 text-sm uppercase tracking-[0.18em] transition-all duration-300",
    variantClassName[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classNames}>
        <span className="inline-flex items-center gap-3">{children}</span>
        <Icon name={icon} />
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      <span className="inline-flex items-center gap-3">{children}</span>
      <Icon name={icon} />
    </Link>
  );
}

import {
  ArrowRightIcon as ArrowRight,
  ArrowUpRightIcon as ArrowUpRight,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type LinkButtonVariant = "primary" | "outline" | "ghost";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  icon?: "arrow-right" | "arrow-up-right" | "none";
  variant?: LinkButtonVariant;
  size?: "default" | "lg";
};

const variantClassName: Record<LinkButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md hover:shadow-primary/20",
  outline:
    "border border-border bg-card/40 text-foreground hover:border-foreground/30 hover:bg-card",
  ghost: "text-foreground hover:bg-secondary",
};

const sizeClassName = {
  default: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

function Icon({ name }: { name: NonNullable<LinkButtonProps["icon"]> }) {
  if (name === "none") return null;
  if (name === "arrow-up-right") {
    return (
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    );
  }
  return <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />;
}

export function LinkButton({
  href,
  children,
  className,
  external = false,
  icon = "arrow-right",
  variant = "outline",
  size = "default",
}: LinkButtonProps) {
  const classNames = cn(
    "group inline-flex items-center justify-center gap-2  font-medium tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
    variantClassName[variant],
    sizeClassName[size],
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classNames}>
        <span className="inline-flex items-center gap-2">{children}</span>
        <Icon name={icon} />
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      <span className="inline-flex items-center gap-2">{children}</span>
      <Icon name={icon} />
    </Link>
  );
}

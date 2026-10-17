import Link from "next/link";
import {
  ArrowUpRightIcon,
  CodeIcon,
  WrenchIcon,
  AsteriskIcon,
} from "@phosphor-icons/react/ssr";
import { Badge } from "@/components/ui/badge";
import { copy } from "@/lib/content";

export function ProjectsUpcoming({ compact = false }: { compact?: boolean }) {
  const Heading = compact ? "h3" : "h2";
  const text = copy.projectsUpcoming;
  return (
    <div className="group relative grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-[1.2fr_1fr]">
      <div className="relative z-10 flex flex-col items-start gap-5 p-7 sm:p-10 lg:p-12">
        <Badge variant="secondary">
          <WrenchIcon data-icon="inline-start" />
          {text.status}
        </Badge>
        <Heading className="max-w-sm font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {text.title}
        </Heading>
        <p className="max-w-md text-sm leading-7 text-muted-foreground">
          {text.description}
        </p>
        <Link
          className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          href={compact ? "/projects" : "/about"}
        >
          {compact ? text.peek : text.about}
          <ArrowUpRightIcon aria-hidden="true" className="size-4" />
        </Link>
      </div>
      <div
        aria-hidden="true"
        className="relative grid min-h-60 place-items-center overflow-hidden bg-secondary/60 md:min-h-80"
      >
        <div className="absolute size-60 rounded-full border border-dashed border-primary/20" />
        <div className="absolute h-36 w-52 translate-x-4 translate-y-3 rotate-6 rounded-xl border border-primary/15 bg-mint shadow-sm" />
        <div className="relative w-56 -rotate-6 rounded-xl border border-border bg-card shadow-[8px_12px_0_var(--accent)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-3 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:-rotate-6">
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
            <i className="size-1 rounded-full bg-primary/50" />
            <i className="size-1 rounded-full bg-primary/35" />
            <i className="size-1 rounded-full bg-primary/20" />
            <span className="ml-auto font-mono text-[8px] text-muted-foreground">
              {text.window}
            </span>
          </div>
          <div className="p-5">
            <CodeIcon className="mb-4 size-7 text-primary" />
            <div className="mb-2 h-2 w-28 rounded bg-primary/20" />
            <div className="h-1.5 w-36 rounded bg-muted" />
            <div className="mt-4 flex gap-2">
              <span className="h-8 flex-1 rounded bg-rose/70" />
              <span className="h-8 flex-1 rounded bg-butter/70" />
              <span className="h-8 flex-1 rounded bg-mint" />
            </div>
          </div>
        </div>
        <span className="absolute right-5 top-6 rotate-12 rounded-lg border border-border bg-butter px-3 py-2 font-mono text-xs text-object-ink">
          {text.sticker}
        </span>
        <AsteriskIcon
          weight="bold"
          className="absolute bottom-7 left-7 size-7 text-primary"
        />
      </div>
    </div>
  );
}

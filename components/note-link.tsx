"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, type CSSProperties, type ReactNode } from "react";

// Choose a tilt only on interaction, keeping the initial server render stable.
export function NoteLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const [tilt, setTilt] = useState(0);
  return (
    <Link
      href={href}
      className={cn(
        "note-card",
        "p-6.5 gap-4.5 rounded-[16px] border border-solid border-border bg-card [transition:translate_0.25s,_rotate_0.25s,_scale_0.16s,_box-shadow_0.25s] flex flex-col items-start",
        "min-[600px]:p-8.5",
        "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
        "hover:transform-none",
        "fine-hover:hover:[translate:0_-4px] fine-hover:hover:rotate-[var(--note-tilt,_0deg)] fine-hover:hover:shadow-[0_12px_28px_#23365912]",
        "motion-reduce:hover:transform-none",
        "[&_small]:text-[11px] [&_small]:text-muted-foreground",
        "[&_h2]:font-heading [&_h2]:text-[27px] [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.8px] [&_h2]:font-[650]",
        "min-[600px]:[&_h2]:text-[30px]",
        "[&_p]:text-[13px] [&_p]:leading-[1.9] [&_p]:text-muted-foreground [&_p]:grow",
        "active:scale-[0.98]",
        "fine-hover:focus-visible:[translate:0_-4px] fine-hover:focus-visible:rotate-[var(--note-tilt,_0deg)] fine-hover:focus-visible:shadow-[0_12px_28px_#23365912]",
      )}
      style={
        {
          "--note-tilt": `${tilt}deg`,
        } as CSSProperties
      }
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse")
          setTilt((1 + Math.random() * 1.3) * (Math.random() < 0.5 ? -1 : 1));
      }}
    >
      {children}
    </Link>
  );
}

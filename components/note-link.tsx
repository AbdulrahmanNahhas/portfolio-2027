"use client";

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
      className="note-card"
      style={{ "--note-tilt": `${tilt}deg` } as CSSProperties}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse")
          setTilt((1 + Math.random() * 1.3) * (Math.random() < 0.5 ? -1 : 1));
      }}
    >
      {children}
    </Link>
  );
}

"use client";

import { copy, message } from "@/lib/content";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  AsteriskIcon,
  ListIcon,
  MoonIcon,
  SunIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/data";
import { mainNavItems, footerNavItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        {copy.navigation.skipToContent}
      </a>
      <nav className="site-nav" aria-label={copy.navigation.mainNavigation}>
        <Link
          className="wordmark"
          href="/"
          aria-label={message(copy.navigation.homeLabel, {
            name: siteConfig.displayName,
          })}
        >
          <AsteriskIcon weight="bold" aria-hidden="true" />
          {siteConfig.displayName}
          <span className="wordmark-dot">{copy.navigation.decoration}</span>
        </Link>
        <div className="desktop-nav">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "nav-link",
                (pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))) &&
                  "active",
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <Button
            variant="ghost"
            size="icon"
            aria-label={copy.navigation.toggleLightAndDarkTheme}
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <SunIcon className="theme-sun" />
            <MoonIcon className="theme-moon" />
          </Button>
          <span className="nav-greeting">
            {copy.navigation.gladYoureHere}
            <span aria-hidden="true">{copy.navigation.decoration2}</span>
          </span>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="mobile-menu"
                  aria-label={copy.navigation.openNavigation}
                />
              }
            >
              <ListIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{copy.navigation.aroundHere}</SheetTitle>
                <SheetDescription>
                  {copy.navigation.pickALittleCornerToExplore}
                </SheetDescription>
              </SheetHeader>
              <div className="mobile-links">
                {footerNavItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

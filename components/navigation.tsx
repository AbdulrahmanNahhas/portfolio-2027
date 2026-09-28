"use client";

import {
  ListIcon as Menu,
  MoonIcon as Moon,
  SunIcon as Sun,
  XIcon as X,
} from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import { mainNavItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Monogram() {
  return (
    <span
      className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm"
      aria-hidden
    >
      <span className="font-display text-base leading-none">a</span>
    </span>
  );
}

function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "grid size-9 place-items-center  border border-border bg-card/50 text-foreground transition-colors hover:border-foreground/30 hover:bg-card",
        className,
      )}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color mode"}
    >
      {mounted && isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/65"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-foreground"
            aria-label={`${siteConfig.name} — home`}
          >
            <Monogram />
            <span className="hidden text-sm font-medium tracking-tight text-foreground sm:inline">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {mainNavItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative  px-3.5 py-2 text-sm tracking-tight transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-px h-px bg-foreground/70" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:grid" />
            <Link
              href="/contact"
              className="hidden h-9 items-center  bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 sm:inline-flex"
            >
              Get in touch
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="grid size-9 place-items-center  border border-border bg-card/50 text-foreground transition-colors hover:bg-card lg:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            className="fixed inset-0 top-16 z-40 bg-background/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative z-50 mx-3 mt-2 overflow-hidden  border border-border bg-card shadow-xl shadow-foreground/10">
            <div className="p-3">
              <div className="grid gap-1">
                {mainNavItems.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between  px-4 py-3 text-sm transition-colors",
                        active
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                      )}
                    >
                      <span>{item.label}</span>
                      {active && <span className="size-1.5  bg-primary" />}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-2 flex items-center justify-between gap-2 border-t border-border pt-3">
                <ThemeToggle />
                <Link
                  href="/contact"
                  className="inline-flex h-9 flex-1 items-center justify-center gap-2  bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

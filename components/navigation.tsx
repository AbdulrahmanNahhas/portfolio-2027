"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import { mainNavItems } from "@/lib/navigation";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ThemeToggle({ compact = false }: { compact?: boolean }) {
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
      className={`group flex items-center justify-center border border-foreground/35 bg-background/40 text-foreground transition-colors hover:bg-foreground hover:text-background ${
        compact ? "h-9 gap-3 px-4" : "size-8"
      }`}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color mode"}
    >
      {mounted && isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      {compact && (
        <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
          {mounted && isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-foreground/30 bg-background/95 shadow-[0_12px_40px_rgba(33,31,24,0.10)] backdrop-blur-xl"
          : "bg-background backdrop-blur-sm"
      }`}
    >
      {/* Bottom gradient line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/40 to-transparent" />
      {/* Grid overlay */}
      {/*<div className="pointer-events-none absolute inset-0 grid-overlay-dense opacity-20" />*/}

      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid h-12 grid-cols-[1fr_auto] items-center gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-2.5 justify-self-start text-foreground"
            aria-label={`${siteConfig.name} home`}
          >
            {/* Icon mark */}
            <div className="relative flex size-7 items-center justify-center border border-foreground/40 bg-background/45 transition-colors group-hover:border-foreground">
              <div className="absolute -right-[3px] -top-[3px] size-1.5 border border-foreground bg-background" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 109.92 108.89"
                className="size-4"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M56.54.25s.02.01.03.02c0,0,0,0,0,0,0,0-.02-.01-.03-.02Z"
                  />
                  <path
                    fill="currentColor"
                    d="M109.8,41.11c-.03-.05-.07-.09-.1-.14h0s-12.37-15.39-12.37-15.39c-.27-.34-.73-.44-1.11-.26l-10.66,4.82L56.57.27h0s-.02-.02-.03-.02c-.05-.06-.11-.1-.17-.13-.03-.02-.06-.03-.08-.04-.05-.03-.1-.05-.15-.06-.03,0-.07-.02-.09-.02-.06,0-.1,0-.16,0h-.09s-.03,0-.05,0c0,0-.01,0-.02,0-.01,0-.02,0-.03,0-.02,0-.05.01-.07.02-.02,0-.04,0-.06.02l-18.33,7.1c-.39.15-.63.55-.59.97l1.28,11.48L.52,37.97c-.28.14-.47.41-.51.73,0,.05,0,.09,0,.14v-.04s0,.1,0,.1c0,0,0,0,0,.01l1.13,19.72c.03.42.33.77.74.86l11.34,2.34,5.89,41.16c.05.32.24.58.53.72l19.28,5.17c.08.02.16.03.24.03.33,0,.64-.18.81-.48l5.74-10.07,40.77,7.09c.06,0,.1,0,.16,0,.26,0,.5-.1.68-.3l11.06-16.7c.22-.35.19-.82-.09-1.13l-7.88-8.63h0s0,0,0,0l19.39-36.68c.15-.28.15-.61,0-.89ZM56.24,2.6l29.65,30.56-31.53.69c-.51,0-.92.43-.91.94l.22,21.56h0s-1.26-.4-1.26-.4l-6.89-2.5-8.46-3.08L56.24,2.6ZM53.68,56.34h0s-.01,0-.01,0h.01ZM52.39,55.94h-.02s-5.27-1.92-5.27-1.92l5.29,1.92ZM2.62,39.01l36.7-18.02,1.52-.74-9.09,30.2c-.15.49.13,1.01.61,1.15l13.48,4.24-13.48-4.23,15.9,4.99,3.44,1.08h-.02s.09.02.09.02l1.18.43h0s-10.85,13.89-10.85,13.89L2.62,39.01ZM20.75,101.3l-6.03-42.14,25.92,17.97c.42.29,1,.19,1.28-.22l12.43-17.48,2.15,2.9,7.84,11.61-43.59,27.37ZM54.36,59.42l2.13,2.86.02.03-2.15-2.89ZM43.44,96.06l25.11-19.09c.4-.32.48-.89.18-1.3l-10.67-14.38-.03-.05s0,0,0,0l-1.95-2.89,2.23-.75.28-.09,14.25-4.07,12.56,49.91-41.96-7.28ZM87.6,80.04l-10.4-29.78c-.13-.38-.49-.62-.88-.62-.1,0-.2.02-.3.05l-18.24,6.13h-.04s0,.01,0,.01h0s-2.19.63-2.19.63h-.02s0,0,0,0h0l.6-17.55,51.37,3.48-19.91,37.65Z"
                  />
                </g>
              </svg>
            </div>
            {/* Name — single line */}
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground">
              {siteConfig.name.split(" ")[0]}
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden items-center justify-self-center lg:flex">
            {/* Thin left border cap */}
            <div className="h-5 w-px bg-foreground/25" />
            {mainNavItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex items-center gap-1.5 px-4 py-1 font-mono text-[10px] uppercase tracking-[0.22em] transition-all duration-200 ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Code prefix — subtle, fades on inactive */}
                  <span
                    className={`text-[8px] transition-opacity duration-200 ${
                      active ? "opacity-50" : "opacity-0 group-hover:opacity-35"
                    }`}
                  >
                    {item.code}
                  </span>
                  <span>{item.label}</span>

                  {/* Active underline indicator */}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-[1px] h-px bg-foreground" />
                  )}
                </Link>
              );
            })}
            {/* Thin right border cap */}
            <div className="h-5 w-px bg-foreground/25" />
          </div>

          {/* ── Right cluster ── */}
          <div className="flex items-center gap-2 justify-self-end">
            <div className="hidden items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground 2xl:flex">
              <span className="size-1.5 bg-warning soft-pulse" />
              <span>Online</span>
            </div>
            <ThemeToggle />

            {/* ── Mobile hamburger ── */}
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="flex size-8 items-center justify-center border border-foreground/40 bg-background/40 text-foreground transition-colors hover:bg-foreground hover:text-background lg:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        {isOpen && (
          <div className="fixed inset-x-4 top-16 z-50 border border-foreground/45 bg-background/95 shadow-[0_24px_90px_rgba(33,31,24,0.24)] backdrop-blur-xl lg:hidden">
            <div className="grid-overlay-dense absolute inset-0 opacity-20" />
            <div className="relative p-3">
              <div className="mb-3 flex items-center justify-between border-b border-foreground/25 px-2 pb-3 font-mono text-[9px] uppercase tracking-[0.26em] text-muted-foreground">
                <span>Menu Select</span>
                <span>AN-01</span>
              </div>
              <div className="grid gap-1.5">
                {mainNavItems.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between border px-4 py-3 font-mono uppercase tracking-[0.2em] transition-all ${
                        active
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/20 text-foreground hover:border-foreground/50 hover:bg-foreground/8"
                      }`}
                    >
                      <span className="text-[8px] opacity-50">{item.code}</span>
                      <span className="text-xs">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-3">
                <ThemeToggle compact />
              </div>
              <div className="mt-3 flex flex-col gap-1 border-t border-foreground/25 pt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                <span>{siteConfig.email}</span>
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

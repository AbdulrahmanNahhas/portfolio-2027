"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

const navItems = [
  { label: "Index", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/work", mobileOnly: true },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 scanlines opacity-30" />
      </div>

      <nav className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group flex flex-row relative gap-2">
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 109.92 108.89"
              className="size-8"
            >
              <title>Logo</title>
              <g id="Layer_1-2" data-name="Layer 1">
                <g>
                  <path fill="#fff" d="M56.54.25s.02.01.03.02c0,0,0,0,0,0,0,0-.02-.01-.03-.02Z" />
                  <path
                    fill="#fff"
                    d="M109.8,41.11c-.03-.05-.07-.09-.1-.14h0s-12.37-15.39-12.37-15.39c-.27-.34-.73-.44-1.11-.26l-10.66,4.82L56.57.27h0s-.02-.02-.03-.02c-.05-.06-.11-.1-.17-.13-.03-.02-.06-.03-.08-.04-.05-.03-.1-.05-.15-.06-.03,0-.07-.02-.09-.02-.06,0-.1,0-.16,0h-.09s-.03,0-.05,0c0,0-.01,0-.02,0-.01,0-.02,0-.03,0-.02,0-.05.01-.07.02-.02,0-.04,0-.06.02l-18.33,7.1c-.39.15-.63.55-.59.97l1.28,11.48L.52,37.97c-.28.14-.47.41-.51.73,0,.05,0,.09,0,.14v-.04s0,.1,0,.1c0,0,0,0,0,.01l1.13,19.72c.03.42.33.77.74.86l11.34,2.34,5.89,41.16c.05.32.24.58.53.72l19.28,5.17c.08.02.16.03.24.03.33,0,.64-.18.81-.48l5.74-10.07,40.77,7.09c.06,0,.1,0,.16,0,.26,0,.5-.1.68-.3l11.06-16.7c.22-.35.19-.82-.09-1.13l-7.88-8.63h0s0,0,0,0l19.39-36.68c.15-.28.15-.61,0-.89ZM56.24,2.6l29.65,30.56-31.53.69c-.51,0-.92.43-.91.94l.22,21.56h0s-1.26-.4-1.26-.4l-6.89-2.5-8.46-3.08L56.24,2.6ZM53.68,56.34h0s-.01,0-.01,0h.01ZM52.39,55.94h-.02s-5.27-1.92-5.27-1.92l5.29,1.92ZM2.62,39.01l36.7-18.02,1.52-.74-9.09,30.2c-.15.49.13,1.01.61,1.15l13.48,4.24-13.48-4.23,15.9,4.99,3.44,1.08h-.02s.09.02.09.02l1.18.43h0s-10.85,13.89-10.85,13.89L2.62,39.01ZM20.75,101.3l-6.03-42.14,25.92,17.97c.42.29,1,.19,1.28-.22l12.43-17.48,2.15,2.9,7.84,11.61-43.59,27.37ZM54.36,59.42l2.13,2.86.02.03-2.15-2.89ZM43.44,96.06l25.11-19.09c.4-.32.48-.89.18-1.3l-10.67-14.38-.03-.05s0,0,0,0l-1.95-2.89,2.23-.75.28-.09,14.25-4.07,12.56,49.91-41.96-7.28ZM87.6,80.04l-10.4-29.78c-.13-.38-.49-.62-.88-.62-.1,0-.2.02-.3.05l-18.24,6.13h-.04s0,.01,0,.01h0s-2.19.63-2.19.63h-.02s0,0,0,0h0l.6-17.55,51.37,3.48-19.91,37.65Z"
                  />
                </g>
              </g>
            </svg>
            <div className="flex flex-col items-start justify-start">
              <span className="text-sm font-medium tracking-[0.3em] uppercase text-foreground glitch-text">
                {siteConfig.name.split(" ")[0]}
              </span>
              <span className="text-[10px] text-muted-foreground tracking-[0.5em] font-mono  uppercase">
                {siteConfig.title}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center border border-border">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative px-6 py-3 text-xs tracking-[0.3em] uppercase transition-all duration-300 border-r border-border last:border-r-0 ${
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                    } ${item.mobileOnly && "md:hidden"}`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="font-mono text-[10px] opacity-50">0{index + 1}</span>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Status Indicator */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono tracking-widest">
                <span className="w-1.5 h-1.5 bg-foreground animate-pulse" />
                <span>SYS_ONLINE</span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground/50">
                {siteConfig.location}
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-foreground border border-border hover:bg-foreground hover:text-background transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-background h-[calc(100vh-80px)] z-90">
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <div className="relative flex flex-col h-full p-6 bg-background">
              <div className="flex-1 flex flex-col justify-center gap-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center gap-6 p-4 border border-border transition-all duration-300 ${
                        isActive ? "bg-foreground text-background" : "hover:bg-foreground/5"
                      }`}
                    >
                      <span className="font-mono text-sm text-muted-foreground">0{index + 1}</span>
                      <span className="text-xl tracking-[0.3em] uppercase">{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="border-t border-border pt-6 mt-6 ">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>{siteConfig.email}</span>
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

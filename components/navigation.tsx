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
    <header className="relative z-20">
      <a
        className="absolute left-[30px] top-[-80px] rounded-[10px] bg-card px-5 py-3 focus:top-3"
        href="#main-content"
      >
        {copy.navigation.skipToContent}
      </a>
      <nav
        className="mx-auto flex min-h-28 w-[min(1376px,calc(100%-96px))] items-center justify-between gap-7 border-b border-border max-[1150px]:w-[calc(100%-64px)] max-[900px]:min-h-[88px] max-[600px]:min-h-[78px] max-[600px]:w-[calc(100%-40px)]"
        aria-label={copy.navigation.mainNavigation}
      >
        <Link
          className="inline-flex items-center font-heading text-[31px] font-extrabold tracking-[-1.8px] max-[900px]:text-[28px]"
          href="/"
          aria-label={message(copy.navigation.homeLabel, {
            name: siteConfig.displayName,
          })}
        >
          <AsteriskIcon
            className="mr-[9px] size-[29px] text-primary max-[600px]:size-6"
            weight="bold"
            aria-hidden="true"
          />
          {siteConfig.displayName}
          <span className="text-primary">{copy.navigation.decoration}</span>
        </Link>
        <div className="flex items-center gap-[7px] max-[900px]:hidden">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-[30px] px-[15px] py-[9px] text-[13px] font-medium transition-colors hover:bg-card max-[1150px]:px-[11px]",
                (pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))) &&
                  "bg-card",
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-[18px] max-[600px]:gap-[7px]">
          <Button
            variant="ghost"
            size="icon"
            aria-label={copy.navigation.toggleLightAndDarkTheme}
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <SunIcon className="dark:hidden" />
            <MoonIcon className="hidden dark:block" />
          </Button>
          <span className="text-[12px] max-[1150px]:hidden max-[900px]:inline max-[600px]:hidden">
            {copy.navigation.gladYoureHere}
            <span className="ml-[7px] text-primary" aria-hidden="true">
              {copy.navigation.decoration2}
            </span>
          </span>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="hidden max-[900px]:inline-flex"
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
              <div className="flex flex-col gap-6 p-6 text-xl">
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

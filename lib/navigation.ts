import navigation from "@/content/en/navigation.json";
export type NavItem = { id: string; label: string; href: string };
export const mainNavItems: NavItem[] = navigation.main;
export const footerNavItems: NavItem[] = [
  ...navigation.main,
  ...navigation.extra,
];

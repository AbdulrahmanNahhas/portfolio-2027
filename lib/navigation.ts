export type NavItem = {
  label: string;
  href: string;
};

export const mainNavItems: NavItem[] = [
  { label: "Index", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/work" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Uses", href: "/uses" },
  { label: "Contact", href: "/contact" },
];

export const footerNavItems: NavItem[] = mainNavItems;

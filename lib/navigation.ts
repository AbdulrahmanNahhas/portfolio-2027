export type NavItem = {
  code: string;
  label: string;
  href: string;
};

export const mainNavItems: NavItem[] = [
  { code: "01", label: "Index", href: "/" },
  { code: "02", label: "About", href: "/about" },
  { code: "03", label: "Projects", href: "/projects" },
  { code: "04", label: "Work", href: "/work" },
  { code: "05", label: "Skills", href: "/skills" },
  { code: "06", label: "Blog", href: "/blog" },
  { code: "07", label: "Contact", href: "/contact" },
];

export const footerNavItems = mainNavItems.filter((item) => item.href !== "/contact");

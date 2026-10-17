import { copy } from "@/lib/content";
import Link from "next/link";
import { ArrowUpRightIcon, AsteriskIcon } from "@phosphor-icons/react/ssr";
import { siteConfig } from "@/lib/data";
import { footerNavItems } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <AsteriskIcon
            className="footer-star"
            weight="bold"
            aria-hidden="true"
          />
          <h2>
            {copy.footer.seeYouAround}
            <br />
            {copy.footer.theInternet}
          </h2>
          <p>{copy.footer.madeWithCuriosityAlwaysAWorkIn}</p>
        </div>
        <div className="footer-links">
          <nav aria-label={copy.footer.footerNavigation}>
            {footerNavItems
              .filter((item) => item.href !== "/")
              .map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
          </nav>
          <div>
            <a
              href={siteConfig.social.gitlab}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.footer.gitlab}
              <ArrowUpRightIcon />
            </a>
            <a
              href={siteConfig.social.mastodon}
              target="_blank"
              rel="me noopener noreferrer"
            >
              {copy.footer.mastodon}
              <ArrowUpRightIcon />
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              {copy.footer.emailMe}
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          {copy.footer.decoration} {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span>{copy.footer.studentTinkererInternetPerson}</span>
        <a href="#main-content">{copy.footer.backToTheTop}</a>
      </div>
    </footer>
  );
}

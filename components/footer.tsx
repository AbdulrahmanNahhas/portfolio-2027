import { cn } from "@/lib/utils";
import { copy } from "@/lib/content";
import Link from "next/link";
import { ArrowUpRightIcon, AsteriskIcon } from "@phosphor-icons/react/ssr";
import { siteConfig } from "@/lib/data";
import { footerNavItems } from "@/lib/navigation";
export function Footer() {
  return (
    <footer
      className={cn(
        "site-footer",
        "px-5 border-t [border-top-style:solid] border-t-border pt-[35px] pb-6 bg-card",
        "min-[600px]:px-8 min-[600px]:pt-[55px] min-[1150px]:px-[max(48px,_calc((100vw_-_1240px)_/_2))]",
      )}
    >
      <div
        className={cn(
          "footer-top",
          "gap-[35px] flex justify-between pb-[35px]",
          "min-[600px]:gap-12.5 min-[600px]:pb-12.5 max-[600px]:flex-col",
          "[&_h2]:font-heading [&_h2]:text-[35px] [&_h2]:leading-[1.05] [&_h2]:tracking-[-1.5px] [&_h2]:font-bold",
          "min-[600px]:[&_h2]:text-[41px]",
          "[&_p]:text-[11px] [&_p]:text-muted-foreground [&_p]:mt-[15px]",
        )}
      >
        <div>
          <AsteriskIcon
            className={cn("footer-star", "text-primary size-7.5 mb-[17px]")}
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
        <div
          className={cn(
            "footer-links",
            "px-0 gap-[25px] grid items-start pt-2 w-full pb-0",
            "max-[600px]:justify-between min-[600px]:w-[min(440px,_100%)]",
            "[&_nav]:grid [&_nav]:flex-col [&_nav]:gap-y-1 [&_nav]:gap-x-6 [&_nav]:text-[12px] [&_nav]:grid-cols-[repeat(2,_minmax(0,_1fr))]",
            "min-[600px]:[&_nav]:gap-y-[5px] min-[600px]:[&_nav]:gap-x-8",
            "[&>div]:gap-3 [&>div]:flex [&>div]:flex-col [&>div]:text-[12px]",
            "[&_a]:gap-2.5 [&_a]:flex [&_a]:items-center",
            "[&_a:hover]:text-primary",
            "[&_svg]:size-[13px]",
            "[&_h3]:text-[10px] [&_h3]:font-[650] [&_h3]:uppercase [&_h3]:tracking-[0.1em] [&_h3]:text-muted-foreground",
            "[&_nav_a]:min-h-[31px] [&_nav_a]:w-fit [&_nav_a]:text-[13px] [&_nav_a]:[transition:color_0.2s,_translate_0.2s]",
            "motion-reduce:[&_nav_a]:[translate:none]! motion-reduce:[&_nav_a]:[rotate:none]! motion-reduce:[&_nav_a]:[scale:none]!",
            "fine-hover:[&_nav_a:hover]:[translate:3px_0]",
          )}
        >
          <div className="footer-navigation-group">
            <h3>{copy.footer.explore}</h3>
            <nav aria-label={copy.footer.footerNavigation}>
              {footerNavItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="footer-social-group">
            <h3>{copy.footer.elsewhere}</h3>
            <div
              className={cn(
                "footer-social-links",
                "gap-2 flex flex-wrap",
                "[&_a]:px-2.5 [&_a]:py-2 [&_a]:rounded-[8px] [&_a]:border [&_a]:border-solid [&_a]:border-border [&_a]:min-h-[35px] [&_a]:text-[11px] [&_a]:bg-background [&_a]:[transition:background_0.2s,_border-color_0.2s]",
                "[&_a:hover]:border-primary [&_a:hover]:bg-accent",
              )}
            >
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
      </div>
      <div
        className={cn(
          "footer-bottom",
          "border-t [border-top-style:solid] border-t-border pt-5.5 flex justify-between gap-y-[13px] gap-x-5 text-[9px] text-muted-foreground",
          "min-[600px]:gap-y-5 min-[600px]:text-[10px] max-[600px]:flex-wrap",
          "max-[600px]:[&>span:nth-child(2)]:order-3 max-[600px]:[&>span:nth-child(2)]:basis-full",
          "max-[600px]:[&>a]:ml-auto",
        )}
      >
        <span>
          {copy.footer.decoration} {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span>{copy.footer.studentTinkererInternetPerson}</span>
        <a href="#main-content">{copy.footer.backToTheTop}</a>
      </div>
    </footer>
  );
}

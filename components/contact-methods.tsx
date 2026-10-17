import { cn } from "@/lib/utils";
import { copy } from "@/lib/content";
import {
  ArrowUpRightIcon,
  EnvelopeIcon,
  GlobeIcon,
  MapPinIcon,
} from "@phosphor-icons/react/ssr";
import { siteConfig } from "@/lib/data";
export function ContactMethods() {
  return (
    <div>
      <div className={cn("contact-methods", "gap-4.5 flex flex-col")}>
        <a
          className={cn(
            "contact-method",
            "py-5 gap-4.5 border-b [border-bottom-style:solid] border-b-border flex items-center",
            "[&_svg]:size-6 [&_svg]:shrink-0 [&_svg]:text-primary",
            "[&_small]:text-[11px] [&_small]:text-muted-foreground [&_small]:block [&_small]:mb-1.5",
            "[&_span]:wrap-anywhere",
          )}
          href={`mailto:${siteConfig.email}`}
        >
          <EnvelopeIcon />
          <span>
            <small>{copy.contactMethods.emailIsAGoodPlaceToStart}</small>
            {siteConfig.email}
          </span>
          <ArrowUpRightIcon />
        </a>
        <a
          className={cn(
            "contact-method",
            "py-5 gap-4.5 border-b [border-bottom-style:solid] border-b-border flex items-center",
            "[&_svg]:size-6 [&_svg]:shrink-0 [&_svg]:text-primary",
            "[&_small]:text-[11px] [&_small]:text-muted-foreground [&_small]:block [&_small]:mb-1.5",
            "[&_span]:wrap-anywhere",
          )}
          href={siteConfig.social.mastodon}
          target="_blank"
          rel="me noopener noreferrer"
        >
          <GlobeIcon />
          <span>
            <small>{copy.contactMethods.aroundTheFediverse}</small>
            {siteConfig.socialLabels.mastodon}
          </span>
          <ArrowUpRightIcon />
        </a>
        <a
          className={cn(
            "contact-method",
            "py-5 gap-4.5 border-b [border-bottom-style:solid] border-b-border flex items-center",
            "[&_svg]:size-6 [&_svg]:shrink-0 [&_svg]:text-primary",
            "[&_small]:text-[11px] [&_small]:text-muted-foreground [&_small]:block [&_small]:mb-1.5",
            "[&_span]:wrap-anywhere",
          )}
          href={siteConfig.social.gitlab}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlobeIcon />
          <span>
            <small>{copy.contactMethods.codeExperiments}</small>
            {siteConfig.socialLabels.gitlab}
          </span>
          <ArrowUpRightIcon />
        </a>
        <div
          className={cn(
            "contact-method",
            "py-5 gap-4.5 border-b [border-bottom-style:solid] border-b-border flex items-center",
            "[&_svg]:size-6 [&_svg]:shrink-0 [&_svg]:text-primary",
            "[&_small]:text-[11px] [&_small]:text-muted-foreground [&_small]:block [&_small]:mb-1.5",
            "[&_span]:wrap-anywhere",
          )}
        >
          <MapPinIcon />
          <span>
            <small>{copy.contactMethods.myCornerOfTheWorld}</small>
            {siteConfig.location}
          </span>
        </div>
      </div>
      <aside
        className={cn(
          "contact-note",
          "p-[25px] rounded-tl-[3px] rounded-tr-[3px] rounded-br-[25px] rounded-bl-[3px] mt-5 bg-butter text-object-ink transform-[rotate(-2deg)]",
          "[&_h2]:font-heading [&_h2]:font-[650] [&_h2]:text-[25px]",
          "[&_p]:text-[13px] [&_p]:leading-[1.8] [&_p]:mt-3",
        )}
      >
        <h2>{copy.contactMethods.aLittleHelloGoesALongWay}</h2>
        <p>{copy.contactMethods.imHereToLearnShareAndMeet}</p>
      </aside>
    </div>
  );
}

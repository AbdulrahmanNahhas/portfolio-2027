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
      <div className="contact-methods">
        <a className="contact-method" href={`mailto:${siteConfig.email}`}>
          <EnvelopeIcon />
          <span>
            <small>{copy.contactMethods.emailIsAGoodPlaceToStart}</small>
            {siteConfig.email}
          </span>
          <ArrowUpRightIcon />
        </a>
        <a
          className="contact-method"
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
          className="contact-method"
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
        <div className="contact-method">
          <MapPinIcon />
          <span>
            <small>{copy.contactMethods.myCornerOfTheWorld}</small>
            {siteConfig.location}
          </span>
        </div>
      </div>
      <aside className="contact-note">
        <h2>{copy.contactMethods.aLittleHelloGoesALongWay}</h2>
        <p>{copy.contactMethods.imHereToLearnShareAndMeet}</p>
      </aside>
    </div>
  );
}

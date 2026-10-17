import { copy } from "@/lib/content";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { aboutData, currentInterests } from "@/lib/data";

export function CurrentInterests() {
  return (
    <section id="interests" className="current-section content-width">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{copy.personalSections.currentEyebrow}</span>
          <h2>{copy.personalSections.currentTitle}</h2>
        </div>
        <Link href="/skills" className="text-link">
          {copy.personalSections.theLearningMap}
          <ArrowUpRightIcon />
        </Link>
      </div>
      <div className="current-grid">
        {currentInterests.map((item) => (
          <article key={item.id} className={`current-card current-${item.tone}`}>
            <span className="current-tape" aria-hidden="true" />
            <div className="current-card-top">
              <span className="eyebrow">{item.tag}</span>
              <span className="current-symbol" aria-hidden="true">
                {item.symbol}
              </span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href={item.href} className="text-link">
              {item.linkLabel}
              <ArrowUpRightIcon />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
export function PersonalFacts() {
  return (
    <section
      className="personal-facts content-width"
      aria-label={copy.personalSections.aFewThingsAboutMe}
    >
      {aboutData.facts.map((fact) => (
        <div key={fact.id} className="personal-fact">
          <span className="fact-symbol" aria-hidden="true">
            {fact.symbol}
          </span>
          <div>
            <span className="eyebrow">{fact.label}</span>
            <p lang={fact.lang} dir={fact.dir === "rtl" ? "rtl" : undefined}>
              {fact.value}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
export function Principles() {
  return (
    <section className="principles-section content-width">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{copy.personalSections.notesToKeepNearby}</span>
          <h2>{copy.personalSections.principlesTitle}</h2>
        </div>
      </div>
      <div className="principles-grid">
        {aboutData.principles.map((principle) => (
          <article className="principle" key={principle.id}>
            <span aria-hidden="true">{copy.personalSections.decoration}</span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

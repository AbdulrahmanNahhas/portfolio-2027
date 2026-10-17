import { cn } from "@/lib/utils";
import { copy } from "@/lib/content";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { aboutData, currentInterests } from "@/lib/data";
export function CurrentInterests() {
  return (
    <section
      id="interests"
      className={cn(
        "current-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
        "pt-[45px] pb-[5px]",
        "min-[600px]:pt-[65px]",
      )}
    >
      <div
        className={cn(
          "section-heading",
          "gap-[15px] flex justify-between items-start mb-7.5",
          "min-[600px]:gap-6 min-[600px]:items-end",
          "[&_h2]:font-heading [&_h2]:text-[29px] [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.8px] [&_h2]:font-bold [&_h2]:mt-3",
          "min-[600px]:[&_h2]:text-[35px] min-[600px]:[&_h2]:tracking-[-1.3px]",
          "max-[600px]:[&>.text-link]:gap-1 max-[600px]:[&>.text-link]:whitespace-nowrap max-[600px]:[&>.text-link]:text-[10px] max-[600px]:[&>.text-link]:mt-[5px]",
        )}
      >
        <div>
          <span
            className={cn(
              "eyebrow",
              "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
              "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
            )}
          >
            {copy.personalSections.currentEyebrow}
          </span>
          <h2>{copy.personalSections.currentTitle}</h2>
        </div>
        <Link
          href="/skills"
          className={cn(
            "text-link",
            "gap-3 border-b [border-bottom-style:solid] border-b-current inline-flex items-center text-[13px] font-[650] pb-1.5",
            "[&_svg]:size-[17px] [&_svg]:[transition:transform_0.2s]",
            "[&:hover_svg]:transform-[translate(3px,_-2px)]",
          )}
        >
          {copy.personalSections.theLearningMap}
          <ArrowUpRightIcon />
        </Link>
      </div>
      <div
        className={cn(
          "current-grid",
          "gap-7 grid grid-cols-[1fr]",
          "min-[600px]:gap-4.5 min-[600px]:grid-cols-[repeat(3,_minmax(0,_1fr))] min-[900px]:gap-6",
        )}
      >
        {currentInterests.map((item) => (
          <article
            key={item.id}
            className={cn(
              "current-card",
              "p-7 rounded-tl-[5px] rounded-tr-[5px] rounded-br-[25px] rounded-bl-[5px] border border-solid border-[#23365918] relative text-object-ink flex flex-col items-start [transition:translate_0.3s,_rotate_0.3s,_box-shadow_0.3s]",
              "min-[600px]:p-[25px] min-[900px]:p-7.5",
              "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
              "[&:where([data-tone='rose'])]:bg-rose [&:where([data-tone='rose'])]:transform-[rotate(-1deg)]",
              "[&:where([data-tone='mint'])]:bg-mint [&:where([data-tone='mint'])]:transform-[rotate(1deg)]",
              "[&:where([data-tone='butter'])]:bg-butter [&:where([data-tone='butter'])]:transform-[rotate(-0.5deg)]",
              "[&_.eyebrow]:text-[#46546c] [&_.eyebrow]:text-[9px] [&_.eyebrow]:max-w-[none]",
              "min-[600px]:[&_.eyebrow]:max-w-32.5",
              "[&_h3]:font-heading [&_h3]:font-bold [&_h3]:text-[29px] [&_h3]:leading-[1.15] [&_h3]:tracking-[-0.8px] [&_h3]:mt-[25px]",
              "min-[600px]:[&_h3]:text-[24px] min-[900px]:[&_h3]:text-[28px]",
              "[&_p]:text-[13px] [&_p]:leading-[1.9] [&_p]:mt-4.5 [&_p]:mb-[25px]",
              "[&_.text-link]:mt-auto [&_.text-link]:text-[11px]",
              "after:rounded-br-[22px] after:content-[''] after:absolute after:right-px after:bottom-px after:size-[23px] after:bg-[#fff8] after:[clip-path:polygon(100%_0,_0_100%,_100%_100%)] after:opacity-0 after:[translate:3px_3px] after:[transition:opacity_0.25s,_translate_0.25s] after:pointer-events-none",
              "motion-reduce:after:[translate:none]! motion-reduce:after:[rotate:none]! motion-reduce:after:[scale:none]!",
              "fine-hover:hover:[translate:0_-4px] fine-hover:hover:rotate-[-0.6deg] fine-hover:hover:shadow-[5px_9px_0_#2336590c]",
              "fine-hover:focus-within:[translate:0_-4px] fine-hover:focus-within:rotate-[-0.6deg] fine-hover:focus-within:shadow-[5px_9px_0_#2336590c]",
              "fine-hover:[&:hover_.current-symbol]:rotate-[-8deg] fine-hover:[&:hover_.current-symbol]:scale-[1.08]",
              "fine-hover:[&:focus-within_.current-symbol]:rotate-[-8deg] fine-hover:[&:focus-within_.current-symbol]:scale-[1.08]",
              "fine-hover:[&:hover_.current-tape]:rotate-[3deg]",
              "fine-hover:[&:focus-within_.current-tape]:rotate-[3deg]",
              "fine-hover:[&:hover::after]:opacity-70 fine-hover:[&:hover::after]:[translate:0_0]",
              "fine-hover:[&:focus-within::after]:opacity-70 fine-hover:[&:focus-within::after]:[translate:0_0]",
            )}
            data-tone={item.tone}
          >
            <span
              className={cn(
                "current-tape",
                "absolute left-[calc(50%_-_30px)] top-[-10px] w-15 h-5.5 bg-[#ffffff70] transform-[rotate(-5deg)] [transition:rotate_0.3s,_scale_0.3s]",
                "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
              )}
              aria-hidden="true"
            />
            <div
              className={cn(
                "current-card-top",
                "gap-[15px] flex items-center justify-between w-full",
                "min-[600px]:items-start",
              )}
            >
              <span
                className={cn(
                  "eyebrow",
                  "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
                  "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
                )}
              >
                {item.tag}
              </span>
              <span
                className={cn(
                  "current-symbol",
                  "font-heading text-[38px] font-bold leading-[1] [transition:rotate_0.3s,_scale_0.3s]",
                  "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
                )}
                aria-hidden="true"
              >
                {item.symbol}
              </span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link
              href={item.href}
              className={cn(
                "text-link",
                "gap-3 border-b [border-bottom-style:solid] border-b-current inline-flex items-center text-[13px] font-[650] pb-1.5",
                "[&_svg]:size-[17px] [&_svg]:[transition:transform_0.2s]",
                "[&:hover_svg]:transform-[translate(3px,_-2px)]",
              )}
            >
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
      className={cn(
        "personal-facts mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
        "py-7 border-t border-b [border-top-style:solid] [border-bottom-style:solid] border-t-border border-b-border grid grid-cols-[repeat(2,_minmax(0,_1fr))] gap-y-7 gap-x-[15px] mt-[5px] mb-15 max-[600px]:mt-20!",
        "min-[900px]:grid-cols-[repeat(4,_minmax(0,_1fr))] min-[600px]:gap-[25px]",
      )}
      aria-label={copy.personalSections.aFewThingsAboutMe}
    >
      {aboutData.facts.map((fact) => (
        <div
          key={fact.id}
          className={cn(
            "personal-fact",
            "gap-2.5 flex items-center",
            "min-[600px]:gap-[15px]",
            "[&_.eyebrow]:text-[8px]",
            "min-[600px]:[&_.eyebrow]:text-[9px]",
            "[&_p]:font-heading [&_p]:text-[16px] [&_p]:font-[650] [&_p]:mt-1.5",
            "min-[600px]:[&_p]:text-[20px]",
            "[&_p[dir='rtl']]:text-start",
          )}
        >
          <span
            className={cn(
              "fact-symbol",
              "font-heading text-[23px] text-primary font-[650]",
              "min-[600px]:text-[29px]",
            )}
            aria-hidden="true"
          >
            {fact.symbol}
          </span>
          <div>
            <span
              className={cn(
                "eyebrow",
                "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
                "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
              )}
            >
              {fact.label}
            </span>
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
    <section
      className={cn(
        "principles-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
        "pt-2.5 pb-10",
        "min-[600px]:pb-[65px]",
      )}
    >
      <div
        className={cn(
          "section-heading",
          "gap-[15px] flex justify-between items-start mb-7.5",
          "min-[600px]:gap-6 min-[600px]:items-end",
          "[&_h2]:font-heading [&_h2]:text-[29px] [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.8px] [&_h2]:font-bold [&_h2]:mt-3",
          "min-[600px]:[&_h2]:text-[35px] min-[600px]:[&_h2]:tracking-[-1.3px]",
          "max-[600px]:[&>.text-link]:gap-1 max-[600px]:[&>.text-link]:whitespace-nowrap max-[600px]:[&>.text-link]:text-[10px] max-[600px]:[&>.text-link]:mt-[5px]",
        )}
      >
        <div>
          <span
            className={cn(
              "eyebrow",
              "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
              "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
            )}
          >
            {copy.personalSections.notesToKeepNearby}
          </span>
          <h2>{copy.personalSections.principlesTitle}</h2>
        </div>
      </div>
      <div
        className={cn(
          "principles-grid",
          "gap-7 grid grid-cols-[1fr]",
          "min-[600px]:gap-[25px] min-[600px]:grid-cols-[repeat(3,_minmax(0,_1fr))] min-[900px]:gap-[35px]",
        )}
      >
        {aboutData.principles.map((principle) => (
          <article
            className={cn(
              "principle",
              "[&>span]:text-primary [&>span]:text-[32px]",
              "[&_h3]:my-3.5 [&_h3]:font-heading [&_h3]:text-[25px] [&_h3]:font-[650] [&_h3]:leading-[1.25] [&_h3]:tracking-[-0.6px]",
              "[&_p]:text-muted-foreground [&_p]:text-[13px] [&_p]:leading-[1.9]",
            )}
            key={principle.id}
          >
            <span aria-hidden="true">{copy.personalSections.decoration}</span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

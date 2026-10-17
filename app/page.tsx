import { cn } from "@/lib/utils";
import { copy, message } from "@/lib/content";
import Link from "next/link";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  AsteriskIcon,
} from "@phosphor-icons/react/ssr";
import { Desk } from "@/components/desk";
import { PageLayout } from "@/components/page-layout";
import { ProjectsUpcoming } from "@/components/projects-upcoming";
import {
  CurrentInterests,
  PersonalFacts,
} from "@/components/personal-sections";
import { siteConfig, blogPosts } from "@/lib/data";
import { formatDisplayDate } from "@/lib/date";
export default function Home() {
  return (
    <PageLayout>
      <section
        className={cn(
          "home-hero mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "gap-[15px] grid grid-cols-[minmax(0,_1fr)] items-center min-h-167.5 pt-10 pb-[35px]",
          "min-[900px]:gap-0 min-[900px]:grid-cols-[1fr_1fr] min-[900px]:pt-15 min-[900px]:pb-[65px] min-[1150px]:grid-cols-[1.05fr_1fr] min-[1500px]:min-h-185 min-[600px]:pt-12.5",
        )}
      >
        <div
          className={cn(
            "hero-copy",
            "min-w-0",
            "[&_h1]:my-6 [&_h1]:font-heading [&_h1]:text-[clamp(32px,_10.3vw,_64px)] [&_h1]:font-extrabold [&_h1]:tracking-[-0.065em] [&_h1]:leading-[1.08]",
            "min-[600px]:[&_h1]:my-7 min-[600px]:[&_h1]:text-[clamp(55px,_8vw,_76px)] min-[900px]:[&_h1]:text-[57px] min-[1150px]:[&_h1]:text-[clamp(52px,_5.2vw,_76px)]",
          )}
        >
          <p
            className={cn(
              "eyebrow",
              "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
              "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
            )}
          >
            <span
              className={cn(
                "hello-dot",
                "mx-1 rounded-[50%] size-[7px] bg-primary shadow-[0_0_0_5px_var(--accent)]",
              )}
            />
            {copy.home.eyebrow}
          </p>
          <h1>
            {copy.home.headlineLead}
            <br />
            {copy.home.headlinePrefix}{" "}
            <span className={cn("playground-word", "whitespace-nowrap")}>
              <span
                className={cn(
                  "play-word",
                  "text-primary relative inline-block",
                  "after:rounded-[50%] after:border-t-[3px] after:[border-top-style:solid] after:border-t-primary after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-6px] after:h-2 after:transform-[rotate(-3deg)]",
                  "[&>span]:absolute [&>span]:text-[28px] [&>span]:top-[-10px] [&>span]:right-[-19px] [&>span]:transform-[rotate(15deg)]",
                )}
              >
                {copy.home.headlineAccent}
                <span aria-hidden="true">{copy.home.decoration}</span>
              </span>
              {copy.home.headlineSuffix}
            </span>
          </h1>
          <p
            className={cn(
              "hero-intro",
              "text-[13px] leading-[1.9] max-w-125 text-muted-foreground",
              "min-[600px]:text-[15px] min-[900px]:text-[14px] min-[900px]:max-w-87.5 min-[1150px]:text-[15px] min-[1150px]:max-w-105",
            )}
          >
            {message(copy.home.greeting, {
              name: siteConfig.name,
            })}{" "}
            <span
              className={cn(
                "nickname",
                "text-[11px]",
                "min-[600px]:text-[13px]",
              )}
            >
              {message(copy.home.nickname, {
                name: siteConfig.displayName,
              })}
            </span>
            <br />
            {copy.home.intro}
          </p>
          <div
            className={cn(
              "hero-links",
              "gap-[15px] flex flex-wrap items-center mt-[23px]",
              "min-[370px]:gap-5 min-[600px]:gap-7 min-[600px]:mt-7",
              "max-[600px]:[&_.text-link]:text-[12px]",
            )}
          >
            <a
              href="#interests"
              className={cn(
                "text-link",
                "gap-3 border-b [border-bottom-style:solid] border-b-current inline-flex items-center text-[13px] font-[650] pb-1.5",
                "[&_svg]:size-[17px] [&_svg]:[transition:transform_0.2s]",
                "[&:hover_svg]:transform-[translate(3px,_-2px)]",
              )}
            >
              {copy.home.takeALookAround}
              <ArrowDownIcon />
            </a>
            <Link
              href="/about"
              className={cn(
                "quiet-link",
                "[&_svg]:size-[17px] [&_svg]:[transition:transform_0.2s]",
                "[&:hover_svg]:transform-[translate(3px,_-2px)]",
                "gap-[7px] inline-flex items-center text-[12px] text-muted-foreground",
              )}
            >
              {copy.home.aLittleAboutMe}
              <ArrowUpRightIcon />
            </Link>
          </div>
          <div
            className={cn(
              "hero-footnote",
              "gap-2.5 flex items-center text-[10px] text-muted-foreground mt-[25px]",
              "min-[600px]:text-[11px] min-[900px]:mt-11.5",
            )}
          >
            <span
              className={cn("hand-star", "text-[30px] text-primary")}
              aria-hidden="true"
            >
              {copy.home.decoration2}
            </span>{" "}
            {copy.home.footnote}
          </div>
        </div>
        <Desk />
      </section>
      <div
        className={cn(
          "interest-strip",
          "border-t border-b [border-top-style:solid] [border-bottom-style:solid] border-t-border border-b-border",
          "[&>div]:py-4.5 [&>div]:m-auto [&>div]:w-[calc(100%_-_40px)] [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:gap-y-[9px] [&>div]:gap-x-[13px] [&>div]:text-[10px]",
          "min-[600px]:[&>div]:w-[min(1100px,_calc(100%_-_60px))] min-[600px]:[&>div]:gap-y-3 min-[600px]:[&>div]:gap-x-5 min-[600px]:[&>div]:text-[12px] min-[900px]:[&>div]:py-[21px] min-[900px]:[&>div]:gap-4.5 min-[900px]:[&>div]:justify-between max-[900px]:[&>div]:flex-wrap",
          "[&_span:first-child]:text-[10px] [&_span:first-child]:uppercase [&_span:first-child]:text-muted-foreground [&_span:first-child]:tracking-[0.09em]",
          "max-[900px]:[&_span:first-child]:basis-full max-[900px]:[&_span:first-child]:text-center",
          "[&_svg]:w-2.5 [&_svg]:h-3.5 [&_svg]:text-primary",
          "min-[600px]:[&_svg]:w-3.5",
          "max-[600px]:[&_svg:last-of-type]:hidden",
          "max-[600px]:[&_span:last-child]:hidden",
        )}
      >
        <div>
          <span>{copy.home.currentlyOrbiting}</span>
          <span>{copy.home.rustSystems}</span>
          <AsteriskIcon aria-hidden="true" />
          <span>{copy.home.nixLinux}</span>
          <AsteriskIcon aria-hidden="true" />
          <span>{copy.home.openSource}</span>
          <AsteriskIcon aria-hidden="true" />
          <span>{copy.home.embeddedThings}</span>
        </div>
      </div>
      <CurrentInterests />
      <PersonalFacts />
      <section
        className={cn(
          "home-bottom mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "[&_h2]:font-heading [&_h2]:text-[29px] [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.8px] [&_h2]:font-bold [&_h2]:mt-3",
          "min-[600px]:[&_h2]:text-[35px] min-[600px]:[&_h2]:tracking-[-1.3px]",
          "gap-10 grid grid-cols-[1fr] pt-2.5 pb-[45px]",
          "min-[900px]:grid-cols-[1.3fr_1fr] min-[1150px]:gap-20 min-[600px]:pb-19",
        )}
      >
        <div className={cn("home-notes", "pt-0", "min-[600px]:pt-7")}>
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
                {copy.home.notesFromTheMargins}
              </span>
              <h2>{copy.home.thinkingOutLoud}</h2>
            </div>
            <Link
              href="/blog"
              className={cn(
                "circle-link",
                "rounded-[50%] border border-solid border-border size-9.5 grid place-items-center",
                "[&_svg]:w-4.5",
              )}
              aria-label={copy.home.readAllNotes}
            >
              <ArrowUpRightIcon />
            </Link>
          </div>
          <div>
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                className={cn(
                  "note-row",
                  "py-[23px] gap-5 border-t [border-top-style:solid] border-t-border flex items-center justify-between [transition:background_0.2s,_translate_0.2s,_scale_0.15s]",
                  "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
                  "[&_small]:text-[10px] [&_small]:text-muted-foreground",
                  "[&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-[19px] [&_h3]:leading-[1.35] [&_h3]:mt-[7px] [&_h3]:tracking-[-0.4px]",
                  "min-[600px]:[&_h3]:text-[20px]",
                  "[&>svg]:shrink-0 [&>svg]:w-5",
                  "[&:hover_h3]:text-primary",
                  "active:scale-[0.985]",
                  "fine-hover:hover:[translate:3px_0]",
                )}
                href={`/blog/${post.slug}`}
                key={post.slug}
              >
                <span>
                  <small>
                    {message(copy.home.noteMeta, {
                      date: formatDisplayDate(post.date, {
                        month: "short",
                        year: "numeric",
                      }),
                      duration: post.readTime,
                    })}
                  </small>
                  <h3>{post.title}</h3>
                </span>
                <ArrowUpRightIcon />
              </Link>
            ))}
          </div>
        </div>
        <aside
          className={cn(
            "about-note",
            "p-7 rounded-tl-[3px] rounded-tr-[3px] rounded-br-[40px] rounded-bl-[3px] bg-butter text-object-ink transform-[rotate(1deg)] relative self-center",
            "min-[600px]:p-9 min-[900px]:transform-[rotate(2deg)] max-[900px]:max-w-145",
            "[&_.eyebrow]:text-[#51607a]",
            "[&_h2]:mt-[27px] [&_h2]:text-[34px]",
            "min-[600px]:[&_h2]:text-[37px]",
            "[&_p]:text-[13px] [&_p]:leading-[1.9] [&_p]:mt-5 [&_p]:mb-6",
          )}
        >
          <span
            className={cn(
              "eyebrow",
              "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
              "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
            )}
          >
            {copy.home.behindTheKeyboard}
          </span>
          <span
            className={cn(
              "about-note-star",
              "absolute right-[25px] top-15 text-[48px] leading-[1] transform-[rotate(15deg)] text-[#8a6e1b]",
              "min-[600px]:right-10 min-[600px]:top-12.5 min-[600px]:text-[60px] min-[900px]:right-7.5",
            )}
            aria-hidden="true"
          >
            {copy.home.decoration}
          </span>
          <h2>
            {copy.home.stillAStudent}
            <br />
            {copy.home.alwaysCurious}
          </h2>
          <p>{copy.home.aboutBody}</p>
          <Link
            href="/about"
            className={cn(
              "text-link",
              "gap-3 border-b [border-bottom-style:solid] border-b-current inline-flex items-center text-[13px] font-[650] pb-1.5",
              "[&_svg]:size-[17px] [&_svg]:[transition:transform_0.2s]",
              "[&:hover_svg]:transform-[translate(3px,_-2px)]",
            )}
          >
            {copy.home.meetThePerson}
            <ArrowRightIcon />
          </Link>
          <span
            className={cn(
              "note-signature",
              "block text-right mt-3 font-heading text-[22px] transform-[rotate(-5deg)]",
            )}
          >
            {message(copy.home.signature, {
              name: siteConfig.displayName,
            })}
          </span>
        </aside>
      </section>
      <section
        id="projects"
        className={cn(
          "home-projects mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "py-[45px]",
          "min-[600px]:pt-19 min-[600px]:pb-16.5",
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
              {copy.home.theProjectShelf}
            </span>
            <h2>
              {copy.home.projectsTitle}
              <span className={cn("ink-dot", "text-primary")}>
                {copy.home.decoration3}
              </span>
            </h2>
          </div>
          <Link
            className={cn(
              "text-link",
              "gap-3 border-b [border-bottom-style:solid] border-b-current inline-flex items-center text-[13px] font-[650] pb-1.5",
              "[&_svg]:size-[17px] [&_svg]:[transition:transform_0.2s]",
              "[&:hover_svg]:transform-[translate(3px,_-2px)]",
            )}
            href="/projects"
          >
            {copy.home.allProjects}
            <ArrowUpRightIcon />
          </Link>
        </div>
        <ProjectsUpcoming compact />
      </section>
      <section
        className={cn(
          "hello-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "py-7 gap-4.5 border-t border-b [border-top-style:solid] [border-bottom-style:solid] border-t-border border-b-border flex items-center mb-10",
          "min-[600px]:py-10 min-[600px]:gap-7.5 min-[600px]:mb-[75px] max-[600px]:flex-wrap",
          "[&>span]:text-[48px] [&>span]:text-primary [&>span]:leading-[1]",
          "min-[600px]:[&>span]:text-[70px]",
          "[&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-[24px] [&_h2]:tracking-[-0.7px]",
          "min-[600px]:[&_h2]:text-[29px]",
          "[&_p]:text-muted-foreground [&_p]:text-[11px] [&_p]:mt-[5px]",
          "min-[600px]:[&_p]:text-[13px]",
          "[&>a]:ml-15.5",
          "min-[600px]:[&>a]:ml-auto",
        )}
      >
        <span aria-hidden="true">{copy.home.decoration5}</span>
        <div>
          <h2>{copy.home.somethingInCommon}</h2>
          <p>{copy.home.helloBody}</p>
        </div>
        <Link
          href="/contact"
          className={cn(
            "text-link",
            "gap-3 border-b [border-bottom-style:solid] border-b-current inline-flex items-center text-[13px] font-[650] pb-1.5",
            "[&_svg]:size-[17px] [&_svg]:[transition:transform_0.2s]",
            "[&:hover_svg]:transform-[translate(3px,_-2px)]",
          )}
        >
          {copy.home.letsTalk}
          <ArrowUpRightIcon />
        </Link>
      </section>
    </PageLayout>
  );
}

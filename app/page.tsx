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
import { ProjectCard } from "@/components/project-card";
import { CurrentInterests, PersonalFacts } from "@/components/personal-sections";
import { siteConfig, blogPosts, projects } from "@/lib/data";
import { formatDisplayDate } from "@/lib/date";

export default function Home() {
  return (
    <PageLayout>
      <section className="home-hero content-width">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="hello-dot" />
            {copy.home.eyebrow}
          </p>
          <h1>
            {copy.home.headlineLead}
            <br />
            {copy.home.headlinePrefix}{" "}
            <span className="playground-word">
              <span className="play-word">
                {copy.home.headlineAccent}
                <span aria-hidden="true">{copy.home.decoration}</span>
              </span>
              {copy.home.headlineSuffix}
            </span>
          </h1>
          <p className="hero-intro">
            {message(copy.home.greeting, { name: siteConfig.name })}{" "}
            <span className="nickname">
              {message(copy.home.nickname, { name: siteConfig.displayName })}
            </span>
            <br />
            {copy.home.intro}
          </p>
          <div className="hero-links">
            <a href="#interests" className="text-link">
              {copy.home.takeALookAround}
              <ArrowDownIcon />
            </a>
            <Link href="/about" className="quiet-link">
              {copy.home.aLittleAboutMe}
              <ArrowUpRightIcon />
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="hand-star" aria-hidden="true">
              {copy.home.decoration2}
            </span>{" "}
            {copy.home.footnote}
          </div>
        </div>
        <Desk />
      </section>
      <div className="interest-strip">
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
      <section id="projects" className="home-projects content-width">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{copy.home.theProjectShelf}</span>
            <h2>
              {copy.home.projectsTitle}
              <span className="ink-dot">{copy.home.decoration3}</span>
            </h2>
          </div>
          <Link className="text-link" href="/projects">
            {copy.home.allProjects}
            <ArrowUpRightIcon />
          </Link>
        </div>
        <div className="project-grid">
          {projects
            .filter((project) => project.featured)
            .slice(0, 3)
            .map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
        </div>
      </section>
      <section className="home-bottom content-width">
        <div className="home-notes">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{copy.home.notesFromTheMargins}</span>
              <h2>{copy.home.thinkingOutLoud}</h2>
            </div>
            <Link href="/blog" className="circle-link" aria-label={copy.home.readAllNotes}>
              <ArrowUpRightIcon />
            </Link>
          </div>
          <div>
            {blogPosts.slice(0, 3).map((post) => (
              <Link className="note-row" href={`/blog/${post.slug}`} key={post.slug}>
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
        <aside className="about-note">
          <span className="eyebrow">{copy.home.behindTheKeyboard}</span>
          <span className="about-note-star" aria-hidden="true">
            {copy.home.decoration}
          </span>
          <h2>
            {copy.home.stillAStudent}
            <br />
            {copy.home.alwaysCurious}
          </h2>
          <p>{copy.home.aboutBody}</p>
          <Link href="/about" className="text-link">
            {copy.home.meetThePerson}
            <ArrowRightIcon />
          </Link>
          <span className="note-signature">
            {message(copy.home.signature, { name: siteConfig.displayName })}
          </span>
        </aside>
      </section>
      <PersonalFacts />
      <section className="hello-section content-width">
        <span aria-hidden="true">{copy.home.decoration5}</span>
        <div>
          <h2>{copy.home.somethingInCommon}</h2>
          <p>{copy.home.helloBody}</p>
        </div>
        <Link href="/contact" className="text-link">
          {copy.home.letsTalk}
          <ArrowUpRightIcon />
        </Link>
      </section>
    </PageLayout>
  );
}

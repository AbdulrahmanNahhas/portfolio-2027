import { ArrowUpRightIcon as ArrowUpRight, EnvelopeIcon as Mail } from "@phosphor-icons/react/ssr";
import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/data";
import { homeContent } from "@/lib/home-content";
import { GitLab, Mastodon } from "@/lib/icons";

const socialLinks = [
  { label: "GitLab", href: siteConfig.social.gitlab, icon: GitLab },
  { label: "Mastodon", href: siteConfig.social.mastodon, icon: Mastodon },
];

export function ContactSection() {
  const email = siteConfig.email;
  const { contact } = homeContent;

  return (
    <section id="contact" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          {/* Left: pitch */}
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-1.5 w-1.5  bg-primary" />
              <p className="kicker text-primary/80">{contact.label}</p>
            </div>

            <h2 className="font-display mt-6 max-w-xl text-balance text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {contact.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={`mailto:${email}`} variant="primary" size="lg" icon="none">
                <Mail className="size-4" />
                {contact.primaryAction}
              </LinkButton>
              <LinkButton
                href={siteConfig.social.mastodon}
                external
                variant="outline"
                size="lg"
                icon="arrow-up-right"
              >
                {contact.secondaryAction}
              </LinkButton>
            </div>
          </Reveal>

          {/* Right: email + socials */}
          <Reveal delay={120} className="space-y-6">
            <div>
              <p className="kicker">Email</p>
              <a
                href={`mailto:${email}`}
                className="group mt-4 flex items-center gap-4  border border-border bg-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card hover:shadow-md hover:shadow-foreground/5"
              >
                <Mail className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                <span className="min-w-0 flex-1 break-all font-mono text-sm text-foreground sm:text-base">
                  {email}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </div>

            <div>
              <p className="kicker">Social</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4  border border-border bg-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card hover:shadow-md hover:shadow-foreground/5"
                  >
                    <span className="flex items-center gap-3">
                      <link.icon className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                      <span className="text-sm text-foreground">{link.label}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2.5  border border-border bg-secondary/40 p-5">
              <span className="relative inline-flex size-2  bg-primary pulse-dot" />
              <p className="text-sm text-foreground">Available remotely · {siteConfig.location}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContactMethods } from "@/components/contact-methods";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Abdulrahman Nahhas for collaboration, internships, feedback, and software conversations.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHeader
        kicker="Contact"
        title="Let's talk about code, learning, or a project."
        description="Have feedback, an internship lead, a project idea, or just want to talk about building software? I'd love to hear from you."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <ContactMethods />
          </Reveal>

          <Reveal delay={120}>
            <div className="mb-8 flex items-center gap-4">
              <p className="kicker">Send a message</p>
              <div className="h-px flex-1 bg-border" />
            </div>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </PageLayout>
  );
}

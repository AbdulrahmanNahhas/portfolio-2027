import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContactMethods } from "@/components/contact-methods";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Abdulrahman Nahhas for freelance software development, full-time opportunities, and collaborations.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHeader
        number="08"
        label="Connect"
        title="Contact"
        description="Have a project in mind or want to collaborate? I'd love to hear from you."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <ContactMethods />

          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Send Message
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <ContactForm />
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}

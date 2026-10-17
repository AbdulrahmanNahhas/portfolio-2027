import { copy } from "@/lib/content";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContactMethods } from "@/components/contact-methods";
import { PageHeader, PageLayout } from "@/components/page-layout";
export const metadata: Metadata = {
  title: copy.contact.sayHello,
  description: copy.contact.metaDescription,
};
export default function ContactPage() {
  return (
    <PageLayout>
      <PageHeader
        kicker={copy.contact.eyebrow}
        title={copy.contact.title}
        description={copy.contact.description}
      />
      <section className="inner-section content-width contact-layout">
        <ContactMethods />
        <div className="contact-form-panel">
          <h2>{copy.contact.leaveALittleNote}</h2>
          <p>{copy.contact.formDescription}</p>
          <ContactForm />
        </div>
      </section>
    </PageLayout>
  );
}

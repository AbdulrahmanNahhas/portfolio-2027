import { cn } from "@/lib/utils";
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
      <section
        className={cn(
          "inner-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)] contact-layout",
          "pt-[35px] pb-12.5 gap-[35px] grid grid-cols-[1fr]",
          "min-[600px]:pt-[55px] min-[600px]:pb-[75px] min-[600px]:gap-10 min-[600px]:grid-cols-[1fr_1fr] min-[900px]:gap-20",
        )}
      >
        <ContactMethods />
        <div
          className={cn(
            "contact-form-panel",
            "p-6 rounded-[18px] border border-solid border-border bg-card",
            "min-[600px]:p-8",
            "[&_p]:text-[13px] [&_p]:leading-[1.8] [&_p]:text-muted-foreground",
            "[&_h2]:font-heading [&_h2]:text-[28px] [&_h2]:font-[650] [&_h2]:mb-2",
            "[&_[data-slot='native-select']]:rounded-[8px]",
          )}
        >
          <h2>{copy.contact.leaveALittleNote}</h2>
          <p>{copy.contact.formDescription}</p>
          <ContactForm />
        </div>
      </section>
    </PageLayout>
  );
}

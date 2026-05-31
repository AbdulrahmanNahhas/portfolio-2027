import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PageLayout } from "@/components/page-layout";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </PageLayout>
  );
}

import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import AboutUs from '../src/components/AboutUs';
import WhyUs from '../src/components/WhyUs';
import ProcessSection from '../src/components/ProcessSection';
import RecentWork from '../src/components/RecentWork';
import Testimonials from '../src/components/Testimonials';
import FAQ from '../src/components/FAQ';
import JacksonvillePaverInstallation from '../src/components/JacksonvillePaverInstallation';
import Quote from '../src/components/Quote';
import Footer from '../src/components/Footer';
import { faqs } from '../src/data/faqs';

// FAQPage schema is generated from the same data the visible FAQ section
// renders, so the structured data can never drift from on-page content.
// Scoped to the homepage only — service pages declare their own FAQPage.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Preload hero video poster for fastest mobile LCP */}
      <link
        rel="preload"
        as="image"
        href="/jp-preload-hero.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[#0A86C4] focus:px-4 focus:py-2 focus:text-white focus:font-semibold focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <Hero />
      <main id="main" className="overflow-x-hidden">
        <Services />
        <AboutUs />
        <WhyUs />
        <ProcessSection />
        <RecentWork />
        <Testimonials />
        <FAQ />
        <JacksonvillePaverInstallation />
        <Quote />
      </main>
      <Footer />
    </>
  );
}

import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import AboutUs from '../src/components/AboutUs';
import WhyUs from '../src/components/WhyUs';
import RecentWork from '../src/components/RecentWork';
import Testimonials from '../src/components/Testimonials';
import FAQ from '../src/components/FAQ';
import Quote from '../src/components/Quote';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
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
        <RecentWork />
        <Testimonials />
        <FAQ />
        <Quote />
      </main>
      <Footer />
    </>
  );
}

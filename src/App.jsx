import './App.css'
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import RecentWork from './components/RecentWork';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
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
  )
}

export default App

import './App.css'
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import RecentWork from './components/RecentWork';
import Testimonials from './components/Testimonials';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <main className="overflow-x-hidden">
        <Services />
        <AboutUs />
        <WhyUs />
        <RecentWork />
        <Testimonials />
        <Quote />
      </main>
      <Footer />
    </>
  )
}

export default App

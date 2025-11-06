import './App.css'
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import RecentWork from './components/RecentWork';
import Testimonials from './components/Testimonials';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhyUs />
      <RecentWork />
      <Testimonials />
      <Quote />
      <Footer />
    </div>
  )
}

export default App

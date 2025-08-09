// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Logo from './Logo';
import ShimmerButton from './ShimmerButton';

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(/pavers-hero.png)` }}
    >
      
      {/* Navbar */}
      <Navbar />

      {/* Logo */}
      <Logo />

      {/* Dark overlay */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.30)',
          mixBlendMode: 'multiply'
        }} 
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.p 
          className="text-lg uppercase text-white font-semibold mt-24 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Premium Paver Installation &amp; Design
        </motion.p>
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-white mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Outdoor Spaces Worthy of the Florida Lifestyle
        </motion.h1>
        <motion.p 
          className="text-2xl text-gray-200 mb-6 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Transform your patio, driveway, or pool deck with high-quality pavers tailored for North Florida's unique climate and style.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <ShimmerButton href="#quote" className="text-2xl">
            Get Your Free Quote
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// src/components/ShimmerButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ShimmerButton = ({ href, children, className = "", onClick }) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`inline-block relative overflow-hidden font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(90deg, #0A86C4 0%, #0875B1 50%, #0A86C4 100%)',
        backgroundSize: '200% 100%',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          backgroundSize: '50% 100%',
        }}
        animate={{
          x: ['-100%', '200%'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut"
        }}
      />
      <span className="relative z-10 text-white text-xl">
        {children}
      </span>
    </motion.a>
  );
};

export default ShimmerButton;
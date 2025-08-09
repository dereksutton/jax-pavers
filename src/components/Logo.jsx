// src/components/Logo.jsx
import React from 'react';
import { motion } from 'framer-motion';
import getImagePath from '../utils/imagePaths';

const Logo = ({ isHidden = false }) => {
  return (
    <motion.div 
      className="absolute top-0 left-4 md:left-10 z-30"
      initial={{ opacity: 0, x: -100, rotate: -10 }}
      animate={{ 
        opacity: isHidden ? 0 : 1, 
        x: isHidden ? -100 : 0, 
        rotate: 0 
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.img 
        src={getImagePath("/pavers-logo.png")} 
        alt="Company Logo" 
        className="h-40 sm:h-48 md:h-56 w-auto"
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </motion.div>
  );
};

export default Logo;
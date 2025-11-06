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
        src={getImagePath("/jaxpavers-logo.png")}
        alt="Company Logo"
        className="h-28 sm:h-32 md:h-40 lg:h-44 w-auto"
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </motion.div>
  );
};

export default Logo;
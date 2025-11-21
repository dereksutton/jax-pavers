// src/components/ShimmerButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ShimmerButton = ({
  href,
  children,
  className = "",
  onClick,
  as = "a",
  type,
  disabled = false,
  ...props
}) => {
  // Determine which component to use
  const Component = as === "button" ? motion.button : motion.a;

  // Props specific to the component type
  const componentProps = as === "button"
    ? { type: type || "button", disabled, onClick, ...props }
    : { href, onClick, ...props };

  return (
    <Component
      {...componentProps}
      className={`inline-block relative overflow-hidden font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
      style={{
        background: 'linear-gradient(90deg, #0A86C4 0%, #0875B1 50%, #0A86C4 100%)',
        backgroundSize: '200% 100%',
      }}
      animate={{
        backgroundPosition: disabled ? '0% 50%' : ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 3,
        repeat: disabled ? 0 : Infinity,
        ease: "linear"
      }}
      whileHover={disabled ? {} : {
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={disabled ? {} : {
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
        animate={disabled ? {} : {
          x: ['-100%', '200%'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: disabled ? 0 : Infinity,
          repeatDelay: 1,
          ease: "easeInOut"
        }}
      />
      <span className="relative z-10 text-white text-xl">
        {children}
      </span>
    </Component>
  );
};

export default ShimmerButton;
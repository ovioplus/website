'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        // Subtle floating animation (only when visible)
        y: isVisible ? [0, -6, 0] : 0,
      }}
      transition={{
        duration: 0.2,
        // For the floating effect, loop infinitely with a 2s cycle
        y: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      whileHover={{
        scale: 1.15,
        boxShadow: '0 0 25px rgba(0, 200, 200, 0.5)',
      }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-brand-cyan text-white shadow-lg hover:bg-brand-cyan-dark transition-colors"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
}
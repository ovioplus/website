'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Scroll-to-top control.
 *
 * Everything unusual here exists because the previous version did not work on
 * a phone:
 *
 * 1. The offsets carry `env(safe-area-inset-*)`. Pinned at a flat 24px the
 *    button landed inside the home-indicator strip and under Safari's bottom
 *    toolbar, so taps hit browser chrome. (These only report a real value
 *    because the root layout sets viewport-fit=cover.)
 * 2. When hidden the wrapper gets `pointer-events: none`. The button was only
 *    animated to opacity 0, so an invisible 51px target sat in the
 *    bottom-right corner swallowing taps meant for the page underneath, which
 *    is prime thumb territory.
 * 3. `whileHover` is gated behind an actual hover query. Touch devices fire
 *    pointerenter on tap, so it stuck the button at scale 1.15 after the first
 *    press.
 *
 * The idle float lives on the wrapper as a CSS animation, not on the button as
 * a framer-motion keyframe: framer-motion would not reliably start a repeating
 * loop when the value flipped from a scalar to an array after mount, and on a
 * wrapper it cannot fight framer-motion for the button's own transform.
 */
export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    toggleVisibility(); // the page can load already scrolled (refresh, deep link)
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <div
      className={`float-idle fixed z-50 ${isVisible ? '' : 'pointer-events-none'}`}
      style={{
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
        right: 'calc(1.5rem + env(safe-area-inset-right, 0px))',
      }}
    >
      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
        whileHover={canHover ? { scale: 1.15, boxShadow: '0 0 25px rgba(0, 200, 200, 0.5)' } : undefined}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="block rounded-full bg-brand-cyan p-3 text-white shadow-lg transition-colors hover:bg-brand-cyan-dark"
        aria-label="Back to top"
        aria-hidden={!isVisible}
        tabIndex={isVisible ? 0 : -1}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </div>
  );
}

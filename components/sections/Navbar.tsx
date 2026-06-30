'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.features, href: '/#features' },
    { label: t.nav.how, href: '/#how' },
    { label: t.nav.pricing, href: '/#pricing' },
    { label: t.nav.faq, href: '/#faq' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 md:top-6 z-50 px-4"
      >
        <nav
          className={cn(
            'mx-auto max-w-5xl flex items-center justify-between h-14 md:h-16 px-5 md:px-6 rounded-full transition-all duration-300',
            scrolled
              ? 'bg-white/80 border border-line shadow-lg shadow-slate-900/5'
              : 'bg-white/60 border border-white/80 shadow-md shadow-slate-900/5',
          )}
          style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
        >
          <a href="/" aria-label="OvioPlus home" className="flex-shrink-0">
            <Logo variant="icon" size={36} />
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <a href="/#contact" className="btn-primary text-sm py-2 px-4 group">
              {t.nav.bookDemo}
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-full text-text-primary hover:bg-slate-100"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden bg-brand-sky-light"
            style={{ backdropFilter: 'blur(20px)' }}
          >
            <div className="container-page flex h-20 items-center justify-between">
              <Logo variant="icon" size={40} />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full text-text-primary hover:bg-slate-200"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="container-page mt-8 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-display font-medium text-text-primary border-b border-line"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-8 flex items-center justify-between">
                <LanguageToggle />
                <a href="/#contact" onClick={() => setMobileOpen(false)} className="btn-primary">
                  {t.nav.bookDemo}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

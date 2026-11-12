'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FEATURES } from '@/lib/config';
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

  // While the menu is open the page behind must not scroll, and any way of
  // leaving it (a link to an anchor, Escape, growing past `lg`) must close it.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const close = () => setMobileOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    const wide = window.matchMedia('(min-width: 1024px)');
    window.addEventListener('hashchange', close);
    window.addEventListener('keydown', onKey);
    wide.addEventListener('change', close);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('hashchange', close);
      window.removeEventListener('keydown', onKey);
      wide.removeEventListener('change', close);
    };
  }, [mobileOpen]);

  // Nav links respect FEATURES toggles; hidden sections are also hidden from nav
  const navLinks = [
    { label: t.nav.features, href: '/#features', show: true },
    { label: t.nav.platform, href: '/#platform', show: true },
    { label: t.nav.how, href: '/#how', show: true },
    { label: t.nav.pricing, href: '/#pricing', show: FEATURES.showPricing },
    { label: t.nav.faq, href: '/#faq', show: true },
  ].filter((l) => l.show);

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
            'mx-auto max-w-6xl flex items-center justify-between h-14 md:h-16 px-5 md:px-6 rounded-full transition-all duration-300',
            scrolled
              ? 'bg-white/80 border border-line shadow-lg shadow-slate-900/5'
              : 'bg-white/60 border border-white/80 shadow-md shadow-slate-900/5',
          )}
          style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
        >
          <Link href="/" aria-label="OvioPlus home" className="flex-shrink-0">
            <Logo variant="icon" size={36} />
          </Link>

          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="whitespace-nowrap px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <LanguageToggle />
            <a
              href="https://app.ovioplus.ai/sign-in"
              className="px-3.5 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-full"
            >
              {t.nav.signIn}
            </a>
            <Link href="/#contact" className="btn-primary whitespace-nowrap text-sm py-2 px-4 group">
              {t.nav.bookDemo}
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-full text-text-primary hover:bg-slate-100"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </motion.header>

      {/*
        Always mounted, hidden with CSS when closed. It used to be mounted only
        while open and faded out with a framer-motion exit animation; if that
        exit never finished (Safari on iPhone), an invisible full-screen menu
        stayed on top and caught taps: tapping the homepage video opened
        "Accedi", its sound button opened "Prenota una demo". `invisible` +
        `pointer-events-none` + `inert` make a closed menu untouchable whatever
        any animation does.
      */}
      <div
        className={cn(
          'fixed inset-0 z-[60] lg:hidden bg-brand-sky-light transition-[opacity,visibility] duration-200',
          mobileOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0',
        )}
        style={{ backdropFilter: 'blur(20px)' }}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
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
              initial={false}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: mobileOpen ? i * 0.05 : 0 }}
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
          <motion.li
            initial={false}
            animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: mobileOpen ? navLinks.length * 0.05 : 0 }}
          >
            <a
              href="https://app.ovioplus.ai/sign-in"
              onClick={() => setMobileOpen(false)}
              className="block py-4 text-2xl font-display font-medium text-text-primary border-b border-line"
            >
              {t.nav.signIn}
            </a>
          </motion.li>
          <li className="pt-8 flex items-center justify-between">
            <LanguageToggle />
            <Link href="/#contact" onClick={() => setMobileOpen(false)} className="btn-primary">
              {t.nav.bookDemo}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

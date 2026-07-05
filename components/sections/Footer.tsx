'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { SITE } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { openCookiePreferences } from '@/components/ui/CookieBanner';

/* ─────────────────────────────────────────────────────────────
   Company info — replace these placeholders with real values
   ───────────────────────────────────────────────────────────── */
const COMPANY = {
  phone: '+39 02 1234 5678',        // ← replace with real phone
  email: 'hello@ovioplus.com',
  address: 'Via Roma 42 · 43121 Parma · Italia',   // ← replace with real address
  socials: {
    // Fill these when accounts are live — use '#' for now
    twitter: 'https://twitter.com/ovioplus',
    linkedin: 'https://linkedin.com/company/ovioplus',
    instagram: 'https://instagram.com/ovioplus',
    facebook: 'https://facebook.com/ovioplus',
    github: 'https://github.com/ovioplus',
  },
} as const;

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Footer() {
  const { t, lang } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const submitNewsletter = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, lang }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="relative pt-20 pb-8">
      <div className="container-page">
        {/* ── Newsletter Banner ─────────────────────────────────── */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-cyan via-brand-cyan to-brand-cyan-dark p-8 md:p-10 lg:p-12 mb-16 shadow-xl shadow-brand-cyan/20">
          <div className="grid lg:grid-cols-[auto_auto] gap-8 lg:gap-20 xl:gap-24 items-center justify-center">
            {/* LEFT — image with circular white backdrop
                Drop your image at: /public/newsletter-illustration.png */}
            <div className="hidden lg:flex items-center justify-center pointer-events-none flex-shrink-0">
              <div className="relative w-56 h-56 xl:w-64 xl:h-64 flex items-center justify-center">
                {/* Solid white circular backdrop with soft shadow ring */}
                <div className="absolute inset-0 rounded-full bg-white shadow-xl shadow-slate-900/10" />
                <img
                  src="/newsletter-illustration.png"
                  alt=""
                  className="relative w-4/5 h-4/5 object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* RIGHT — text + form */}
            <div className="w-full">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-white leading-tight mb-3 text-balance">
                {t.footer.newsletter.title}
              </h3>
              <p className="text-white/85 text-base md:text-lg mb-8 leading-relaxed">
                {t.footer.newsletter.subtitle}
              </p>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-5 py-3 max-w-md"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold text-sm">{t.footer.newsletter.successTitle}</div>
                      <div className="text-white/80 text-xs">{t.footer.newsletter.successBody}</div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={submitNewsletter}
                    className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2 bg-white/95 rounded-full p-1.5 shadow-lg"
                  >
                    <div className="flex items-center gap-2 flex-1 w-full pl-4">
                      <Mail className="w-4 h-4 text-text-muted flex-shrink-0" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.footer.newsletter.placeholder}
                        className="flex-1 bg-transparent border-0 outline-none text-text-primary placeholder:text-text-muted py-2 text-sm min-w-0"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-1.5 rounded-full bg-indigo-500 text-white px-5 py-2.5 font-semibold text-sm hover:bg-indigo-600 hover:shadow-md hover:shadow-indigo-500/40 transition-all disabled:opacity-70"
                    >
                      {status === 'sending' ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          {t.footer.newsletter.cta}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              {status === 'error' && (
                <p className="mt-3 text-white/90 text-xs">{t.footer.newsletter.errorMessage}</p>
              )}

              <p className="mt-4 text-white/70 text-xs">{t.footer.newsletter.note}</p>
            </div>
          </div>
        </div>

        {/* ── Main columns ────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-4">
            <Logo variant="icon" size={44} />
            <p className="mt-5 max-w-xs text-text-secondary leading-relaxed text-sm">
              {t.footer.tagline}
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-2">
              <SocialLink href={COMPANY.socials.linkedin} label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.52v14H.24V8zm7.05 0h4.32v2.06h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V22h-4.5v-6.16c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.26V22H7.29V8z"/>
                </svg>
              </SocialLink>
              <SocialLink href={COMPANY.socials.instagram} label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialLink>
              <SocialLink href={COMPANY.socials.twitter} label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </SocialLink>
              <SocialLink href={COMPANY.socials.facebook} label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </SocialLink>
              <SocialLink href={COMPANY.socials.github} label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Product column */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-4">
              {t.footer.product}
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/#features">{t.footer.productLinks.features}</FooterLink>
              <FooterLink href="/#how">{t.footer.productLinks.how}</FooterLink>
              <FooterLink href="/#pricing">{t.footer.productLinks.pricing}</FooterLink>
              <FooterLink href="/#faq">{t.footer.productLinks.faq}</FooterLink>
              <FooterLink href="/#contact">{t.footer.productLinks.demo}</FooterLink>
            </ul>
          </div>

          {/* Company column */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-4">
              {t.footer.company}
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/about">{t.footer.companyLinks.about}</FooterLink>
              <FooterLink href="/blog">{t.footer.companyLinks.blog}</FooterLink>
              <FooterLink href="/site-map">{t.footer.companyLinks.sitemap}</FooterLink>
              <FooterLink href="/contact">{t.footer.companyLinks.contact}</FooterLink>
            </ul>
          </div>

          {/* Legal column */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-4">
              {t.footer.legal}
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/legal/privacy">{t.footer.legalLinks.privacy}</FooterLink>
              <FooterLink href="/legal/terms">{t.footer.legalLinks.terms}</FooterLink>
              <FooterLink href="/legal/cookies">{t.footer.legalLinks.cookies}</FooterLink>
              <FooterLink href="/legal/dpa">{t.footer.legalLinks.dpa}</FooterLink>
              <FooterLink href="/legal/nda">{t.footer.legalLinks.nda}</FooterLink>
            </ul>
          </div>

          {/* Contact column */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-4">
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="flex items-start gap-2.5 text-sm text-text-secondary hover:text-brand-cyan transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-cyan" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-2.5 text-sm text-text-secondary hover:text-brand-cyan transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-cyan" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-text-secondary">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-cyan" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom copyright bar ──────────────────────────── */}
        <div className="pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} {SITE.name} · {t.footer.madeIn}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
            <a href="/legal/privacy" className="hover:text-text-primary transition-colors">{t.footer.privacy}</a>
            <a href="/legal/terms" className="hover:text-text-primary transition-colors">{t.footer.terms}</a>
            <a href="/legal/cookies" className="hover:text-text-primary transition-colors">Cookies</a>
            <a href="/legal/dpa" className="hover:text-text-primary transition-colors">DPA</a>
            <button
              onClick={openCookiePreferences}
              className="hover:text-text-primary transition-colors underline-offset-2 hover:underline"
            >
              {t.cookies.changePrefs}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">
        {children}
      </a>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white border border-line flex items-center justify-center text-text-secondary hover:text-white hover:bg-brand-cyan hover:border-brand-cyan transition-all shadow-sm"
    >
      {children}
    </a>
  );
}

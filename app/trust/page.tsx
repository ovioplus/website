'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, Lock, ScrollText, RefreshCw, Check, ArrowUpRight } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PageShell } from '@/components/sections/PageShell';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const pillarIcons = [ShieldCheck, Lock, ScrollText, RefreshCw];

/**
 * Trust page. Restaurants doing vendor diligence land here, so it links out to
 * the actual documents rather than restating them: a trust page that makes
 * claims it doesn't evidence is worth less than no trust page at all.
 */
const DOCS = [
  { href: '/legal/privacy', en: 'Privacy Policy', it: 'Informativa Privacy' },
  { href: '/legal/dpa', en: 'Data Processing Agreement', it: 'Accordo sul Trattamento dei Dati' },
  { href: '/legal/cookies', en: 'Cookie Policy', it: 'Cookie Policy' },
] as const;

export default function TrustPage() {
  const { t, lang } = useLanguage();
  const p = t.pages.trust;

  return (
    <>
      <Navbar />
      <main>
        <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
          {/* Four pillars */}
          <section className="mb-20 md:mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl font-semibold text-text-primary mb-10 max-w-xl"
            >
              {p.pillars.heading}
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {p.pillars.items.map((item, i) => {
                const Icon = pillarIcons[i];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="rounded-2xl bg-white border border-line p-7 shadow-sm shadow-slate-900/5 hover:border-brand-cyan/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* The specifics, and the documents that back them */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-20 md:mb-24"
          >
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-text-primary">
                  {p.specifics.heading}
                </h2>
              </div>

              <div className="md:col-span-2">
                <ul className="space-y-4">
                  {p.specifics.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex-none w-5 h-5 rounded-full bg-brand-cyan/10 flex items-center justify-center"
                      >
                        <Check className="w-3 h-3 text-brand-cyan" />
                      </span>
                      <span className="text-text-secondary leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-10 mb-4 text-sm text-text-muted">{p.specifics.docsLead}</p>
                <div className="flex flex-wrap gap-3">
                  {DOCS.map((doc) => (
                    <Link
                      key={doc.href}
                      href={doc.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm text-text-primary shadow-sm shadow-slate-900/5 hover:border-brand-cyan/40 hover:text-brand-cyan transition-colors"
                    >
                      {lang === 'it' ? doc.it : doc.en}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Commitment */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-20 md:mb-24"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-cyan via-brand-cyan to-brand-cyan-dark p-10 md:p-16 text-center overflow-hidden shadow-xl shadow-brand-cyan/20">
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-white/40" />
                <div className="absolute top-16 right-16 w-3 h-3 rounded-full bg-white/25" />
                <div className="absolute bottom-12 left-1/4 w-1.5 h-1.5 rounded-full bg-white/50" />
                <div className="absolute bottom-20 right-1/3 w-2 h-2 rounded-full bg-white/30" />
              </div>

              <div className="relative">
                <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-white/80 mb-4">
                  {p.commitment.eyebrow}
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-6 text-balance leading-tight">
                  {p.commitment.heading}
                </h2>
                <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                  {p.commitment.body}
                </p>
              </div>
            </div>
          </motion.section>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}

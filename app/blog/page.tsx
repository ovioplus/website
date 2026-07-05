'use client';

import { motion } from 'framer-motion';
import { PenLine, Sparkles, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PageShell } from '@/components/sections/PageShell';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function BlogPage() {
  const { t, lang } = useLanguage();
  const p = t.pages.blog;

  return (
    <>
      <Navbar />
      <main>
        <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
          {/* Empty state */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white border border-line p-10 md:p-16 shadow-sm shadow-slate-900/5"
          >
            <div className="max-w-lg mx-auto text-center">
              <div className="inline-flex w-14 h-14 rounded-2xl bg-brand-cyan/10 items-center justify-center mb-6">
                <PenLine className="w-6 h-6 text-brand-cyan" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-text-primary mb-3">
                {p.emptyTitle}
              </h2>
              <p className="text-text-secondary leading-relaxed">{p.emptyBody}</p>

              {/* Placeholder for future post cards */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="aspect-video rounded-xl bg-brand-sky-light border border-dashed border-line flex items-center justify-center"
                  >
                    <div className="text-text-muted text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      {lang === 'it' ? 'Presto' : 'Soon'}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/#contact"
                className="mt-10 btn-primary text-sm inline-flex group"
              >
                {lang === 'it' ? 'Prenota una demo' : 'Book a demo'}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}

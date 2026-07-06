'use client';

import { motion } from 'framer-motion';
import {
  Handshake,
  Building2,
  CreditCard,
  CalendarCheck,
  Briefcase,
  Cable,
  Users,
  Check,
  ArrowRight,
  Mail,
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PageShell } from '@/components/sections/PageShell';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { SITE } from '@/lib/constants';

const partnerIcons = [Building2, CreditCard, CalendarCheck, Briefcase, Cable, Users];

export default function PartnershipsPage() {
  const { t } = useLanguage();
  const p = t.pages.partnerships;

  return (
    <>
      <Navbar />
      <main>
        <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
          <div className="space-y-16 md:space-y-20">
            {/* Intro block */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white border border-line p-8 md:p-12 shadow-sm shadow-slate-900/5"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-text-primary mb-3">
                    {p.introHeading}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">{p.introBody}</p>
                </div>
              </div>
            </motion.section>

            {/* Who we partner with */}
            <section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-text-primary mb-3">
                  {p.whoHeading}
                </h2>
                <p className="text-text-secondary leading-relaxed max-w-2xl">{p.whoIntro}</p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {p.whoItems.map((item, i) => {
                  const Icon = partnerIcons[i] ?? Building2;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      className="rounded-2xl bg-white border border-line p-6 shadow-sm shadow-slate-900/5 hover:border-brand-cyan/40 hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-4">
                        <Icon className="w-4 h-4 text-brand-cyan" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* Why partner with us */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-cyan via-brand-cyan to-brand-cyan-dark p-8 md:p-12 shadow-xl shadow-brand-cyan/20"
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-8">
                {p.whyHeading}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {p.whyItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3 text-white/95"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Principles */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-text-primary mb-4">
                {p.principlesHeading}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">{p.principlesBody}</p>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan">
                {p.origin}
              </p>
            </motion.section>

            {/* CTA */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-line-strong bg-brand-surface-2 p-10 md:p-14 text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-text-primary mb-4">
                {p.ctaHeading}
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-xl mx-auto mb-8">
                {p.ctaBody}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:${SITE.email}?subject=Partnership%20inquiry`}
                  className="btn-primary group"
                >
                  <Mail className="w-4 h-4" />
                  {p.ctaEmail}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/contact" className="btn-ghost">
                  {p.ctaContact}
                </a>
              </div>
            </motion.section>
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}

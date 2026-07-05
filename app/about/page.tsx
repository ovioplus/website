'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, MapPin, Wrench } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PageShell } from '@/components/sections/PageShell';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const valueIcons = [Heart, Sparkles, MapPin, Wrench];

export default function AboutPage() {
  const { t } = useLanguage();
  const p = t.pages.about;

  return (
    <>
      <Navbar />
      <main>
        <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
          {/* Mission */}
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
                  {p.mission.heading}
                </h2>
              </div>
              <p className="md:col-span-2 text-lg text-text-secondary leading-relaxed">
                {p.mission.body}
              </p>
            </div>
          </motion.section>

          {/* Values */}
          <section className="mb-20 md:mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl font-semibold text-text-primary mb-10 max-w-xl"
            >
              {p.values.heading}
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {p.values.items.map((item, i) => {
                const Icon = valueIcons[i];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="rounded-2xl bg-white border border-line p-6 shadow-sm shadow-slate-900/5 hover:border-brand-cyan/30 transition-colors"
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

          {/* Team */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-20 md:mb-24"
          >
            <div className="rounded-3xl bg-gradient-to-br from-brand-cyan/8 via-white to-brand-sky-light border border-line p-10 md:p-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-text-primary mb-4">
                {p.team.heading}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
                {p.team.body}
              </p>
              {/* TODO: replace with real team grid once we have photos */}
              <div className="mt-10 flex justify-center gap-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="w-14 h-14 rounded-full bg-white border-2 border-line flex items-center justify-center text-text-muted text-xs font-mono"
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}

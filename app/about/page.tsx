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

          {/* Vision */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-20 md:mb-24"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-cyan via-brand-cyan to-brand-cyan-dark p-10 md:p-16 text-center overflow-hidden shadow-xl shadow-brand-cyan/20">
              {/* Decorative sparkle SVGs — pure CSS, GPU-cheap */}
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-white/40" />
                <div className="absolute top-16 right-16 w-3 h-3 rounded-full bg-white/25" />
                <div className="absolute bottom-12 left-1/4 w-1.5 h-1.5 rounded-full bg-white/50" />
                <div className="absolute bottom-20 right-1/3 w-2 h-2 rounded-full bg-white/30" />
              </div>

              <div className="relative">
                <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-white/80 mb-4">
                  {p.vision.eyebrow}
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-4 text-balance leading-tight">
                  {p.vision.heading}
                </h2>
                <p className="font-display italic text-xl md:text-2xl text-white/95 mb-6 max-w-xl mx-auto">
                  &ldquo;{p.vision.slogan}&rdquo;
                </p>
                <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                  {p.vision.body}
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

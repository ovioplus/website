'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how" className="relative py-16 md:py-20 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent hidden md:block"
      />

      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan mb-4">
              {t.how.eyebrow}
            </span>
            <h2 className="font-display text-display-lg font-semibold text-balance">
              {t.how.title1} <br />
              <span className="text-brand-cyan-light italic">{t.how.titleHighlight}</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-2 relative">
          {t.how.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-6 h-full hover:border-brand-cyan/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-gradient text-white font-mono text-sm font-bold">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-16 text-center text-lg text-text-secondary italic font-display">
            {t.how.footer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

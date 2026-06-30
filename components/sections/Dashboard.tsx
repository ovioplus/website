'use client';

import { motion } from 'framer-motion';
import { Calendar, LayoutGrid, Clock, CheckSquare, Search, Mail } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const icons = [Calendar, LayoutGrid, Clock, CheckSquare, Search, Mail];

export function Dashboard() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan mb-4">
              {t.dashboard.eyebrow}
            </span>
            <h2 className="font-display text-display-lg font-semibold text-balance">
              {t.dashboard.title1} <br />
              <span className="text-brand-cyan-light italic">{t.dashboard.titleHighlight}</span>
            </h2>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              {t.dashboard.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.dashboard.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="glass rounded-2xl p-6 hover:border-brand-cyan/30 transition-colors h-full">
                  <div className="inline-flex p-2.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 mb-4">
                    <Icon className="w-5 h-5 text-brand-cyan-light" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{feature.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

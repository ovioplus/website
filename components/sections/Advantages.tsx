'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

/** Numbered reasons to choose OvioPlus (fixia.it's "Perché scegliere" pattern). */
export function Advantages() {
  const { t } = useLanguage();
  return (
    <section id="advantages" className="relative scroll-mt-20 py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="mb-10 max-w-2xl md:mb-14">
            <span className="mb-4 inline-block font-mono text-xs tracking-[0.18em] text-brand-cyan uppercase">{t.advantages.eyebrow}</span>
            <h2 className="font-display text-display-md font-semibold text-balance">
              {t.advantages.title1} <span className="text-gradient italic">{t.advantages.titleHighlight}</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.advantages.items.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="glass-strong lift-card flex h-full flex-col rounded-2xl p-6">
                <span className="font-display text-4xl font-semibold text-brand-cyan/35">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 mb-2 text-base font-semibold text-text-primary">{a.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{a.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

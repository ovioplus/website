'use client';

import { motion } from 'framer-motion';
import { NotebookPen, PhoneMissed, ScanEye } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const icons = [PhoneMissed, NotebookPen, ScanEye];

/**
 * The problem, before the product (the order fixia.it uses). A dark band so it
 * reads as a change of register from the light hero, and so the platform
 * section after it lands as the answer.
 */
export function Problem() {
  const { t } = useLanguage();
  return (
    <section className="relative py-6 md:py-10">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0b1324] px-6 py-14 text-white md:px-14 md:py-20">
          <div className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-brand-cyan/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-[#5b5bd6]/20 blur-3xl" />
          <Reveal>
            <div className="relative max-w-2xl">
              <span className="mb-4 inline-block rounded-full border border-white/15 px-3 py-1 font-mono text-xs tracking-[0.18em] text-brand-cyan-light uppercase">
                {t.problem.eyebrow}
              </span>
              <h2 className="font-display text-display-md font-semibold text-balance">
                {t.problem.title1} <span className="text-brand-cyan-light italic">{t.problem.titleHighlight}</span>
              </h2>
              <p className="mt-4 text-base text-white/65 md:text-lg">{t.problem.subtitle}</p>
            </div>
          </Reveal>
          <div className="relative mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
            {t.problem.cards.map((c, i) => {
              const Icon = icons[i] ?? PhoneMissed;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="mb-5 inline-flex rounded-xl border border-rose-300/20 bg-rose-400/10 p-2.5">
                    <Icon className="h-5 w-5 text-rose-300" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-white/65">{c.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

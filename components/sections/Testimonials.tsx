'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

// Testimonial QUOTES stay the same in both languages (they're real quotes)
const TESTIMONIALS = [
  {
    quoteEn:
      "OvioPlus answered 847 calls last month. We didn't miss a single booking — and our team finally has time to focus on the actual dining experience.",
    quoteIt:
      "OvioPlus ha risposto a 847 chiamate il mese scorso. Non abbiamo perso una sola prenotazione — e il team finalmente può concentrarsi sull'esperienza in sala.",
    name: 'Marco Rinaldi',
    role: 'Owner · Trattoria San Marco, Parma',
  },
  {
    quoteEn:
      "The AI books tables in Italian like a real maître d'. Our regulars don't even realize they are talking to a machine. Worth every euro.",
    quoteIt:
      "L'AI prenota in italiano come un vero maître. I clienti abituali non si rendono nemmeno conto di parlare con una macchina. Vale ogni euro.",
    name: 'Elena Ferraro',
    role: 'Manager · Osteria del Borgo, Torino',
  },
  {
    quoteEn:
      'We were missing 30% of dinner-service calls. After OvioPlus that number is zero. We pay €249 and get more than a full-time hire.',
    quoteIt:
      "Stavamo perdendo il 30% delle chiamate durante il servizio. Con OvioPlus zero. Paghiamo €249 e otteniamo più di un assunto full-time.",
    name: 'Giuseppe Lazzaro',
    role: 'Owner · Vino e Cucina, Roma',
  },
];

export function Testimonials() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan mb-4">
              {t.testimonials.eyebrow}
            </span>
            <h2 className="font-display text-display-lg font-semibold text-balance">
              {t.testimonials.title1} <br />
              <span className="text-brand-cyan-light italic">{t.testimonials.titleHighlight}</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <figure className="glass-strong rounded-3xl p-8 flex flex-col h-full">
                <Quote className="w-8 h-8 text-brand-cyan mb-6 opacity-60" />
                <blockquote className="font-display text-xl italic text-text-primary leading-relaxed flex-1 text-balance">
                  {lang === 'it' ? item.quoteIt : item.quoteEn}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-line">
                  <div className="font-semibold text-text-primary">{item.name}</div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted mt-1">
                    {item.role}
                  </div>
                </figcaption>
              </figure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

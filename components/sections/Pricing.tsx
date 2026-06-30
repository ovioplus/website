'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { cn } from '@/lib/utils';

const featuredIndex = 1;

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="relative py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan mb-4">
              {t.pricing.eyebrow}
            </span>
            <h2 className="font-display text-display-lg font-semibold text-balance">
              {t.pricing.title1} <br />
              <span className="text-brand-cyan-light italic">{t.pricing.titleHighlight}</span>
            </h2>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">{t.pricing.subtitle}</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
          {t.pricing.plans.map((plan, i) => {
            const featured = i === featuredIndex;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  'relative flex',
                  featured && 'md:-my-4 md:z-10',
                )}
              >
                <div
                  className={cn(
                    'relative rounded-3xl p-8 flex flex-col w-full',
                    featured
                      ? 'bg-white border-2 border-brand-cyan shadow-2xl shadow-brand-cyan/20'
                      : 'bg-white/85 border border-white/80 shadow-lg shadow-slate-900/5',
                  )}
                >
                  {featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-cyan text-[10px] font-mono uppercase tracking-[0.16em] font-bold text-white shadow-md">
                        <Sparkles className="w-3 h-3" />
                        {t.pricing.mostPopular}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className={cn(
                      'font-display text-3xl font-semibold mb-1',
                      featured ? 'text-text-primary' : 'text-text-secondary',
                    )}>
                      {plan.name}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-line">
                    <span className={cn(
                      'font-display font-semibold leading-none',
                      featured ? 'text-7xl text-text-primary' : 'text-6xl text-text-secondary',
                    )}>
                      {plan.price}
                    </span>
                    <span className="text-text-muted text-sm">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className={cn(
                          'w-4 h-4 mt-0.5 flex-shrink-0',
                          featured ? 'text-brand-cyan' : 'text-text-muted',
                        )} />
                        <span className={featured ? 'text-text-secondary' : 'text-text-muted'}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={cn(
                      'block text-center py-3.5 rounded-xl font-semibold transition-colors',
                      featured
                        ? 'bg-brand-cyan text-white hover:bg-brand-cyan-light'
                        : 'bg-transparent text-text-primary border border-line-strong hover:border-brand-cyan/40',
                    )}
                  >
                    {t.pricing.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center text-sm text-text-muted">{t.pricing.footer}</p>
        </Reveal>
      </div>
    </section>
  );
}

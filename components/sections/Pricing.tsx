'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Info } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { cn } from '@/lib/utils';

const featuredIndex = 1;

/** A feature line with an optional info tooltip: hover or focus to reveal. */
function FeatureNote({ note }: { note: string }) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        type="button"
        aria-label={note}
        className="text-text-muted hover:text-brand-cyan transition-colors"
      >
        <Info className="w-3.5 h-3.5" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.span
            initial={{ opacity: 0, y: 4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            role="tooltip"
            className="absolute left-1/2 bottom-full z-20 mb-2 w-56 -translate-x-1/2 rounded-xl bg-brand-ink px-3.5 py-2.5 text-xs leading-relaxed text-white shadow-xl"
          >
            {note}
            <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-brand-ink" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

export function Pricing() {
  const { t } = useLanguage();
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-10">
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

        <Reveal delay={0.05}>
          <div className="flex justify-center mb-12">
            <div className="relative inline-grid grid-cols-2 rounded-full border border-line-strong bg-white p-1 shadow-sm">
              <motion.span
                className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-brand-cyan"
                animate={{ x: yearly ? 'calc(100% + 8px)' : 0 }}
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
              <button
                type="button"
                onClick={() => setYearly(false)}
                className={cn(
                  'relative z-10 px-5 py-2 text-sm font-semibold rounded-full transition-colors',
                  !yearly ? 'text-white' : 'text-text-secondary',
                )}
              >
                {t.pricing.monthly}
              </button>
              <button
                type="button"
                onClick={() => setYearly(true)}
                className={cn(
                  'relative z-10 flex items-center justify-center gap-1.5 px-5 py-2 text-sm font-semibold rounded-full transition-colors',
                  yearly ? 'text-white' : 'text-text-secondary',
                )}
              >
                {t.pricing.yearly}
                <span
                  className={cn(
                    'rounded-full px-1.5 py-0.5 text-[10px] font-bold',
                    yearly ? 'bg-white/20 text-white' : 'bg-brand-cyan-50 text-brand-cyan-dark',
                  )}
                >
                  -{t.pricing.yearlyDiscountPercent}%
                </span>
              </button>
            </div>
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

                  <div className="mb-8 pb-8 border-b border-line">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={cn(
                          'font-display font-semibold leading-none',
                          featured ? 'text-7xl text-text-primary' : 'text-6xl text-text-secondary',
                        )}
                      >
                        {yearly ? plan.priceYearly : plan.price}
                      </span>
                      <span className="text-text-muted text-sm">{t.pricing.perMonth}</span>
                    </div>
                    {yearly ? (
                      <p className="mt-2 text-xs text-text-muted">
                        {t.pricing.billedAnnually.replace('{{total}}', plan.priceYearlyTotal)}
                      </p>
                    ) : (
                      <p className="mt-2 text-xs text-text-muted">&nbsp;</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5 text-sm">
                        <Check className={cn(
                          'w-4 h-4 mt-0.5 flex-shrink-0',
                          featured ? 'text-brand-cyan' : 'text-text-muted',
                        )} />
                        <span className={cn('flex items-center gap-1.5', featured ? 'text-text-secondary' : 'text-text-muted')}>
                          {f.text}
                          {f.note && <FeatureNote note={f.note} />}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://app.ovioplus.ai/sign-up"
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

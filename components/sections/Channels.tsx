'use client';

import { motion } from 'framer-motion';
import { Globe, MessageSquare, Phone } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const visualConfig = [
  { icon: Globe, bg: 'bg-brand-cyan' },
  { icon: MessageSquare, bg: 'bg-brand-cyan-light' },
  { icon: Phone, bg: 'bg-brand-amber' },
];

export function Channels() {
  const { t } = useLanguage();
  const channels = t.channels.cards.map((c, i) => ({ ...c, ...visualConfig[i] }));
  const [feature, ...rest] = channels;
  const FeatureIcon = feature.icon;

  return (
    <section id="features" className="relative py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan mb-4">
              {t.channels.eyebrow}
            </span>
            <h2 className="font-display text-display-lg font-semibold text-balance">
              {t.channels.title1}{' '}
              <span className="text-brand-cyan-light italic">{t.channels.titleHighlight}</span>
            </h2>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl">
              {t.channels.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-5">
          {/* Featured — large card */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 relative overflow-hidden rounded-3xl border border-white/80 bg-white/85 p-10 md:p-12 min-h-[420px] flex flex-col justify-between hover:border-brand-cyan/40 transition-colors shadow-lg shadow-slate-900/5"
          >
            <div>
              <div className={`inline-flex p-3.5 rounded-2xl ${feature.bg} text-white mb-8`}>
                <FeatureIcon className="w-7 h-7" />
              </div>

              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mb-3">
                {feature.eyebrow}
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-semibold mb-5 text-balance">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg max-w-md">
                {feature.description}
              </p>
            </div>
          </motion.article>

          {/* Two supporting cards stacked */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-5">
            {rest.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <motion.article
                  key={channel.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/75 p-8 hover:border-brand-cyan/40 transition-colors shadow-lg shadow-slate-900/5"
                >
                  <div className="flex items-start gap-5">
                    <div className={`inline-flex p-2.5 rounded-xl ${channel.bg} text-white flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mb-1.5">
                        {channel.eyebrow}
                      </div>
                      <h3 className="font-display text-2xl font-semibold mb-2">
                        {channel.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed text-sm">
                        {channel.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

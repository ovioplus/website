'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, Phone, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function StatStrip() {
  const { lang } = useLanguage();

  const stats = [
    {
      icon: Clock,
      value: '24/7',
      label: lang === 'it' ? 'Sempre attivo' : 'Always on',
    },
    {
      icon: Zap,
      value: '<800ms',
      label: lang === 'it' ? 'Risposta in tempo reale' : 'Real-time response',
    },
    {
      icon: Phone,
      value: '+30%',
      label: lang === 'it' ? 'Chiamate recuperate' : 'Calls recovered',
    },
    {
      icon: Globe,
      value: 'IT · EN',
      label: lang === 'it' ? 'Lingue supportate' : 'Languages supported',
    },
  ];

  return (
    <section className="relative py-8 md:py-10">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group flex items-center gap-3 rounded-2xl bg-white/70 border border-white/80 px-4 py-3.5 shadow-sm shadow-slate-900/5 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-brand-cyan" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-xl font-semibold text-text-primary leading-tight tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-text-muted leading-tight mt-0.5 truncate">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

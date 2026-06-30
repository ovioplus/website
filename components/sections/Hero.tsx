'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Bell, Calendar, Flame, Phone, Play, Users, MessageCircle, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Bottom cloud fade */}
      <div className="cloud-fade" />

      <div className="container-page relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-display-xl font-semibold text-balance text-text-primary max-w-5xl mx-auto"
        >
          {t.hero.title1} {t.hero.title2}{' '}
          <span className="text-gradient italic">{t.hero.titleHighlight}</span>
          {t.hero.titlePeriod}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base md:text-lg text-text-secondary leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#contact" className="btn-primary group">
            {t.hero.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#how" className="btn-ghost">
            <PlayCircle className="w-4 h-4" />
            {t.hero.cta2}
          </a>
        </motion.div>

        {/* Floating cards composition — phone in center */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mt-16 md:mt-20 mx-auto max-w-5xl"
        >
          <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">
            {/* Left side — Live AI call + 2 metric cards */}
            <div className="hidden md:flex md:col-span-3 flex-col gap-4">
              <FloatingCard delay={0.4}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-cyan/15 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-text-primary">
                      {lang === 'it' ? 'Chiamata in corso' : 'Live call'}
                    </div>
                    <div className="text-[10px] text-text-muted">+39 02 · 00:42</div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-[11px] text-text-secondary leading-relaxed bg-slate-50 rounded-lg px-3 py-2">
                  {lang === 'it'
                    ? '"Tavolo per 4, venerdì 8pm"'
                    : '"Table for 4, Friday at 8pm"'}
                </div>
              </FloatingCard>

              <div className="grid grid-cols-2 gap-3">
                <FloatingCard delay={0.5} compact>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted mb-2">
                    <Users className="w-3 h-3" />
                    {lang === 'it' ? 'Coperti' : 'Covers'}
                  </div>
                  <div className="font-display text-2xl font-semibold text-text-primary">
                    42<span className="text-xs text-text-muted font-sans"> tonight</span>
                  </div>
                </FloatingCard>
                <FloatingCard delay={0.55} compact>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted mb-2">
                    <Check className="w-3 h-3" />
                    {lang === 'it' ? 'Confermate' : 'Confirmed'}
                  </div>
                  <div className="font-display text-2xl font-semibold text-text-primary">
                    38<span className="text-xs text-text-muted font-sans"> / 42</span>
                  </div>
                </FloatingCard>
              </div>
            </div>

            {/* Phone — center */}
            <div className="col-span-12 md:col-span-6">
              <PhoneMockup />
            </div>

            {/* Right side — Week tracker + Monthly bookings */}
            <div className="hidden md:flex md:col-span-3 flex-col gap-4 mb-8">
              <FloatingCard delay={0.5}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-cyan/15 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-text-primary">
                      {lang === 'it' ? 'Questa settimana' : 'This week'}
                    </div>
                    <div className="text-xs text-text-muted mt-0.5">
                      {lang === 'it' ? '198 prenotazioni' : '198 bookings'}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-500">+24%</span>
                </div>
                <div className="flex items-end gap-1.5 h-10">
                  {[40, 55, 70, 45, 95, 80, 65].map((h, i) => {
                    const isToday = i === 4;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className={`w-full rounded-sm ${
                            isToday ? 'bg-brand-cyan' : 'bg-brand-cyan/25'
                          }`}
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    );
                  })}
                </div>
              </FloatingCard>

              <FloatingCard delay={0.6}>
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="w-4 h-4 text-brand-cyan" />
                  <span className="text-sm font-semibold text-text-primary">
                    {lang === 'it' ? 'AI Voice' : 'AI Voice'}
                  </span>
                </div>
                <div className="font-display text-3xl md:text-4xl font-semibold text-text-primary leading-none">
                  847 <span className="text-xs text-text-muted font-sans">{lang === 'it' ? 'chiamate' : 'calls'}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-line">
                  <a
                    href="#features"
                    className="flex items-center justify-between text-xs text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {lang === 'it' ? 'Questo mese' : 'This month'}
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </FloatingCard>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({
  children,
  delay = 0,
  compact = false,
}: {
  children: React.ReactNode;
  delay?: number;
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`glass-strong rounded-2xl ${compact ? 'p-3.5' : 'p-5'}`}
    >
      {children}
    </motion.div>
  );
}

function PhoneMockup() {
  const { lang } = useLanguage();

  return (
    <div className="relative mx-auto w-[270px] md:w-[300px]">
      {/* Phone frame */}
      <div className="relative rounded-[3rem] bg-[#1a1f2e] p-2.5 shadow-2xl shadow-slate-900/30">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-b-2xl bg-[#1a1f2e] z-10" />

        {/* Screen */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-white h-[560px]">
          {/* Status bar */}
          <div className="h-10 flex items-center justify-between px-7 pt-2 text-xs font-medium text-text-primary">
            <span>9:41</span>
            <span className="flex gap-1">
              <span className="w-4 h-2.5 rounded-sm border border-text-primary/40" />
            </span>
          </div>

          {/* Header */}
          <div className="px-5 pt-3 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-cyan to-brand-cyan-light flex items-center justify-center text-white font-bold text-sm">
                  T
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-primary">
                    Trattoria San Marco
                  </div>
                  <div className="text-[10px] text-text-muted">
                    {lang === 'it' ? 'Aperto · Tavoli: 18/20' : 'Open · Tables 18/20'}
                  </div>
                </div>
              </div>
              <div className="flex gap-1.5">
                <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <Calendar className="w-3.5 h-3.5 text-text-secondary" />
                </button>
                <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center relative">
                  <Bell className="w-3.5 h-3.5 text-text-secondary" />
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-brand-amber" />
                </button>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-[10px] text-text-muted uppercase tracking-wider font-mono">
                {lang === 'it' ? 'Stasera · venerdì' : 'Tonight · Friday'}
              </div>
              <div className="font-display text-2xl font-semibold text-text-primary mt-0.5">
                42 <span className="text-base text-text-muted font-sans">
                  {lang === 'it' ? 'coperti previsti' : 'covers expected'}
                </span>
              </div>
            </div>
          </div>

          {/* Live AI call banner */}
          <div className="mx-4 p-3 rounded-2xl bg-gradient-to-r from-brand-cyan-50 to-white border border-brand-cyan/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <Phone className="w-4 h-4 text-brand-cyan" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-text-primary">
                  {lang === 'it' ? 'AI in chiamata' : 'AI on a call'}
                </div>
                <div className="text-[9px] text-text-muted">
                  {lang === 'it' ? 'Marco · prenotazione' : 'Marco · booking'}
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-text-muted">00:42</span>
          </div>

          {/* Today's bookings */}
          <div className="px-4 mt-4 flex items-center justify-between">
            <span className="text-xs font-semibold text-text-primary">
              {lang === 'it' ? 'Prenotazioni' : 'Reservations'}
            </span>
            <a href="#" className="text-[10px] text-text-muted flex items-center gap-1">
              {lang === 'it' ? 'Tutte' : 'View all'}
              <ArrowRight className="w-2.5 h-2.5" />
            </a>
          </div>

          {/* Booking list */}
          <div className="px-4 mt-2 space-y-2">
            {(lang === 'it'
              ? [
                  { name: 'Famiglia Rossi', time: '19:30', guests: 4, status: 'confirmed' },
                  { name: 'Bianchi', time: '20:00', guests: 2, status: 'confirmed' },
                  { name: 'Conti', time: '20:30', guests: 6, status: 'pending' },
                ]
              : [
                  { name: 'Rossi Family', time: '7:30 PM', guests: 4, status: 'confirmed' },
                  { name: 'Bianchi', time: '8:00 PM', guests: 2, status: 'confirmed' },
                  { name: 'Conti', time: '8:30 PM', guests: 6, status: 'pending' },
                ]).map((b) => (
              <div key={b.name} className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-0">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    b.status === 'confirmed' ? 'bg-emerald-500' : 'bg-brand-amber'
                  }`} />
                  <span className="text-[11px] font-medium text-text-primary">{b.name}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-text-muted font-mono">
                  <span>{b.time}</span>
                  <span className="text-text-secondary">· {b.guests}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

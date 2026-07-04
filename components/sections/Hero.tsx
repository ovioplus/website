"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Bell,
  Calendar,
  Users,
  MessageCircle,
  Check,
  Zap,
  TrendingUp,
  Clock,
  Headphones,
  Sparkles,
  MoreHorizontal,
  BarChart3,
  Coffee,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="top"
      className="relative pt-28 md:pt-32 pb-12 md:pb-20 overflow-hidden"
    >
      <div className="cloud-fade" />

      <div className="container-page relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-display-xl font-semibold text-balance text-text-primary max-w-5xl mx-auto"
        >
          {t.hero.title1} {t.hero.title2}{" "}
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mt-16 md:mt-20 mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-12 gap-4 md:gap-6 items-stretch">
            {/* Left column — AI Assistant */}
            <div className="hidden md:flex md:col-span-3 flex-col gap-4">
              <FloatingCard delay={0.4} className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-cyan/15 flex items-center justify-center">
                    <Headphones className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-text-primary">
                      {lang === "it" ? "AI Assistant" : "AI Assistant"}
                    </div>
                    <div className="text-[10px] text-text-muted flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {lang === "it"
                        ? "Attivo · 3 chiamate in corso"
                        : "Active · 3 calls in progress"}
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-text-secondary leading-relaxed bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                  <span className="font-medium text-text-primary">“</span>
                  {lang === "it"
                    ? "Tavolo per 2 domani alle 20:00? Confermato."
                    : "Table for 2 tomorrow at 8pm? Confirmed."}
                  <span className="font-medium text-text-primary">”</span>
                </div>

                <div className="mt-2 text-[11px] text-text-secondary leading-relaxed bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                  <span className="font-medium text-text-primary">“</span>
                  {lang === "it"
                    ? "18 prenotazioni aggiunte automaticamente per la prossima settimana."
                    : "18 bookings automatically added for next week."}
                  <span className="font-medium text-text-primary">”</span>
                </div>

                <div className="mt-2 flex items-center gap-2 text-[10px] text-text-muted">
                  <Zap className="w-3 h-3 text-brand-cyan" />
                  <span>
                    {lang === "it" ? "Tasso di conversione" : "Conversion rate"}{" "}
                    94% · {lang === "it" ? "Ultimo aggiornamento 2 min fa" : "Last updated 2 min ago"}
                  </span>
                </div>
              </FloatingCard>

              <div className="grid grid-cols-2 gap-3">
                <FloatingCard delay={0.5} compact>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted mb-2">
                    <Users className="w-3 h-3" />
                    {lang === "it" ? "Coperti oggi" : "Covers today"}
                  </div>
                  <div className="font-display text-2xl font-semibold text-text-primary">
                    42
                    <span className="text-xs text-text-muted font-sans"> / 56</span>
                  </div>
                  <div className="text-[10px] text-emerald-500 flex items-center gap-0.5 mt-1">
                    <TrendingUp className="w-3 h-3" /> +8%
                  </div>
                </FloatingCard>
                <FloatingCard delay={0.55} compact>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted mb-2">
                    <Check className="w-3 h-3" />
                    {lang === "it" ? "Confermate" : "Confirmed"}
                  </div>
                  <div className="font-display text-2xl font-semibold text-text-primary">
                    38
                    <span className="text-xs text-text-muted font-sans"> / 42</span>
                  </div>
                  <div className="text-[10px] text-text-muted flex items-center gap-0.5 mt-1">
                    <Clock className="w-3 h-3" />{" "}
                    {lang === "it" ? "4 in attesa" : "4 pending"}
                  </div>
                </FloatingCard>
              </div>
            </div>

            {/* Center Dashboard */}
            <div className="col-span-12 md:col-span-6">
              <DashboardMockup />
            </div>

            {/* Right column — Weekly Card */}
            <div className="hidden md:flex md:col-span-3 flex-col gap-4">
              {/* No flex-1 / no forced stretch here: the card sizes itself to its
                  own content, so the top and bottom padding (p-5, from
                  FloatingCard) are naturally identical. The AI Voice card below
                  takes flex-1 and absorbs any leftover column height instead. */}
              <FloatingCard delay={0.5}>
                <div className="w-full flex flex-col gap-4">
                  {/* Last week */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-cyan/15 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-text-primary">
                        {lang === "it" ? "Settimana scorsa" : "Last week"}
                      </div>
                      <div className="text-xs text-text-muted">
                        {lang === "it" ? "160 prenotazioni" : "160 bookings"}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500">+5%</span>
                  </div>

                  {/* This week */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-cyan/15 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-text-primary">
                        {lang === "it" ? "Questa settimana" : "This week"}
                      </div>
                      <div className="text-xs text-text-muted">
                        {lang === "it" ? "198 prenotazioni" : "198 bookings"}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500">+24%</span>
                  </div>

                  {/* Next week */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-cyan/15 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-text-primary">
                        {lang === "it" ? "Prossima settimana" : "Next week"}
                      </div>
                      <div className="text-xs text-text-muted">
                        {lang === "it" ? "154 prenotazioni" : "154 bookings"}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500">+16%</span>
                  </div>
                </div>
              </FloatingCard>

              {/* AI Voice card */}
              <FloatingCard delay={0.6} className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="w-4 h-4 text-brand-cyan" />
                  <span className="text-sm font-semibold text-text-primary">
                    {lang === "it" ? "AI Voice" : "AI Voice"}
                  </span>
                </div>
                <div className="font-display text-3xl md:text-4xl font-semibold text-text-primary leading-none">
                  847{" "}
                  <span className="text-xs text-text-muted font-sans">
                    {lang === "it" ? "chiamate" : "calls"}
                  </span>
                </div>
                <div className="mt-1 text-[10px] text-text-muted flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-cyan" />
                  {lang === "it"
                    ? "92% gestite automaticamente"
                    : "92% handled automatically"}
                </div>
                <div className="mt-3 pt-3 border-t border-line">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center justify-between text-xs text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {lang === "it" ? "Questo mese" : "This month"}
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
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  compact?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`glass-strong rounded-2xl ${compact ? "p-3.5" : "p-5"} ${className}`}
    >
      {children}
    </motion.div>
  );
}

function DashboardMockup() {
  const { lang } = useLanguage();

  const reservations =
    lang === "it"
      ? [
          { name: "Prenotazione 1", time: "19:30", guests: 4, status: "confirmed", ai: true },
          { name: "Prenotazione 2", time: "20:00", guests: 2, status: "confirmed", ai: true },
          { name: "Prenotazione 3", time: "20:30", guests: 6, status: "pending", ai: false },
          { name: "Prenotazione 4", time: "21:00", guests: 3, status: "confirmed", ai: true },
        ]
      : [
          { name: "Booking 1", time: "7:30 PM", guests: 4, status: "confirmed", ai: true },
          { name: "Booking 2", time: "8:00 PM", guests: 2, status: "confirmed", ai: true },
          { name: "Booking 3", time: "8:30 PM", guests: 6, status: "pending", ai: false },
          { name: "Booking 4", time: "9:00 PM", guests: 3, status: "confirmed", ai: true },
        ];

  return (
    <div className="relative mx-auto w-full max-w-[380px] md:max-w-full h-full">
      <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-2xl shadow-slate-900/15 hover:shadow-2xl hover:shadow-slate-900/25 transition-shadow duration-300 overflow-hidden h-full flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-white/50 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-cyan to-brand-cyan-light flex items-center justify-center text-white font-bold text-sm">
              R
            </div>
            <div>
              <div className="text-sm font-semibold text-text-primary">
                {lang === "it" ? "Ristorante e Pizzeria" : "Ristorante e Pizzeria"}
              </div>
              <div className="text-[10px] text-text-muted flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {lang === "it" ? "Aperto" : "Open"}
                </span>
                <span>·</span>
                <span>{lang === "it" ? "Tavoli: 18/20" : "Tables 18/20"}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={(e) => e.preventDefault()} className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
              <Bell className="w-4 h-4 text-text-secondary" />
            </button>
            <button onClick={(e) => e.preventDefault()} className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
              <MoreHorizontal className="w-4 h-4 text-text-secondary" />
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2 px-4 py-3 bg-slate-50/50 border-b border-slate-100 flex-shrink-0">
          <div className="text-center">
            <div className="text-[10px] text-text-muted uppercase tracking-wider">{lang === "it" ? "Coperti" : "Covers"}</div>
            <div className="font-display text-lg font-semibold text-text-primary">42</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-text-muted uppercase tracking-wider">{lang === "it" ? "Prenotazioni" : "Bookings"}</div>
            <div className="font-display text-lg font-semibold text-text-primary">38</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-text-muted uppercase tracking-wider">{lang === "it" ? "AI chiamate" : "AI calls"}</div>
            <div className="font-display text-lg font-semibold text-text-primary">12</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-text-muted uppercase tracking-wider">{lang === "it" ? "Conversione" : "Conversion"}</div>
            <div className="font-display text-lg font-semibold text-emerald-500">94%</div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-5 gap-3 p-4 flex-1">
          <div className="col-span-3 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-text-primary">
                {lang === "it" ? "Prenotazioni oggi" : "Today's reservations"}
              </span>
              <button onClick={(e) => e.preventDefault()} className="text-[10px] text-text-muted flex items-center gap-1 hover:text-text-primary transition-colors">
                {lang === "it" ? "Tutte" : "View all"}
                <ArrowRight className="w-2.5 h-2.5" />
              </button>
            </div>
            <div className="space-y-2 flex-1">
              {reservations.map((b) => (
                <div key={b.name} className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${b.status === "confirmed" ? "bg-emerald-500" : "bg-brand-amber"}`} />
                    <span className="text-[11px] font-medium text-text-primary">{b.name}</span>
                    {b.ai && <span className="text-[8px] bg-brand-cyan/10 text-brand-cyan rounded-full px-1.5 py-0.5 font-mono">AI</span>}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-text-muted font-mono">
                    <span>{b.time}</span>
                    <span className="text-text-secondary">· {b.guests}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-3">
            <div className="flex-1 rounded-xl bg-gradient-to-br from-brand-cyan/5 to-white border border-brand-cyan/20 p-3">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span className="text-[10px] font-semibold text-text-primary">{lang === "it" ? "AI Insight" : "AI Insight"}</span>
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                {lang === "it"
                  ? "2 walk-in previsti stasera. Aggiungi un tavolo extra."
                  : "2 walk-ins expected tonight. Add an extra table."}
              </p>
              <div className="mt-2 flex items-center gap-2 text-[10px] text-text-muted">
                <Zap className="w-3 h-3 text-brand-cyan" />
                <span>{lang === "it" ? "Suggerito" : "Suggested"}</span>
              </div>
            </div>
            <button onClick={(e) => e.preventDefault()} className="w-full bg-brand-cyan text-white text-[11px] font-semibold py-2 rounded-xl shadow-sm hover:bg-brand-cyan-dark transition-colors">
              {lang === "it" ? "+ Nuova prenotazione" : "+ New reservation"}
            </button>
            <div className="flex gap-2">
              <button onClick={(e) => e.preventDefault()} className="flex-1 bg-slate-100 text-text-secondary text-[10px] font-semibold py-1.5 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-1">
                <BarChart3 className="w-3 h-3" /> {lang === "it" ? "Statistiche" : "Stats"}
              </button>
              <button onClick={(e) => e.preventDefault()} className="flex-1 bg-slate-100 text-text-secondary text-[10px] font-semibold py-1.5 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-1">
                <Coffee className="w-3 h-3" /> {lang === "it" ? "Menu" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
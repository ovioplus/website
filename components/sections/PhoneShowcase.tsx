'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

/**
 * 3D floating phone mockup with mock chat.
 * Pure CSS perspective + Framer Motion float — no Three.js.
 */
export function PhoneShowcase() {
  const { lang } = useLanguage();

  const messages =
    lang === 'it'
      ? [
          { from: 'ai', text: 'Buonasera! Sono OvioPlus. Come posso aiutarla?' },
          { from: 'user', text: 'Un tavolo per 4 venerdì alle 20?' },
          { from: 'ai', text: 'Perfetto. Posso avere il suo nome e una mail?' },
          { from: 'user', text: 'Marco Rossi, m.rossi@email.it' },
          { from: 'ai', text: 'Prenotazione confermata. A venerdì! ✓' },
        ]
      : [
          { from: 'ai', text: 'Good evening! I am OvioPlus. How can I help?' },
          { from: 'user', text: 'A table for 4 on Friday at 8pm?' },
          { from: 'ai', text: 'Perfect. May I have your name and email?' },
          { from: 'user', text: 'Marco Rossi, m.rossi@email.com' },
          { from: 'ai', text: 'Reservation confirmed. See you Friday! ✓' },
        ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="container-page">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left text */}
          <Reveal>
            <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan mb-4">
              {lang === 'it' ? 'Conversazione AI dal vivo' : 'Live AI conversation'}
            </span>
            <h2 className="font-display text-display-md font-semibold text-balance mb-6">
              {lang === 'it' ? (
                <>
                  Naturale, veloce, <br />
                  <span className="text-brand-cyan-light italic">come un vero maître.</span>
                </>
              ) : (
                <>
                  Natural, fast, <br />
                  <span className="text-brand-cyan-light italic">like a real maître.</span>
                </>
              )}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {lang === 'it'
                ? "L'AI capisce frasi imperfette, italianismi, voci sovrapposte. Conferma in 90 secondi netti."
                : 'The AI understands imperfect phrasing, accents, and overlapping voices. Confirms in under 90 seconds flat.'}
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: lang === 'it' ? 'Risposta in < 800ms' : 'Answer in < 800ms' },
                { icon: MessageCircle, label: lang === 'it' ? 'IT + EN + accenti regionali' : 'IT + EN + regional accents' },
                { icon: Calendar, label: lang === 'it' ? 'Verifica disponibilità live' : 'Live availability check' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="inline-flex p-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30">
                    <Icon className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <span className="text-text-secondary">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — phone (static, no infinite animation) */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto">
              {/* Static glow behind — no animation */}
              <div
                aria-hidden
                className="absolute inset-0 -m-6 rounded-full pointer-events-none opacity-50"
                style={{
                  background:
                    'radial-gradient(circle, rgba(44,171,230,0.25), transparent 70%)',
                }}
              />

              <div className="relative mx-auto w-[280px] md:w-[320px]">
                <div className="relative rounded-[2.5rem] bg-[#1a1f2e] p-2.5 shadow-2xl shadow-slate-900/30">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-b-2xl bg-[#1a1f2e] z-10" />

                  {/* Screen */}
                  <div className="relative rounded-[2rem] overflow-hidden bg-white h-[560px] md:h-[640px]">
                    {/* Status bar */}
                    <div className="h-10 flex items-center justify-between px-6 pt-3 text-xs text-text-primary font-mono">
                      <span>9:41</span>
                      <span>•••</span>
                    </div>

                    {/* Header */}
                    <div className="px-5 pt-2 pb-4 border-b border-line">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-cyan flex items-center justify-center text-white font-bold text-sm">
                          O
                        </div>
                        <div>
                          <div className="text-sm font-semibold">OvioPlus</div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-mono text-text-muted uppercase">
                              {lang === 'it' ? 'In linea' : 'Online'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="p-5 space-y-3 overflow-hidden">
                      {messages.map((m, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.4, duration: 0.5 }}
                          className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[85%] px-3.5 py-2 rounded-2xl text-[13px] leading-relaxed ${
                              m.from === 'user'
                                ? 'bg-brand-cyan text-white rounded-br-md'
                                : 'bg-slate-100 border border-slate-200 text-text-primary rounded-bl-md'
                            }`}
                          >
                            {m.text}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

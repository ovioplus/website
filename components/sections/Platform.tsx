'use client';

import { Check } from 'lucide-react';
import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { BrowserFrame, FloatBadge, PhoneFrame } from '@/components/platform/Frame';
import { AskOvioMock, BookingEditMock, BookingPageMock, CalendarMock, ServiceMapMock } from '@/components/platform/mocks';
import { useLanguage } from '@/lib/i18n/LanguageContext';

/**
 * "The platform in action", after fixia.it: one row per product area, the
 * screen in a browser frame with a stat card floating over a corner, rows
 * alternating sides. Every row describes something live in the app today
 * (ovioplus-platform PLAN §17-§21); do not add a row for a feature that is
 * not shipped.
 */
export function Platform() {
  const { t, lang } = useLanguage();
  const L = (it: string, en: string) => (lang === 'it' ? it : en);

  const visuals: ReactNode[] = [
    <div key="service" className="relative">
      <BrowserFrame url="app.ovioplus.ai/dashboard/service">
        <ServiceMapMock />
      </BrowserFrame>
      <FloatBadge className="-top-5 -left-3 sm:-left-6">
        <div className="text-[10px] font-medium text-text-muted">{L('Alle 20:30', 'At 20:30')}</div>
        <div className="font-display text-lg font-semibold text-text-primary">
          {L('3 tavoli occupati', '3 tables seated')}
        </div>
      </FloatBadge>
      <FloatBadge className="-right-3 -bottom-5 sm:-right-6" delay={0.35}>
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
          <div>
            <div className="text-[10px] font-medium text-text-muted">{L('Arriva alle 20:45', 'Arriving 20:45')}</div>
            <div className="text-sm font-semibold text-text-primary">Conti · 2 · T3</div>
          </div>
        </div>
      </FloatBadge>
    </div>,
    <div key="edit" className="relative">
      <BrowserFrame url="app.ovioplus.ai/dashboard/service">
        <BookingEditMock />
      </BrowserFrame>
      <FloatBadge className="-right-3 -bottom-5 sm:-right-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-[11px]">✓</span>
          {L('Spostata al tavolo T7', 'Moved to table T7')}
        </div>
      </FloatBadge>
    </div>,
    <div key="calendar" className="relative">
      <BrowserFrame url="app.ovioplus.ai/dashboard/service">
        <CalendarMock />
      </BrowserFrame>
      <FloatBadge className="-top-5 -right-3 sm:-right-6">
        <div className="text-[10px] font-medium text-text-muted">{L('Sabato 14', 'Saturday 14')}</div>
        <div className="font-display text-lg font-semibold text-text-primary">{L('86 coperti', '86 covers')}</div>
      </FloatBadge>
    </div>,
    <div key="ask" className="relative">
      <BrowserFrame url="app.ovioplus.ai/dashboard">
        <AskOvioMock />
      </BrowserFrame>
      <FloatBadge className="-bottom-5 -left-3 sm:-left-6">
        <div className="text-[10px] font-medium text-text-muted">{L('Chiedi a Ovio', 'Ask Ovio')}</div>
        <div className="text-sm font-semibold text-text-primary">{L('Niente cambia finché non confermi', 'Nothing changes until you confirm')}</div>
      </FloatBadge>
    </div>,
    <div key="page" className="relative py-4">
      <PhoneFrame>
        <BookingPageMock />
      </PhoneFrame>
      <FloatBadge className="top-10 right-0 sm:right-6">
        <div className="text-[10px] font-medium text-text-muted">{L('Email inviata', 'Email sent')}</div>
        <div className="text-sm font-semibold text-text-primary">{L('Prenotazione confermata ✓', 'Booking confirmed ✓')}</div>
      </FloatBadge>
      <FloatBadge className="bottom-12 left-0 sm:left-6" delay={0.35}>
        <div className="text-[10px] font-medium text-text-muted">{L('Lingue', 'Languages')}</div>
        <div className="font-display text-lg font-semibold text-text-primary">IT · EN</div>
      </FloatBadge>
    </div>,
  ];

  return (
    <section id="platform" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
            <span className="mb-4 inline-block rounded-full border border-brand-cyan/25 bg-white/70 px-3 py-1 font-mono text-xs tracking-[0.18em] text-brand-cyan-dark uppercase">
              {t.platform.eyebrow}
            </span>
            <h2 className="font-display text-display-lg font-semibold text-balance">
              {t.platform.title1} <span className="text-gradient italic">{t.platform.titleHighlight}</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">{t.platform.subtitle}</p>
          </div>
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          {t.platform.items.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={item.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <Reveal className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-brand-cyan">{String(i + 1).padStart(2, '0')}</span>
                    <span className="h-px w-8 bg-brand-cyan/40" />
                    <span className="font-mono text-xs tracking-[0.16em] text-text-muted uppercase">{item.eyebrow}</span>
                  </div>
                  <h3 className="font-display text-display-md font-semibold text-balance text-text-primary">{item.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">{item.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-text-primary">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-cyan/15">
                          <Check className="h-3 w-3 text-brand-cyan-dark" strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`} delay={0.1}>
                  <div className="px-3 sm:px-6">{visuals[i]}</div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

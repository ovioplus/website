'use client';

import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const CLIENTS = [
  'Trattoria San Marco',
  'Osteria del Borgo',
  'Vino e Cucina',
  'La Tavola Antica',
  'Ristorante Aurora',
  'Casa di Vento',
  'Il Forno Sacro',
  'Sapore Vero',
];

export function Clients() {
  const { t } = useLanguage();

  return (
    <section className="relative py-14 md:py-16">
      <div className="container-page">
        <Reveal>
          <div className="text-center mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
              {t.clients.eyebrow}
            </span>
          </div>
        </Reveal>

        {/* CSS mask creates true transparent edges — no color overlay */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0, #000 10%, #000 90%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0, #000 10%, #000 90%, transparent 100%)',
          }}
        >
          {/* Two identical groups make a perfect seamless loop */}
          <div className="flex w-max animate-marquee">
            <Group />
            <Group />
          </div>
        </div>
      </div>
    </section>
  );
}

function Group() {
  return (
    <ul className="flex gap-14 px-7 shrink-0">
      {CLIENTS.map((name) => (
        <li
          key={name}
          className="font-display text-2xl md:text-3xl font-medium text-text-secondary/70 whitespace-nowrap transition-colors duration-300 hover:text-text-primary"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

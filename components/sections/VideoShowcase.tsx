'use client';

import { useEffect, useRef } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

/**
 * The 43-second "Sabato sera" story (source and render scripts in /video).
 * Muted with on-screen captions, so it can play by itself, but only while it
 * is on screen: `preload="none"` until then, so a visitor who never scrolls
 * here downloads none of it. Controls stay visible for sound-off scrubbing.
 */
export function VideoShowcase() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        if (e.isIntersecting && e.intersectionRatio >= 0.5 && !reduce) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: [0, 0.5] },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [lang]);

  return (
    <section id="video" className="relative scroll-mt-20 py-14 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
            <span className="mb-4 inline-block font-mono text-xs tracking-[0.18em] text-brand-cyan uppercase">{t.video.eyebrow}</span>
            <h2 className="font-display text-display-md font-semibold text-balance">
              {t.video.title1} <span className="text-gradient italic">{t.video.titleHighlight}</span>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.6rem] border border-white/80 bg-white shadow-[0_40px_100px_-40px_rgba(15,23,42,0.45)]">
            <video
              key={lang}
              ref={ref}
              className="block aspect-video w-full"
              src={`/videos/ovioplus-sabato-sera-${lang}.mp4`}
              poster={`/videos/ovioplus-sabato-sera-poster-${lang}.png`}
              muted
              loop
              playsInline
              controls
              preload="none"
              aria-label={t.video.ariaLabel}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

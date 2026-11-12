'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

/**
 * The 43-second "Sabato sera" story. The published files have a sound track
 * (added by Ayoub after rendering; the render in /video is silent). Browsers
 * only autoplay muted, so it starts muted while on screen and the sound
 * button is the obvious way in. `preload="none"` until it is on screen, so a
 * visitor who never scrolls here downloads none of it.
 */
export function VideoShowcase() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

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
    // The native controls can unmute too; keep the button in step.
    const sync = () => setMuted(v.muted);
    v.addEventListener('volumechange', sync);
    return () => {
      io.disconnect();
      v.removeEventListener('volumechange', sync);
    };
  }, [lang]);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) {
      // Turning the sound on is a clear "watch this": restart if it is mid-way.
      if (v.currentTime > 2) v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

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
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.6rem] border border-white/80 bg-white shadow-[0_40px_100px_-40px_rgba(15,23,42,0.45)]">
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
              onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
            />
            <button
              type="button"
              onClick={toggleSound}
              aria-pressed={!muted}
              className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition-colors hover:bg-slate-900"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              {muted ? t.video.soundOn : t.video.soundOff}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

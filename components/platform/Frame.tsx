'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * A product view in a browser window, the way fixia.it shows its back office.
 * The mockups inside are coded, not screenshots: they stay sharp, translate
 * with the IT/EN toggle, and never show a real guest's name.
 */
export function BrowserFrame({ url, children, className = '' }: { url: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-1 font-mono text-[10px] text-text-muted ring-1 ring-slate-200/70">{url}</span>
      </div>
      {children}
    </div>
  );
}

/** A phone outline for the guest-facing booking page. */
export function PhoneFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-[260px] rounded-[2.4rem] border-[10px] border-slate-900 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.5)] ${className}`}>
      <div className="absolute left-1/2 top-1.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
      <div className="overflow-hidden rounded-[1.7rem]">{children}</div>
    </div>
  );
}

/**
 * The small stat cards that float over a corner of the product view
 * ("Active run · 12 blocks" on fixia). Positioned by the caller.
 */
export function FloatBadge({ children, className = '', delay = 0.2 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-20 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_18px_40px_-16px_rgba(15,23,42,0.35)] backdrop-blur ${className}`}
    >
      {children}
    </motion.div>
  );
}

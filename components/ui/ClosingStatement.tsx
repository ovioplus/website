'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/**
 * The closing statement at the end of a standalone page (About's vision,
 * Trust's commitment).
 *
 * Deliberately light. It used to be the same solid cyan gradient as the
 * footer's newsletter banner, and since it is the last thing before the
 * footer, every page ended with two identical blue slabs stacked on top of
 * each other. Light card here, blue banner there: one accent per screen.
 */
export function ClosingStatement({
  eyebrow,
  heading,
  quote,
  body,
}: {
  eyebrow: string;
  heading: string;
  quote?: string;
  body: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-4"
    >
      <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-10 md:p-16 text-center shadow-sm shadow-slate-900/5">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-cyan/10 blur-3xl"
        />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-text-primary mb-5 text-balance leading-tight">
            {heading}
          </h2>
          {quote && (
            <p className="font-display italic text-xl md:text-2xl text-brand-cyan-dark mb-6 max-w-xl mx-auto">
              &ldquo;{quote}&rdquo;
            </p>
          )}
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">{body}</p>
        </div>
      </div>
    </motion.section>
  );
}

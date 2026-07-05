'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

/**
 * Shared shell for standalone marketing pages (about, blog, careers, contact).
 * Provides a consistent hero (eyebrow, title, subtitle, back link) + wrapper.
 */
export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const { t } = useLanguage();

  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-text-muted hover:text-brand-cyan transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3" />
            {t.pages.backHome}
          </a>

          <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan mb-4">
            {eyebrow}
          </span>

          <h1 className="font-display text-display-lg font-semibold text-text-primary text-balance leading-tight mb-6 max-w-3xl">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="mt-16 md:mt-20">{children}</div>
      </div>
    </div>
  );
}

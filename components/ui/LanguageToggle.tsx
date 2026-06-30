'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { cn } from '@/lib/utils';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={cn(
        'inline-flex items-center gap-0.5 p-0.5 rounded-full bg-slate-100/60 border border-line text-[10px] font-mono uppercase tracking-wider',
        className,
      )}
    >
      {(['it', 'en'] as const).map((option) => {
        const active = lang === option;
        return (
          <button
            key={option}
            onClick={() => setLang(option)}
            className={cn(
              'relative px-3 py-1 rounded-full transition-colors duration-200',
              active ? 'text-white' : 'text-text-muted hover:text-text-secondary',
            )}
            aria-label={`Switch to ${option === 'it' ? 'Italian' : 'English'}`}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId="lang-toggle-pill"
                className="absolute inset-0 rounded-full bg-brand-cyan"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{option}</span>
          </button>
        );
      })}
    </div>
  );
}

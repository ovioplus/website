'use client';

import { usePathname } from 'next/navigation';
import { Shield, FileText, Cookie, Lock, Key } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LEGAL_INDEX } from '@/lib/i18n/legal';
import { cn } from '@/lib/utils';

const iconMap = { shield: Shield, 'file-text': FileText, cookie: Cookie, lock: Lock, key: Key };

export function LegalSidebar() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  return (
    <nav className="space-y-1">
      <p className="px-3 mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
        {lang === 'it' ? 'Documenti legali' : 'Legal documents'}
      </p>
      {LEGAL_INDEX.map((doc) => {
        const Icon = iconMap[doc.icon as keyof typeof iconMap];
        const href = `/legal/${doc.slug}`;
        const active = pathname === href;
        return (
          <a
            key={doc.slug}
            href={href}
            className={cn(
              'relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all',
              active
                ? 'text-text-primary'
                : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.03]',
            )}
          >
            {active && (
              <motion.span
                layoutId="legal-active-pill"
                className="absolute inset-0 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <Icon className={cn('w-4 h-4 relative z-10', active && 'text-brand-cyan')} />
            <span className="relative z-10">{lang === 'it' ? doc.it : doc.en}</span>
          </a>
        );
      })}
    </nav>
  );
}

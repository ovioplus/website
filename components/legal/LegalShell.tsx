'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LEGAL_DOCS, type LegalDoc } from '@/lib/i18n/legal';
import { Reveal } from '@/components/ui/Reveal';
import { LegalSidebar } from './LegalSidebar';
import { cn } from '@/lib/utils';

type Props = {
  slug: 'privacy' | 'terms' | 'cookies' | 'dpa' | 'nda';
};

export function LegalShell({ slug }: Props) {
  const { lang } = useLanguage();
  const doc: LegalDoc = LEGAL_DOCS[lang][slug];
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Highlight the currently visible section in the TOC
    const sections = doc.sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [doc]);

  return (
    <div className="container-page py-32 md:py-40">
      <div className="grid lg:grid-cols-[220px_1fr_220px] gap-12">
        {/* Left — doc switcher */}
        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <LegalSidebar />
          </div>
        </aside>

        {/* Main — content */}
        <article className="min-w-0">
          <Reveal>
            <a
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-text-muted hover:text-brand-cyan transition-colors mb-8"
            >
              <ChevronRight className="w-3 h-3 rotate-180" />
              {lang === 'it' ? 'Torna al sito' : 'Back to site'}
            </a>

            <header className="mb-12 pb-8 border-b border-line">
              <h1 className="font-display text-display-md font-semibold text-balance mb-3">
                {doc.title}
              </h1>
              {doc.subtitle && (
                <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-2xl">
                  {doc.subtitle}
                </p>
              )}
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
                <Calendar className="w-3.5 h-3.5" />
                {lang === 'it' ? 'Ultimo aggiornamento:' : 'Last updated:'} {doc.lastUpdated}
              </div>
            </header>
          </Reveal>

          <div className="prose-legal space-y-12">
            {doc.sections.map((section, i) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="scroll-mt-32"
              >
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-text-primary">
                  <span className="text-gradient">{section.heading}</span>
                </h2>
                <ProseBody body={section.body} />
              </motion.section>
            ))}
          </div>

          {/* Mobile-only doc switcher at bottom */}
          <div className="lg:hidden mt-16 pt-8 border-t border-line">
            <LegalSidebar />
          </div>
        </article>

        {/* Right — section TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <p className="px-3 mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              {lang === 'it' ? 'In questa pagina' : 'On this page'}
            </p>
            <nav className="space-y-1">
              {doc.sections.map((section) => {
                const active = activeSection === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={cn(
                      'block px-3 py-1.5 rounded-md text-xs transition-all border-l-2',
                      active
                        ? 'text-brand-cyan border-brand-cyan bg-brand-cyan/5'
                        : 'text-text-muted border-transparent hover:text-text-secondary hover:border-line-strong',
                    )}
                  >
                    {section.heading}
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ProseBody({ body }: { body: string }) {
  // Render paragraphs and bullet lists from the lightweight markdown-ish format
  const blocks = body.split(/\n\n+/);
  return (
    <div className="space-y-4 text-text-secondary leading-relaxed text-[15px] md:text-base">
      {blocks.map((block, i) => {
        const lines = block.split('\n');
        const isList = lines.every((l) => l.trim().startsWith('•'));
        if (isList) {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {lines.map((line, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="text-brand-cyan mt-1.5 flex-shrink-0">▸</span>
                  <span>{line.replace(/^•\s*/, '')}</span>
                </li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}

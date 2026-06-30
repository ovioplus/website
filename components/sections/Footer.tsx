'use client';

import { Logo } from '@/components/ui/Logo';
import { SITE } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const productLinks: Array<[string, string]> = [
    [t.nav.features, '/#features'],
    [t.nav.how, '/#how'],
    [t.nav.pricing, '/#pricing'],
    [t.nav.faq, '/#faq'],
    [t.nav.bookDemo, '/#contact'],
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t border-line bg-white/40">
      <div className="container-page">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Logo variant="icon" size={48} />
            <p className="mt-6 max-w-xs text-text-secondary leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted mb-4">
              {t.footer.product}
            </h4>
            <ul className="space-y-3">
              {productLinks.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted mb-4">
              {t.footer.company}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="text-sm text-text-secondary">Parma · Italia</li>
              <li className="text-sm text-text-secondary">{t.footer.madeIn}</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
            <a href="/legal/privacy" className="hover:text-text-primary transition-colors">{t.footer.privacy}</a>
            <a href="/legal/terms" className="hover:text-text-primary transition-colors">{t.footer.terms}</a>
            <a href="/legal/cookies" className="hover:text-text-primary transition-colors">Cookies</a>
            <a href="/legal/dpa" className="hover:text-text-primary transition-colors">DPA</a>
            <a href="/legal/nda" className="hover:text-text-primary transition-colors">NDA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

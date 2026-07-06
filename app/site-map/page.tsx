'use client';

import { motion } from 'framer-motion';
import {
  Home,
  Sparkles,
  Workflow,
  Tag,
  HelpCircle,
  MessageSquare,
  Info,
  Handshake,
  BookOpen,
  Shield,
  FileText,
  Cookie,
  Lock,
  Key,
  ArrowRight,
} from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PageShell } from '@/components/sections/PageShell';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FEATURES } from '@/lib/config';

export default function SitemapPage() {
  const { t } = useLanguage();
  const p = t.pages.sitemap;

  const sections = [
    {
      title: p.sections.main,
      links: [
        { icon: Home, label: 'Home', href: '/', desc: 'Overview + hero + product', show: true },
        { icon: Sparkles, label: t.nav.features, href: '/#features', desc: '3 channels: web · chat · voice', show: true },
        { icon: Workflow, label: t.nav.how, href: '/#how', desc: '5-step booking flow', show: true },
        { icon: Tag, label: t.nav.pricing, href: '/#pricing', desc: 'Starter · Pro · Scale plans', show: FEATURES.showPricing },
        { icon: HelpCircle, label: t.nav.faq, href: '/#faq', desc: 'Common questions', show: true },
        { icon: MessageSquare, label: t.nav.bookDemo, href: '/#contact', desc: 'Talk to us — no commitment', show: true },
      ].filter((l) => l.show),
    },
    {
      title: p.sections.company,
      links: [
        { icon: Info, label: t.footer.companyLinks.about, href: '/about', desc: 'Mission · values · team' },
        { icon: BookOpen, label: t.footer.companyLinks.blog, href: '/blog', desc: 'Product & industry updates' },
        { icon: Handshake, label: t.footer.companyLinks.partnerships, href: '/partnerships', desc: 'Build with us — software, POS, agencies' },
        { icon: MessageSquare, label: t.footer.companyLinks.contact, href: '/contact', desc: 'All ways to reach us' },
      ],
    },
    {
      title: p.sections.legal,
      links: [
        { icon: Shield, label: t.footer.legalLinks.privacy, href: '/legal/privacy', desc: 'How we handle your data' },
        { icon: FileText, label: t.footer.legalLinks.terms, href: '/legal/terms', desc: 'Terms of service' },
        { icon: Cookie, label: t.footer.legalLinks.cookies, href: '/legal/cookies', desc: 'Cookie usage policy' },
        { icon: Lock, label: t.footer.legalLinks.dpa, href: '/legal/dpa', desc: 'GDPR Art. 28 agreement' },
        { icon: Key, label: t.footer.legalLinks.nda, href: '/legal/nda', desc: 'Non-disclosure agreement' },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
          <div className="space-y-14">
            {sections.map((section, si) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: si * 0.08 }}
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan mb-5">
                  {section.title}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {section.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        className="group flex items-start gap-4 rounded-2xl bg-white border border-line p-5 shadow-sm shadow-slate-900/5 hover:border-brand-cyan/40 hover:shadow-md transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-brand-cyan" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-semibold text-text-primary text-sm">
                              {link.label}
                            </span>
                            <ArrowRight className="w-3 h-3 text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          </div>
                          <div className="text-xs text-text-secondary leading-relaxed">
                            {link.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </motion.section>
            ))}
          </div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}

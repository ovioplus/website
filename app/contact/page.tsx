'use client';

import { motion } from 'framer-motion';
import { Calendar, Mail, Phone, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PageShell } from '@/components/sections/PageShell';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const OFFICE_PHONE = '+39 3517372436';
const OFFICE_EMAIL = 'contact@ovioplus.com';

const methodIcons = [Calendar, Mail, Phone];

export default function ContactPage() {
  const { t } = useLanguage();
  const p = t.pages.contact;

  const methods = [
    { key: 'demo', ...p.methods.demo, href: '/#contact' },
    { key: 'email', ...p.methods.email, href: `mailto:${OFFICE_EMAIL}` },
    { key: 'call', ...p.methods.call, href: `tel:${OFFICE_PHONE.replace(/\s/g, '')}` },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
          <div className="grid md:grid-cols-3 gap-5">
            {methods.map((m, i) => {
              const Icon = methodIcons[i];
              return (
                <motion.a
                  key={m.key}
                  href={m.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-3xl bg-white border border-line p-8 shadow-sm shadow-slate-900/5 hover:border-brand-cyan/40 hover:shadow-lg hover:shadow-brand-cyan/10 transition-all flex flex-col"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-text-primary mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">{m.body}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan group-hover:gap-2.5 transition-all">
                    {m.cta}
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Small contact info block — centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 pt-10 border-t border-line grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-2">
                Email
              </div>
              <a href={`mailto:${OFFICE_EMAIL}`} className="text-text-primary hover:text-brand-cyan transition-colors">
                {OFFICE_EMAIL}
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-2">
                Phone
              </div>
              <a href={`tel:${OFFICE_PHONE.replace(/\s/g, '')}`} className="text-text-primary hover:text-brand-cyan transition-colors">
                {OFFICE_PHONE}
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted mb-2">
                Office
              </div>
              <div className="text-text-primary">Parma · Italia</div>
            </div>
          </motion.div>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}

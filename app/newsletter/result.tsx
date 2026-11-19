'use client';

import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PageShell } from '@/components/sections/PageShell';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function NewsletterResult({ confirmed }: { confirmed: boolean }) {
  const { lang } = useLanguage();
  const it = lang === 'it';
  const copy = confirmed
    ? {
        title: it ? 'Iscrizione confermata' : 'Subscription confirmed',
        body: it
          ? 'Grazie! Riceverai la newsletter di OvioPlus. Puoi disiscriverti in qualsiasi momento dal link in fondo a ogni email.'
          : 'Thanks! You will receive the OvioPlus newsletter. You can unsubscribe any time from the link at the bottom of every email.',
      }
    : {
        title: it ? 'Link non valido o scaduto' : 'Link invalid or expired',
        body: it
          ? 'Il link di conferma non funziona più (dura 7 giorni). Iscriviti di nuovo dal fondo della pagina e ti mandiamo un link nuovo.'
          : 'This confirmation link no longer works (links last 7 days). Sign up again at the bottom of the page and we will send a new one.',
      };
  return (
    <>
      <Navbar />
      <main>
        <PageShell eyebrow="Newsletter" title={copy.title} subtitle={copy.body}>
          <Link href="/" className="btn-primary">
            {it ? 'Torna al sito' : 'Back to the site'}
          </Link>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}

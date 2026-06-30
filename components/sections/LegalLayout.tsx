import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

type LegalLayoutProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-32 md:pt-40 pb-20">
        <article className="container-page max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan">
            Legal
          </span>
          <h1 className="mt-4 font-display text-display-lg font-semibold">{title}</h1>
          <p className="mt-3 text-sm text-text-muted font-mono">Last updated: {updated}</p>
          <div className="mt-12 prose-legal">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}

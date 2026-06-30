'use client';

import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function CTA() {
  return (
    <section id="cta" className="relative py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <div className="relative rounded-[2rem] border border-line-strong bg-brand-surface-2 p-10 md:p-16 text-center">

            <div className="relative">
              <h2 className="font-display text-display-lg font-semibold text-balance">
                Let&apos;s fill <br />
                <span className="text-brand-cyan-light italic">your tables.</span>
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-lg text-text-secondary leading-relaxed">
                30-minute demo. No commitment. See the AI take a real call,
                and decide if OvioPlus belongs in your restaurant.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:hello@ovioplus.com?subject=Demo%20request"
                  className="btn-primary group"
                >
                  Book a demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="mailto:hello@ovioplus.com" className="btn-ghost">
                  hello@ovioplus.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

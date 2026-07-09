'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { getConsent, type ConsentState } from '@/components/ui/CookieBanner';

/**
 * Consent-gated Google Analytics.
 * GA only loads after the user grants analytics consent via the cookie banner.
 * Re-evaluates when consent changes (e.g., user opens "Cookie settings" and flips analytics).
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const evaluate = () => {
      const consent = getConsent();
      setEnabled(!!consent?.analytics);
    };

    evaluate();

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<ConsentState>).detail;
      setEnabled(!!detail?.analytics);
    };

    window.addEventListener('cookie-consent-changed', onChange);
    return () => window.removeEventListener('cookie-consent-changed', onChange);
  }, []);

  if (!GA_ID || !enabled) return null;
  return <GoogleAnalytics gaId={GA_ID} />;
}

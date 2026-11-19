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

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Delete GA's `_ga` / `_ga_<id>` cookies on this host and its parent domain. */
function clearGaCookies() {
  const host = window.location.hostname;
  const domains = ['', host, `.${host.replace(/^www\./, '')}`];
  for (const c of document.cookie.split(';')) {
    const name = c.split('=')[0]?.trim();
    if (!name || !name.startsWith('_ga')) continue;
    for (const d of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ''}`;
    }
  }
}

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
      if (!detail?.analytics && window.gtag) {
        // Consent withdrawn after GA loaded. Unmounting the component does not
        // unload the library (it keeps sending page views on in-site
        // navigation), so: tell GA consent is denied, delete its cookies, and
        // reload so the script is gone.
        window.gtag('consent', 'update', { analytics_storage: 'denied' });
        clearGaCookies();
        window.location.reload();
        return;
      }
      setEnabled(!!detail?.analytics);
    };

    window.addEventListener('cookie-consent-changed', onChange);
    return () => window.removeEventListener('cookie-consent-changed', onChange);
  }, []);

  if (!GA_ID || !enabled) return null;
  return <GoogleAnalytics gaId={GA_ID} />;
}

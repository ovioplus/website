'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings, X, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { cn } from '@/lib/utils';

/* ─────────────────────────────────────────────────────────────
   Cookie consent — GDPR compliant.
   - Shows banner on first visit
   - Choice stored in localStorage
   - Emits `cookie-consent-changed` event so integrations can react
   - "Cookie settings" link (in footer) re-opens the modal
   ───────────────────────────────────────────────────────────── */

const STORAGE_KEY = 'ovioplus-cookie-consent';
const CONSENT_VERSION = 1; // bump this to re-prompt everyone (e.g., policy change)

export type ConsentState = {
  necessary: true; // always true
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
  version: number;
};

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: 0,
  version: CONSENT_VERSION,
};

function readConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: consent }));
}

export function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    // Show banner if no valid consent stored yet
    const existing = readConsent();
    if (!existing) {
      // Small delay so it doesn't flash on first paint
      const timer = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(timer);
    } else {
      setPrefs({ analytics: existing.analytics, marketing: existing.marketing });
    }
  }, []);

  useEffect(() => {
    // Listen for the footer "Cookie settings" link
    const onReopen = () => {
      const existing = readConsent();
      if (existing) setPrefs({ analytics: existing.analytics, marketing: existing.marketing });
      setModalOpen(true);
    };
    window.addEventListener('open-cookie-preferences', onReopen);
    return () => window.removeEventListener('open-cookie-preferences', onReopen);
  }, []);

  // Lock body scroll while banner or modal is showing
  useEffect(() => {
    if (visible || modalOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [visible, modalOpen]);

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true, timestamp: Date.now(), version: CONSENT_VERSION });
    setVisible(false);
    setModalOpen(false);
  };

  const rejectAll = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false, timestamp: Date.now(), version: CONSENT_VERSION });
    setVisible(false);
    setModalOpen(false);
  };

  const savePrefs = () => {
    saveConsent({
      necessary: true,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    });
    setVisible(false);
    setModalOpen(false);
  };

  return (
    <>
      {/* ── Compact centered card (locks scroll) ─────────── */}
      <AnimatePresence>
        {visible && !modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-banner-title"
            aria-describedby="cookie-banner-desc"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />

            {/* Square centered card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl shadow-slate-900/25 border border-line p-7 md:p-8"
            >
              {/* Icon + title side by side */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-brand-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-brand-cyan" />
                </div>
                <h3
                  id="cookie-banner-title"
                  className="font-display text-2xl font-semibold text-text-primary"
                >
                  {t.cookies.title}
                </h3>
              </div>

              <p
                id="cookie-banner-desc"
                className="text-sm text-text-secondary leading-relaxed mb-6"
              >
                {t.cookies.body}{' '}
                <a href="/legal/cookies" className="text-brand-cyan hover:underline font-medium">
                  {t.cookies.readMore} →
                </a>
              </p>

              {/* Actions */}
              <div className="space-y-2">
                <button
                  onClick={acceptAll}
                  className="w-full text-sm font-semibold text-white bg-brand-cyan hover:bg-brand-cyan-dark px-5 py-3 rounded-full shadow-md shadow-brand-cyan/30 transition-all"
                >
                  {t.cookies.acceptAll}
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={rejectAll}
                    className="text-sm font-semibold text-text-primary bg-slate-100 hover:bg-slate-200 px-3 py-3 rounded-full transition-colors"
                  >
                    {t.cookies.rejectAll}
                  </button>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-3 rounded-full border border-line hover:border-line-strong bg-white transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    {t.cookies.manage}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Preferences modal ────────────────────────────────── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            {/* Overlay */}
            <div
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-line overflow-hidden max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-line flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-text-primary">
                      {t.cookies.title}
                    </h2>
                    <p className="text-xs text-text-muted mt-0.5">
                      <a href="/legal/cookies" className="hover:text-brand-cyan underline underline-offset-2">
                        {t.cookies.readMore}
                      </a>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-text-muted"
                  aria-label={t.cookies.close}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Categories */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <CategoryRow
                  name={t.cookies.categories.necessary.name}
                  desc={t.cookies.categories.necessary.desc}
                  checked={true}
                  locked
                  onChange={() => {}}
                />
                <CategoryRow
                  name={t.cookies.categories.analytics.name}
                  desc={t.cookies.categories.analytics.desc}
                  checked={prefs.analytics}
                  onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                />
                <CategoryRow
                  name={t.cookies.categories.marketing.name}
                  desc={t.cookies.categories.marketing.desc}
                  checked={prefs.marketing}
                  onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
                />
              </div>

              {/* Actions */}
              <div className="p-6 border-t border-line grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  onClick={rejectAll}
                  className="text-sm font-medium text-text-secondary bg-slate-100 hover:bg-slate-200 py-2.5 rounded-full transition-colors"
                >
                  {t.cookies.rejectAll}
                </button>
                <button
                  onClick={savePrefs}
                  className="text-sm font-semibold text-text-primary bg-white border border-line-strong hover:border-brand-cyan/50 py-2.5 rounded-full transition-colors"
                >
                  {t.cookies.save}
                </button>
                <button
                  onClick={acceptAll}
                  className="text-sm font-semibold text-white bg-brand-cyan hover:bg-brand-cyan-dark py-2.5 rounded-full transition-colors"
                >
                  {t.cookies.acceptAll}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CategoryRow({
  name,
  desc,
  checked,
  locked = false,
  onChange,
}: {
  name: string;
  desc: string;
  checked: boolean;
  locked?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-line p-4',
        locked ? 'bg-slate-50' : 'bg-white',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-text-primary">{name}</span>
            {locked && (
              <span className="text-[9px] font-mono uppercase tracking-wider text-text-muted bg-slate-200 px-2 py-0.5 rounded-full">
                required
              </span>
            )}
          </div>
          <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">{desc}</p>
        </div>

        {/* Toggle */}
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={locked}
          onClick={() => !locked && onChange(!checked)}
          className={cn(
            'relative flex-shrink-0 w-10 h-6 rounded-full transition-colors',
            checked ? 'bg-brand-cyan' : 'bg-slate-300',
            locked && 'opacity-70 cursor-not-allowed',
          )}
        >
          <motion.span
            layout
            transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            className={cn(
              'absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm flex items-center justify-center',
              checked ? 'right-0.5' : 'left-0.5',
            )}
          >
            {checked && <Check className="w-3 h-3 text-brand-cyan" strokeWidth={3} />}
          </motion.span>
        </button>
      </div>
    </div>
  );
}

/**
 * Utility: check current consent from anywhere.
 * Use like: if (getConsent()?.analytics) { loadGoogleAnalytics(); }
 */
export function getConsent(): ConsentState | null {
  return readConsent();
}

/**
 * Utility: open the preferences modal from anywhere (e.g., footer link).
 */
export function openCookiePreferences() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
  }
}

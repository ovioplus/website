/**
 * Site-wide constants.
 *
 * Copy does NOT live here. When the site was internationalised, every piece of
 * user-facing text moved to `lib/i18n/translations.ts` (EN + IT), which is what
 * the components actually render. This file kept stale duplicates of the nav,
 * channels, steps, features, pricing, FAQ and testimonials long after nothing
 * imported them — and the dead pricing copy had drifted to voice-minute
 * allowances the app no longer grants, which is exactly the kind of thing
 * someone later reads and believes. Removed.
 *
 * Plan pricing and allowances shown to customers must match
 * `ovioplus-platform/src/features/billing/plans.ts`, which is what's actually
 * enforced. Edit the numbers in `translations.ts` (both locales).
 */
export const SITE = {
  name: 'OvioPlus',
  domain: 'ovioplus.ai',
  url: 'https://ovioplus.ai',
  email: 'contact@ovioplus.com',
  tagline: 'Your AI Receptionist',
  description:
    'OvioPlus answers every phone call, chat, and web booking, 24 hours a day. Built for restaurants who never want to miss a reservation again.',
} as const;

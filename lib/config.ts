/**
 * Site-wide feature flags.
 * Flip these to show/hide sections without touching component code.
 */
export const FEATURES = {
  showClients: true, // client logo carousel — turn on once you have real partners
  showPricing: true, // pricing tier cards
  showTestimonials: true, // customer quotes
  showHero3D: true, // 3D dashboard preview in hero
} as const;

export type FeatureFlag = keyof typeof FEATURES;

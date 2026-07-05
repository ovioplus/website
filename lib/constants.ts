export const SITE = {
  name: 'OvioPlus',
  domain: 'ovioplus.ai',
  url: 'https://ovioplus.ai',
  email: 'contact@ovioplus.com',
  tagline: 'Your AI Receptionist',
  description:
    'OvioPlus answers every phone call, chat, and web booking — 24 hours a day. Built for restaurants who never want to miss a reservation again.',
} as const;

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const CHANNELS = [
  {
    title: 'Visual Booking',
    eyebrow: 'Web',
    description:
      "Customers see your actual floor plan and pick their exact table — like choosing a seat on a flight, but for dinner.",
    accent: 'purple',
  },
  {
    title: 'AI Chat',
    eyebrow: 'Embed',
    description:
      "Drop a widget on your site. Customers type 'a table for 4 tomorrow at 8' — the AI handles the rest, in Italian or English.",
    accent: 'cyan',
  },
  {
    title: 'AI Voice',
    eyebrow: 'Phone',
    description:
      "Keep your existing number. Forward calls to our AI — it answers in a natural voice, books the table, sends confirmation.",
    accent: 'amber',
  },
] as const;

export const STEPS = [
  { n: '01', title: 'Customer reaches out', body: 'Phone, chat, or web form.' },
  { n: '02', title: 'AI collects details', body: 'Date, time, guests, name, email, phone.' },
  { n: '03', title: 'Availability checked', body: 'Live table inventory — never overbooks.' },
  { n: '04', title: 'Reservation created', body: 'Saved in your dashboard instantly.' },
  { n: '05', title: 'Confirmation sent', body: 'Customer + owner notified by email.' },
] as const;

export const FEATURES = [
  { title: 'Live calendar', body: 'Day, week, month — click any date to see who is coming.' },
  { title: 'Table management', body: 'Add, edit, mark occupied. AI respects your seating plan.' },
  { title: 'Operating hours', body: 'Per-day open / close. Holidays and special closures.' },
  { title: 'Auto-confirm rules', body: 'Approve manually or set rules — AI handles the routine.' },
  { title: 'Reservation history', body: 'Search by name, phone, date. Recognize your regulars.' },
  { title: 'Daily summary email', body: "Every morning: today's load, tomorrow's preview." },
] as const;

export const PRICING = [
  {
    name: 'Starter',
    price: '€99',
    period: '/ month',
    description: 'Web booking + AI text chat. Perfect for small restaurants.',
    features: [
      'Web booking page',
      'AI text chat (IT + EN)',
      'Email confirmations',
      'Admin dashboard',
      'Calendar view',
      'Unlimited reservations',
      'Email support',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    price: '€249',
    period: '/ month',
    description: 'Adds the AI voice receptionist. Most popular.',
    features: [
      'Everything in Starter',
      'AI voice receptionist',
      'Works with your existing number',
      '300 voice minutes included',
      'Operating hours management',
      'Priority email support',
      'Overage: €0.40 / extra minute',
    ],
    featured: true,
  },
  {
    name: 'Scale',
    price: '€499',
    period: '/ month',
    description: 'For busy restaurants — high call volume.',
    features: [
      'Everything in Pro',
      '1,500 voice minutes included',
      'Multi-channel routing rules',
      'Custom IVR menu',
      'Advanced analytics',
      'Dedicated onboarding',
      'Overage: €0.35 / extra minute',
    ],
    featured: false,
  },
] as const;

export const FAQ = [
  {
    q: 'Do I need to change my phone number?',
    a: 'No. You keep your existing number. Set up call-forwarding (always-on, after-hours, or only-on-no-answer) to our routing endpoint. Customers see no change — they still call your familiar number.',
  },
  {
    q: 'What languages does the AI speak?',
    a: 'Italian and English at launch. The AI detects the caller language automatically and responds in their language.',
  },
  {
    q: 'How do you handle data privacy and GDPR?',
    a: 'All data is hosted in the EU (Frankfurt). We sign a Data Processing Agreement with every restaurant. Customers can request data deletion at any time.',
  },
  {
    q: 'What happens if the AI cannot handle a call?',
    a: 'Our IVR menu has an option to reach a human (your staff). Calls can also fall back to your existing phone after a customizable timeout.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No lock-in contracts. Monthly billing. Export all your data with one click.',
  },
  {
    q: 'How fast can I go live?',
    a: 'Typical onboarding is 5 days. Day 1 discovery, Day 2 setup, Day 3 AI training, Day 4 pilot test, Day 5 go live.',
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "OvioPlus answered 847 calls last month. We didn't miss a single booking — and our team finally has time to focus on the actual dining experience.",
    name: 'Marco Rinaldi',
    role: 'Owner · Trattoria San Marco, Parma',
  },
  {
    quote:
      "The AI books tables in Italian like a real maître d'. Our regulars don't even realize they are talking to a machine. Worth every euro.",
    name: 'Elena Ferraro',
    role: 'Manager · Osteria del Borgo, Torino',
  },
  {
    quote:
      'We were missing 30% of dinner-service calls. After OvioPlus that number is zero. We pay €249 and get more than a full-time hire.',
    name: 'Giuseppe Lazzaro',
    role: 'Owner · Vino e Cucina, Roma',
  },
] as const;

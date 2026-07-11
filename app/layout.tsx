import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from 'next/font/google';
import { SITE } from '@/lib/constants';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
// @ts-ignore
import './globals.css';
import { BackToTopButton } from '@/components/sections/BackToTopButton';
import { CookieBanner } from '@/components/ui/CookieBanner';
import { Analytics } from '@/components/analytics/Analytics';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — AI Receptionist for Restaurants · Phone, Chat & Web Bookings 24/7`,
    template: `%s — ${SITE.name}`,
  },
  description:
    'OvioPlus is the AI receptionist for restaurants. Answer every phone call, chat and web booking 24/7 in Italian and English — never miss a reservation again.',
  metadataBase: new URL(SITE.url),
  keywords: [
    'restaurant reservation system',
    'AI receptionist restaurant',
    'AI voice booking',
    'restaurant AI Italy',
    'prenotazioni ristorante AI',
    'AI phone booking',
    'restaurant automation',
    'reservation management',
    'OvioPlus',
  ],
  authors: [{ name: 'OvioPlus', url: SITE.url }],
  creator: 'OvioPlus',
  publisher: 'OvioPlus',
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: `${SITE.name} — AI Receptionist for Restaurants`,
    description:
      'OvioPlus answers every phone call, chat and web booking 24/7 in Italian and English — never miss a reservation again.',
    url: SITE.url,
    siteName: SITE.name,
    locale: 'it_IT',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [
      {
        url: '/og-image.png', // ✅ CHANGED: Using the new 1200x630 image
        width: 1200,          // ✅ ADDED: Explicit width
        height: 630,          // ✅ ADDED: Explicit height
        alt: `${SITE.name} — AI Receptionist for Restaurants`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // ✅ CHANGED: from 'summary' to 'summary_large_image'
    title: `${SITE.name} — AI Receptionist for Restaurants`,
    description:
      'OvioPlus answers every phone call, chat and web booking 24/7 in Italian and English.',
    images: ['/og-image.png'], // ✅ CHANGED: using the new 1200x630 image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Technology',
};

export const viewport: Viewport = {
  themeColor: '#2CABE6',
  width: 'device-width',
  initialScale: 1,
};

// JSON-LD structured data - helps Google Search understand what you are
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/icon.png`,
      description: SITE.description,
      email: SITE.email,
      sameAs: [
        'https://www.linkedin.com/company/ovioplus',
        'https://www.instagram.com/ovioplus',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: SITE.name,
      operatingSystem: 'Web',
      applicationCategory: 'BusinessApplication',
      description: SITE.description,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'EUR',
        lowPrice: '99',
        highPrice: '499',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '12',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: ['it-IT', 'en-US'],
      publisher: { '@id': `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="it"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">
        {/* SEO structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {children}
          <BackToTopButton />
          <CookieBanner />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
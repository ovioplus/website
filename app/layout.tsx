import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from 'next/font/google';
import { SITE } from '@/lib/constants';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
// @ts-ignore
import './globals.css';
import { BackToTopButton } from '@/components/sections/BackToTopButton';
import { CookieBanner } from '@/components/ui/CookieBanner';

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
    default: `${SITE.name} - ${SITE.tagline}`,
    template: `%s - ${SITE.name}`,
  },
  description: SITE.description,
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
    languages: {
      'en-US': `${SITE.url}?lang=en`,
      'it-IT': `${SITE.url}?lang=it`,
    },
  },
  openGraph: {
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'it_IT',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: `${SITE.name} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
    images: ['/icon.png'],
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
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    apple: '/icon.png',
    shortcut: '/icon.png',
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
        'https://linkedin.com/company/ovioplus',
        'https://twitter.com/ovioplus',
        'https://instagram.com/ovioplus',
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
      lang="en"
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
      </body>
    </html>
  );
}
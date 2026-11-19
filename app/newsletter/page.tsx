import type { Metadata } from 'next';
import { NewsletterResult } from './result';

export const metadata: Metadata = {
  title: 'Newsletter',
  robots: { index: false, follow: false },
};

/** Where the confirmation link in the newsletter email lands. */
export default async function NewsletterPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  return <NewsletterResult confirmed={status === 'confirmed'} />;
}

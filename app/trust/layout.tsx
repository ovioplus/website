import type { ReactNode } from 'react';

export const metadata = {
  title: 'AI Trust & Compliance',
  description:
    'How OvioPlus approaches AI transparency, privacy and security: EU AI Act Article 50 disclosure, GDPR data protection, published retention periods and named sub-processors.',
};

export default function TrustLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safepay Africa | FAQ',
  description: 'Kayi App Frequently asked questions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

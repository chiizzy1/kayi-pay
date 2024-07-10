import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safepay Africa | Terms & Conditions',
  description: 'Terms and Conditions for Kayi App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

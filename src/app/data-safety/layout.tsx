import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safepay Africa | Data Safety Policy',
  description: 'Data Safety policy for Kayi App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

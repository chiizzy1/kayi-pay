import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safepay Africa | Account Deletion',
  description: ' Account deletion terms for Kayi App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

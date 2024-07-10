import '@/app/globals.css';
// import "@/app/globals.scss";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safepay Africa | Privacy Policy',
  description: 'Privacy policy for Kayi App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

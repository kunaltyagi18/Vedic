import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VGFC Trust | A brighter Bharat, together',
  description: 'Vedic Global Foundation Charitable Trust – empowering communities through education, healthcare and sustainable development.',
  openGraph: {
    title: 'VGFC Trust | A brighter Bharat, together',
    description: 'Together for a healthy, educated and empowered Bharat.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}


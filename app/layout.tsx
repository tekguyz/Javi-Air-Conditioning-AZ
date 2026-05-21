import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/shared/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Javi Air Conditioning | 5.0 Star Honest HVAC Gilbert & Mesa AZ',
  description: '13+ years of trusted residential & commercial air conditioning repair, installation, and honest diagnostics in Gilbert, Mesa, Chandler & Tempe. No sales speeches.',
  openGraph: {
    title: 'Javi Air Conditioning | 5.0 Star Honest HVAC Gilbert & Mesa AZ',
    description: '13+ years of trusted residential & commercial air conditioning repair, installation, and honest diagnostics in Gilbert, Mesa, Chandler & Tempe. No sales speeches.',
    url: 'https://javiairconditioning.com',
    siteName: 'Javi Air Conditioning',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Javi Air Conditioning LLC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}


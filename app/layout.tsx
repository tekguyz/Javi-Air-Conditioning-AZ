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
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='46' fill='%230f172a' stroke='%230ea5e9' stroke-width='6'/%3E%3Cpath d='M50 20 L50 80 M20 50 L80 50 M29 29 L71 71 M29 71 L71 29' stroke='%2338bdf8' stroke-width='8' stroke-linecap='round'/%3E%3C/svg%3E",
        type: 'image/svg+xml',
      },
    ],
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


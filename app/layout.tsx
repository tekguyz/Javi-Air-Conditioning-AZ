import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/shared/LanguageContext';
import { BIZ_DATA } from '@/shared/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

const computedTitle = 'Javi Air Conditioning | 5.0 Star Honest HVAC Gilbert & Mesa AZ';
const computedDescription = '13+ Years of trusted residential & commercial air conditioning repair, unit installation, and honest diagnostics across Gilbert, Mesa, Chandler & Tempe. Absolutely zero exaggerated sales speeches.';

export const metadata: Metadata = {
  title: computedTitle,
  description: computedDescription,
  keywords: [
    'Javi Air Conditioning',
    'Javi Air',
    'AC repair Gilbert AZ',
    'Mesa air conditioning repair',
    'commercial HVAC Gilbert',
    'honest AC technician Phoenix East Valley',
    'ROC #332451',
  ],
  openGraph: {
    title: computedTitle,
    description: computedDescription,
    url: '/',
    siteName: 'Javi Air Conditioning',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: computedTitle,
    description: computedDescription,
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


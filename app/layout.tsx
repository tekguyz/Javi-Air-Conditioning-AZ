import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/shared/LanguageContext';
import { BIZ_DATA } from '@/shared/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

const computedTitle = `${BIZ_DATA.displayName} | ${BIZ_DATA.rating} Star Honest HVAC Gilbert & Mesa AZ`;
const computedDescription = `${BIZ_DATA.experience} of trusted residential & commercial air conditioning repair, unit installation, and honest diagnostics across Gilbert, Mesa, Chandler & Tempe. Absolutely zero exaggerated sales speeches.`;

export const metadata: Metadata = {
  title: computedTitle,
  description: computedDescription,
  keywords: [
    BIZ_DATA.displayName,
    'AC repair Gilbert AZ',
    'Mesa air conditioning repair',
    'commercial HVAC Gilbert',
    'honest AC technician Phoenix East Valley',
    BIZ_DATA.license,
  ],
  openGraph: {
    title: computedTitle,
    description: computedDescription,
    url: '/',
    siteName: BIZ_DATA.displayName,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: BIZ_DATA.legalName,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: computedTitle,
    description: computedDescription,
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
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


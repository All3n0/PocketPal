import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Adjust path based on your structure

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pocketpal.vercel.app'),
  title: {
    default: 'Pocket Pal - Make Saving Simple, Social & Achievable',
    template: '%s | Pocket Pal'
  },
  description: 'Africa\'s most trusted collaborative savings ecosystem. Save money with friends, build financial discipline, and achieve your goals together.',
  keywords: ['savings app', 'group savings', 'financial literacy', 'Africa', 'students', 'money management', 'collaborative savings'],
  authors: [{ name: 'Pocket Pal Team' }],
  creator: 'Pocket Pal',
  publisher: 'Pocket Pal',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pocketpal.vercel.app',
    siteName: 'Pocket Pal',
    title: 'Pocket Pal - Make Saving Simple, Social & Achievable',
    description: 'Africa\'s most trusted collaborative savings ecosystem. Save money with friends, build financial discipline.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pocket Pal - Social Savings for Africa',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Pal - Make Saving Simple, Social & Achievable',
    description: 'Africa\'s most trusted collaborative savings ecosystem.',
    images: ['/twitter-image.png'],
    creator: '@pocketpal',
    site: '@pocketpal',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://pocketpal.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* You can add additional head elements here if needed */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
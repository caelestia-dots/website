import React from 'react';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import localFont from 'next/font/local';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';

import './globals.scss';

// import { Theme } from 'shiki/textmate';

const rubik = Rubik({
  weight: ['400', '700'],
  variable: '--font-rubik',
});

const caskaydiaCove = localFont({
  src: './assets/CaskaydiaCove.ttf',
  variable: '--font-caskaydia-cove',
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.BASE_URL}`),
  title: {
    template: '%s — Caelestia',
    default: 'Caelestia — A very segsy rice',
  },
  description: 'A fluid, morphing interface to your Linux desktop',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    url: 'https://caelestiashell.com/',
    title: {
      template: '%s — Caelestia',
      default: 'Caelestia — A very segsy rice',
    },
    description: 'A fluid, morphing interface to your Linux desktop',
    images: [
      {
        url: '/default.jpg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${caskaydiaCove.variable} ${rubik.variable} antialiased`}>
        <ThemeProvider>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

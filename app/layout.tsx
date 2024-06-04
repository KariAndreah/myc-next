import '@mantine/core/styles.css';
import React from 'react';
import type { Viewport } from 'next';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import './globals.css';
import { ReactQueryProvider } from './ReactQueryProvider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata = {
  title: 'OpenMYC: NYC Comedy Open Mic Search',
  description:
    'Find New York City comedy open mics at OpenMyc. OpenMyc is a Search Engine for comedy open mics in Manhattan, Brooklyn, Bronx, Queens and Staten Island.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <ReactQueryProvider>
        <html lang="en">
          <head>
            <ColorSchemeScript />
            <link rel="apple-touch-icon" href="/icon.png" />

            <link rel="shortcut icon" href="/icon.png" />
            {/* <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            /> */}
            <script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
              crossOrigin="anonymous"
            />
            <script
              data-goatcounter={`https://${process.env.NEXT_PUBLIC_GOAT_COUNTER}.goatcounter.com/count`}
              async
              src="//gc.zgo.at/count.js"
            />
          </head>
          <body>
            <MantineProvider theme={theme}>{children}</MantineProvider>
          </body>
        </html>
      </ReactQueryProvider>
    </React.StrictMode>
  );
}

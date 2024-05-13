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
  title: 'Open MYC',
  description: 'I am using Mantine with Next.js!',
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
          </head>
          <body>
            <MantineProvider theme={theme}>{children}</MantineProvider>
          </body>
        </html>
      </ReactQueryProvider>
    </React.StrictMode>
  );
}

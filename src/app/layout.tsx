import type { Metadata } from 'next'
import './globals.css'
import { GTM_ID, SITE_URL } from '@/lib/site'
import { identityGraph } from '@/lib/structured-data'
import JsonLd from '@/components/JsonLd'
import Analytics from '@/components/Analytics'


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Joseph Deferio',
    template: '%s | Joseph Deferio',
  },
  description: 'Joseph Deferio - Lead Software Engineer at adMarketplace, co-founder of Caridi Concierge, and founder of Onça Labs.',
  keywords: ['joseph deferio', 'jdeferio', 'data engineering', 'software engineering', 'informatics', 'data science', 'research', 'mental health'],
  authors: [{ name: 'Joseph Deferio', url: SITE_URL }],
  creator: 'Joseph Deferio',
  publisher: 'Joseph Deferio',
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
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Joseph Deferio',
    title: 'Joseph Deferio',
    description: 'Joseph Deferio - Lead Software Engineer at adMarketplace, co-founder of Caridi Concierge, and founder of Onça Labs.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Joseph Deferio — Lead Software Engineer & Founder' }],
  },
  twitter: {
    images: ['/opengraph-image'],
    card: 'summary_large_image',
    title: 'Joseph Deferio',
    description: 'Joseph Deferio - Lead Software Engineer at adMarketplace, co-founder of Caridi Concierge, and founder of Onça Labs.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fonts are shared by every App Router page through this root layout. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <JsonLd data={identityGraph} />
      </head>
      <body className="antialiased">
        {children}
        <Analytics containerId={GTM_ID} />
      </body>
    </html>
  )
}

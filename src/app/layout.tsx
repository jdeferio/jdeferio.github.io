import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  metadataBase: new URL('https://jdeferio.github.io'),
  title: {
    default: 'Joseph Deferio',
    template: '%s | Joseph Deferio',
  },
  description: 'Joseph Deferio - Senior Software Engineer at adMarketplace, co-founder of Caridi Concierge, and founder of Onça Labs.',
  keywords: ['joseph deferio', 'jdeferio', 'data engineering', 'software engineering', 'informatics', 'data science', 'research', 'mental health'],
  authors: [{ name: 'Joseph Deferio', url: 'https://jdeferio.github.io' }],
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
    url: 'https://jdeferio.github.io',
    siteName: 'Joseph Deferio',
    title: 'Joseph Deferio',
    description: 'Joseph Deferio - Senior Software Engineer at adMarketplace, co-founder of Caridi Concierge, and founder of Onça Labs.',
    images: [
      {
        url: '/images/jdeferio.jpg',
        width: 200,
        height: 200,
        alt: 'Joseph Deferio',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Joseph Deferio',
    description: 'Joseph Deferio - Senior Software Engineer at adMarketplace, co-founder of Caridi Concierge, and founder of Onça Labs.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joseph Deferio",
    "url": "https://jdeferio.github.io",
    "image": "https://jdeferio.github.io/images/jdeferio.jpg",
    "jobTitle": "Senior Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "adMarketplace"
    },
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "SUNY Downstate Health Sciences University"
      },
      {
        "@type": "Organization", 
        "name": "George Washington University"
      }
    ],
    "sameAs": [
      "https://github.com/jdeferio",
      "https://linkedin.com/in/joseph-j-deferio"
    ],
    "knowsAbout": [
      "Data Engineering",
      "Software Engineering", 
      "Health Informatics",
      "Data Science",
      "Mental Health Research",
      "Clinical Research"
    ]
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fonts are shared by every App Router page through this root layout. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

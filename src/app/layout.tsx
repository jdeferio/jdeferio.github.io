import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jdeferio.github.io'),
  title: {
    default: 'Joseph Deferio',
    template: '%s | Joseph Deferio',
  },
  description: 'Joseph Deferio - Data Engineer and Researcher specializing in data engineering, software engineering, informatics, and data science.',
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
    description: 'Joseph Deferio - Data Engineer and Researcher specializing in data engineering, software engineering, informatics, and data science.',
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
    description: 'Joseph Deferio - Data Engineer and Researcher specializing in data engineering, software engineering, informatics, and data science.',
    creator: '@jdeferio',
  },
  verification: {
    google: 'google-site-verification-placeholder',
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
    "jobTitle": "Data Engineer",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
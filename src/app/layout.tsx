import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const SITE_URL = 'https://www.mineglow.al'
const SITE_NAME = 'Mine Glow'
const DESCRIPTION =
  'Mine Glow — çanta, portofola dhe aksesore të punuara me dorë nga perla. Art i vërtetë artizanal shqiptar nga Shkodra. Dhurata unike, cilësi e lartë.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Aksesore & Çanta me Perla — Shkodër`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'çanta perla',
    'aksesore perla',
    'mine glow',
    'portofol perla',
    'artizanat shqiptar',
    'Shkodër',
    'punime artizanale',
    'çanta të punuara me dorë',
    'handmade albania',
    'aksesore mode shqiperi',
    'dhurata artizanale',
    'dekorim me perla',
    'çanta unike',
    'craft shkoder',
    'bizhuteri artizanale',
  ],
  authors: [{ name: 'Mine Glow', url: SITE_URL }],
  creator: 'Mine Glow',
  publisher: 'Mine Glow',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sq_AL',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Aksesore & Çanta me Perla — Shkodër`,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Mine Glow — Çanta dhe Aksesore me Perla nga Shkodra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Aksesore & Çanta me Perla`,
    description: DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'VENDOS_KETU_GOOGLE_VERIFICATION_CODE',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Mine Glow',
      description:
        'Çanta, portofola dhe aksesore të punuara me dorë nga perla. Art artizanal shqiptar nga Shkodra.',
      url: SITE_URL,
      telephone: '+355-XX-XXX-XXXX',
      email: 'info@mineglow.al',
      image: `${SITE_URL}/og-image.jpg`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Shkodër',
        addressRegion: 'Shkodër',
        addressCountry: 'AL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '42.0683',
        longitude: '19.5126',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '10:00',
          closes: '15:00',
        },
      ],
      sameAs: [
        'https://www.instagram.com/minee_glow',
      ],
      priceRange: '$$',
      currenciesAccepted: 'ALL, EUR',
      paymentAccepted: 'Cash, Bank Transfer',
    },
    {
      '@type': 'OnlineStore',
      '@id': `${SITE_URL}/#store`,
      name: 'Mine Glow Online',
      url: SITE_URL,
      description:
        'Dyqan online aksesore artizanale: çanta, portofola dhe dekorime me perla të punuara me dorë.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Koleksioni Mine Glow',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Çanta me Perla',
            description: 'Çanta unike të punuara me dorë me perla natyrale dhe artificiale',
          },
          {
            '@type': 'OfferCatalog',
            name: 'Portofola Artizanale',
            description: 'Portofola elegante të punuara me perla dhe materiale cilësore',
          },
          {
            '@type': 'OfferCatalog',
            name: 'Aksesore & Bizhuteri',
            description: 'Byzylykë, vathë dhe aksesore të tjera me perla',
          },
          {
            '@type': 'OfferCatalog',
            name: 'Dekorime Shtëpie',
            description: 'Sende dekorative unike të punuara me perla për shtëpinë',
          },
          {
            '@type': 'OfferCatalog',
            name: 'Dhurata të Personalizuara',
            description: 'Punime artizanale të personalizuara për raste të veçanta',
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Mine Glow',
      description: DESCRIPTION,
      inLanguage: 'sq',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <ScrollReveal />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

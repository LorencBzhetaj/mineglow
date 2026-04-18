import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Strip from '@/components/Strip'
import Products from '@/components/Products'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Mine Glow | Çanta & Aksesorë me Perla të Punuara me Dorë | Shkodër',
  description:
    'Mine Glow – çanta, portofola dhe aksesorë unikë të punuara me dorë nga perla natyrale. Art artizanal shqiptar nga Shkodra. Porosit online.',
  keywords: [
    'çanta me perla', 'çanta handmade', 'aksesorë me perla',
    'bizhuteri me perla', 'çanta te punuara me dore', 'handmade bags albania',
    'pearl bags handmade', 'çanta unike', 'dhurata handmade',
    'bizhuteri handmade', 'çanta dasme', 'clutch me perla',
    'çanta nuse', 'aksesorë nuse', 'handmade accessories albania',
    'pearl accessories', 'mineglow', 'çanta artizanale',
    'punë dore shqiperi', 'çanta shkodër',
  ],
  alternates: { canonical: 'https://www.mineglow.art' },
  openGraph: {
    title: 'Mine Glow | Çanta & Aksesorë me Perla të Punuara me Dorë',
    description:
      'Çanta, portofola dhe aksesorë unikë të punuara me dorë nga perla natyrale. Art artizanal shqiptar nga Shkodra.',
    url: 'https://www.mineglow.art',
    siteName: 'Mine Glow',
    locale: 'sq_AL',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Mine Glow – Çanta me Perla' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mine Glow | Çanta & Aksesorë me Perla',
    description: 'Çanta dhe aksesorë unikë të punuara me dorë nga perla natyrale.',
    images: ['/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Strip />
      <Products />
      <Services />
      <About />
      <Contact />
    </>
  )
}

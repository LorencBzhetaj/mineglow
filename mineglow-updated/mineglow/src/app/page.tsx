import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Strip from '@/components/Strip'
import Products from '@/components/Products'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Mine Glow | Aksesore & Çanta me Perla — Shkodër, Shqipëri',
  description:
    'Mine Glow — çanta, portofola dhe aksesore të punuara me dorë nga perla. Art i vërtetë artizanal shqiptar nga Shkodra.',
  alternates: { canonical: 'https://www.mineglow.al' },
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

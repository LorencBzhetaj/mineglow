import type { Metadata } from 'next'
import ShopClient from './ShopClient'

export const metadata: Metadata = {
  title: 'Dyqani | Çanta & Aksesore me Perla',
  description:
    'Zbuloni koleksionin e plotë të Mine Glow — çanta, portofola, byzylykë, vathë dhe dekorime shtëpie të punuara me dorë nga perla në Shkodër.',
  alternates: { canonical: 'https://www.mineglow.al/shop' },
  openGraph: {
    title: 'Dyqani Mine Glow | Çanta & Aksesore me Perla',
    description:
      'Koleksion unik aksesore artizanale me perla. Çanta, portofola, bizhuteri dhe dekorime të punuara me dorë.',
    url: 'https://www.mineglow.al/shop',
    images: [{ url: 'https://www.mineglow.al/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ShopPage() {
  return (
    <>
      <div className="shop-hero">
        <p className="s-label-copper">Koleksioni ynë</p>
        <h1>
          Çdo Copë — <em>Unikale</em>
        </h1>
        <p>
          Aksesore të punuara me dorë nga perla natyrale dhe artificiale.
          Çdo produkt është krijim i veçantë artizanal nga Shkodra.
        </p>
      </div>
      <ShopClient />
    </>
  )
}

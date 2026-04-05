'use client'
import { useState } from 'react'
import Image from 'next/image'

const WHATSAPP = 'https://wa.me/355688631800'

const products = [
  {
    id: 1,
    name: 'Çantë me Perla të Zeza & Hark',
    desc: 'Çantë elegante me perla të zeza dhe dekorim harku sateni, ideale për mbrëmje.',
    price: '2,800 ALL',
    img: '/images/cat-canta.png',
    category: 'Çanta',
  },
  {
    id: 2,
    name: 'Portofol me Perla të Zeza',
    desc: 'Portofol i punuar me perla të zeza dhe kapëse magnetike të artë.',
    price: '1,800 ALL',
    img: '/images/cat-portofol.png',
    category: 'Portofola',
  },
  {
    id: 3,
    name: 'Byzylykë & Aksesore me Perla',
    desc: 'Byzylykë dhe aksesore të punuara me perla natyrale, unike për çdo rast.',
    price: '900 ALL',
    img: '/images/cat-byzylyk.png',
    category: 'Byzylykë',
  },
  {
    id: 4,
    name: 'Vathë & Bizhuteri Perla',
    desc: 'Vathë elegante dhe bizhuteri me perla të punuara me dorë.',
    price: '800 ALL',
    img: '/images/cat-vathe.png',
    category: 'Vathë',
  },
  {
    id: 5,
    name: 'Çantë Mini me Perla',
    desc: 'Çantë mini artizanale me perla, e dizajnuar me kujdes dhe stil.',
    price: '3,500 ALL',
    img: '/images/hero.png',
    category: 'Çanta',
  },
  {
    id: 6,
    name: 'Aksesore Flokësh me Perla',
    desc: 'Koleksion aksesore flokësh me perla — elegante dhe të punuara me dorë.',
    price: '1,200 ALL',
    img: '/images/cat-floke.png',
    category: 'Aksesore Flokësh',
  },
  {
    id: 7,
    name: 'Dekorime Shtëpie me Perla',
    desc: 'Sende dekorative unike për shtëpinë — tavë, pasqyra dhe zbukurime me perla.',
    price: '2,200 ALL',
    img: '/images/cat-dekorime.png',
    category: 'Dekorime',
  },
  {
    id: 8,
    name: 'Set Dhuratë — Çantë + Aksesore',
    desc: 'Set i plotë dhuratë me çantë dhe aksesore matching, i paketuar me kujdes.',
    price: '3,200 ALL',
    img: '/images/about-accent.png',
    category: 'Sets',
  },
]

const categories = ['Të gjitha', 'Çanta', 'Portofola', 'Byzylykë', 'Vathë', 'Aksesore Flokësh', 'Dekorime', 'Sets']

export default function ShopClient() {
  const [active, setActive] = useState('Të gjitha')

  const filtered = active === 'Të gjitha'
    ? products
    : products.filter((p) => p.category === active)

  return (
    <>
      {/* Category filter */}
      <nav
        aria-label="Kategorite e produkteve"
        style={{
          display: 'flex',
          gap: '0.8rem',
          flexWrap: 'wrap',
          padding: '2rem 5rem',
          background: 'var(--soft-white)',
          borderBottom: '1px solid var(--sand)',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '0.4rem 1.2rem',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: cat === active ? 'var(--copper)' : 'transparent',
              color: cat === active ? 'white' : 'var(--warm-mid)',
              border: '1px solid',
              borderColor: cat === active ? 'var(--copper)' : 'var(--sand)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              transition: 'all 0.2s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Product grid */}
      <div className="shop-grid" role="list" aria-label="Produkte Mine Glow">
        {filtered.map((p) => (
          <article key={p.id} className="product-card" role="listitem" aria-label={p.name}>
            <div className="product-card-img" style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
              <Image
                src={p.img}
                alt={p.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="product-card-body">
              <span style={{
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--copper)',
                marginBottom: '0.4rem',
                display: 'block',
              }}>
                {p.category}
              </span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="price">{p.price}</div>
              <a
                href={`${WHATSAPP}?text=Përshëndetje! Dëshiroj të porosis: ${encodeURIComponent(p.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  padding: '0.5rem 1.2rem',
                  background: 'linear-gradient(135deg, var(--copper), var(--gold-light))',
                  color: 'white',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  borderRadius: '4px',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Porosit ↗
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div style={{
        background: 'var(--parchment)',
        padding: '6rem 5rem',
        textAlign: 'center',
      }}>
        <p className="s-label-copper">Nuk gjete çfarë kërkoje?</p>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(1.8rem, 3vw, 3rem)',
          marginBottom: '1rem',
          color: 'var(--ink)',
        }}>
          Porosit diçka të <em style={{ fontStyle: 'italic', color: 'var(--copper)' }}>Personalizuar</em>
        </h2>
        <p style={{ color: 'var(--warm-mid)', fontSize: '0.88rem', marginBottom: '2rem' }}>
          Na dërgoni mesazh dhe e krijojmë produktin sipas dëshirave tuaja.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          Na Shkruani ↗
        </a>
      </div>
    </>
  )
}

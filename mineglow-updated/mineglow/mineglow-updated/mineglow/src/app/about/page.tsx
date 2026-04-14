import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rreth Nesh | Historia e Mine Glow',
  description:
    'Mëso historinë e Mine Glow — si lindi pasioni ynë për punime artizanale me perla në Shkodër dhe pse çdo produkt ynë është unik.',
  alternates: { canonical: 'https://www.mineglow.al/about' },
  openGraph: {
    title: 'Rreth Nesh | Mine Glow — Historia Jonë',
    description:
      'Historia e Mine Glow — punime artizanale me perla nga Shkodra. Çdo produkt është krijim unik i punuar me dorë.',
    url: 'https://www.mineglow.al/about',
  },
}

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Rreth Mine Glow',
  url: 'https://www.mineglow.al/about',
  description:
    'Historia e Mine Glow — punime artizanale me perla nga Shkodra, Shqipëri.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Mine Glow',
    foundingLocation: {
      '@type': 'Place',
      name: 'Shkodër, Shqipëri',
    },
    description:
      'Biznes artizanal i specializuar në çanta, aksesore dhe dekorime me perla të punuara me dorë.',
  },
}

const values = [
  {
    icon: '✦',
    title: 'Cilësi e Lartë',
    desc: 'Çdo material zgjidhet me kujdes. Perlatat janë natyrale ose artificiale të cilësisë së lartë, dhe procesi i punimit kontrollohet çdo hap.',
  },
  {
    icon: '◇',
    title: '100% me Dorë',
    desc: 'Asnjë produkt Mine Glow nuk prodhohef me makinë. Çdo copë merr kohën e duhur — orë pune dhe vëmendje e plotë ndaj detajit.',
  },
  {
    icon: '○',
    title: 'Unikale & Personal',
    desc: 'Çdo produkt është unik. Edhe dy çanta me të njëjtin model kanë ndryshime të vogla — kjo është bukuria e punimeve artizanale.',
  },
  {
    icon: '△',
    title: 'Traditë Shkodrane',
    desc: 'Punimet me perla kanë tradita të gjata në Shkodër. Mine Glow i risjell këto tradita në formë moderne dhe të adaptuar.',
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <div className="page-hero">
        <p className="s-label-rose">Historia jonë</p>
        <h1>
          Arte nga <em>Zemra</em><br />
          e Shkodrës
        </h1>
      </div>

      {/* Story section */}
      <section style={{ background: 'var(--soft-white)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div>
            <p className="s-label-copper">Si filloi gjithçka</p>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(2rem, 3vw, 3.5rem)',
              color: 'var(--ink)',
              marginBottom: '1.5rem',
              lineHeight: 1.15,
            }}>
              Dashuria për <em style={{ fontStyle: 'italic', color: 'var(--copper)' }}>Artin</em>
            </h2>
            <p style={{ color: 'var(--warm-mid)', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: '1.2rem' }}>
              Mine Glow lindi nga një pasion i thellë për artin artizanal shqiptar. Filloi si hobi
              — disa perla, ca fije dhe shumë durim — dhe u shndërrua në diçka shumë më të madhe.
            </p>
            <p style={{ color: 'var(--warm-mid)', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: '1.2rem' }}>
              Çdo produkt tregon një histori. Historia e duarve që e punuan, e kohës que u kushtua
              dhe e dashurisë për çdo perël të vendosur. Kjo nuk është prodhim industrial — është art.
            </p>
            <p style={{ color: 'var(--warm-mid)', fontSize: '0.9rem', lineHeight: 1.9 }}>
              Shkodra ka traditë të lashtë artizanale. Mine Glow e nderon këtë traditë duke e
              kombinuar me estetikë moderne dhe me nevojat e jetës bashkëkohore.
            </p>
          </div>

          <div
            style={{
              aspectRatio: '3/4',
              background: 'linear-gradient(160deg, var(--blush), var(--deep-rose))',
              borderRadius: '20px',
            }}
            role="img"
            aria-label="Mine Glow — artizane në punë"
          />
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'var(--parchment)' }}>
        <p className="s-label-copper" style={{ textAlign: 'center' }}>Vlerat tona</p>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(2rem, 3vw, 3.5rem)',
          textAlign: 'center',
          marginBottom: '4rem',
          color: 'var(--ink)',
        }}>
          Pse Mine Glow është <em style={{ fontStyle: 'italic', color: 'var(--copper)' }}>Ndryshe</em>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }} role="list">
          {values.map((v) => (
            <div
              key={v.title}
              role="listitem"
              style={{
                padding: '2.5rem',
                background: 'var(--soft-white)',
                borderRadius: '8px',
                transition: 'transform 0.3s',
              }}
            >
              <span style={{
                display: 'block',
                fontSize: '1.5rem',
                color: 'var(--copper)',
                marginBottom: '1rem',
              }} aria-hidden="true">{v.icon}</span>
              <h3 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.3rem',
                marginBottom: '0.8rem',
                color: 'var(--ink)',
              }}>{v.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--warm-mid)', lineHeight: 1.8 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--blush)', textAlign: 'center' }}>
        <p className="s-label-rose">Bashkohuni me ne</p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 3vw, 3.5rem)',
          color: 'var(--dark-rose)',
          marginBottom: '1rem',
        }}>
          Gjeni aksesoren tuaj <em style={{ fontStyle: 'italic', color: 'var(--deep-rose)' }}>Unike</em>
        </h2>
        <p style={{ color: 'var(--mid-rose)', marginBottom: '2rem', fontSize: '0.9rem' }}>
          Shikoni koleksionin tonë ose na kontaktoni për një porosi të personalizuar.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/shop" className="btn-gold">Shiko Dyqanin</a>
          <a
            href="https://instagram.com/minee_glow"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.9rem 2.2rem',
              border: '1px solid var(--deep-rose)',
              color: 'var(--deep-rose)',
              fontSize: '0.74rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: "'DM Sans', sans-serif",
              borderRadius: '6px',
              transition: 'all 0.2s',
            }}
          >
            Instagram ↗
          </a>
        </div>
      </section>
    </>
  )
}

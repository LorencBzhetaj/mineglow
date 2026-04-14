import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt | Na Shkruani — Mine Glow',
  description:
    'Na kontaktoni për porosi aksesore artizanale me perla, punime të personalizuara ose çdo pyetje tjetër. Mine Glow — Shkodër, Shqipëri.',
  alternates: { canonical: 'https://www.mineglow.al/contact' },
  openGraph: {
    title: 'Kontakt | Mine Glow — Na Shkruani',
    description:
      'Kontaktoni Mine Glow për porosi çantash dhe aksesore me perla, punime të personalizuara ose bashkëpunim.',
    url: 'https://www.mineglow.al/contact',
  },
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontakt — Mine Glow',
  url: 'https://www.mineglow.al/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Mine Glow',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Shkodër',
      addressCountry: 'AL',
    },
    sameAs: ['https://www.instagram.com/minee_glow'],
  },
}

const faqs = [
  {
    q: 'Sa kohë kërkon një porosi e personalizuar?',
    a: 'Në varësi të kompleksitetit, porositë e personalizuara zakonisht kryhen brenda 7–14 ditëve. Dërgojini mesazh për detaje specifike.',
  },
  {
    q: 'A dërgoni porosi jashtë Shqipërisë?',
    a: 'Po! Dërgojmë kudo në Shqipëri dhe kemi mundësi për dërgesa jashtë vendit. Na kontaktoni për çmimet e transportit.',
  },
  {
    q: 'Si mund të porosit?',
    a: 'Mënyra më e lehtë është nëpërmjet WhatsApp +355 68 820 2706 ose Instagram @minee_glow. Dërgojini mesazh direkt me produktin që dëshironi ose me idenë tuaj për personalizim.',
  },
  {
    q: 'A bëni porosi edhe për rraste të veçanta (dasma, festa)?',
    a: 'Absolutisht! Kemi eksperiencë me porosi grupore për dasma, festa dhe ngjarje speciale. Kontaktoni herët për disponueshmëri.',
  },
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <div className="contact-page">
        <p className="s-label-copper">Na gjeni</p>
        <h1>
          Na Kontaktoni<br />
          <em>me Kënaqësi</em>
        </h1>
        <p style={{ color: 'var(--warm-mid)', marginTop: '1rem', fontSize: '0.9rem', maxWidth: '500px' }}>
          Për porosi, pyetje ose thjesht të na tregoni çfarë dëshironi —
          jemi gjithmonë të gatshëm të ndihmojmë.
        </p>

        {/* Contact blocks */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginTop: '4rem',
        }} role="list">
          {[
            {
              icon: '📞',
              title: 'Telefon / WhatsApp',
              val: <a href="https://wa.me/355688202706" target="_blank" rel="noopener noreferrer" aria-label="Na kontaktoni në WhatsApp">+355 68 820 2706</a>,
              note: 'WhatsApp · Thirrje',
            },
            {
              icon: '📱',
              title: 'Instagram',
              val: <a href="https://instagram.com/minee_glow" target="_blank" rel="noopener noreferrer" aria-label="Profili ynë në Instagram">@minee_glow</a>,
              note: 'Na ndiqni & shkruani',
            },
            {
              icon: '📍',
              title: 'Vendndodhja',
              val: <>Shkodër, Shqipëri</>,
              note: 'Dërgesa gjithë Shqipërinë',
            },
            {
              icon: '🕐',
              title: 'Orari i Punës',
              val: <>E Hënë – E Premte: 09:00 – 18:00<br />E Shtunë: 10:00 – 15:00</>,
              note: 'Koha lokale (UTC+2)',
            },
          ].map((b) => (
            <div
              key={b.title}
              role="listitem"
              style={{
                background: 'var(--parchment)',
                padding: '2.5rem',
                borderRadius: '8px',
                border: '1px solid var(--sand)',
              }}
            >
              <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '1rem' }} aria-hidden="true">
                {b.icon}
              </span>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                color: 'var(--ink)',
              }}>{b.title}</div>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--warm-mid)',
                lineHeight: 1.7,
              }} className="ci-val">{b.val}</div>
              <div style={{
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--copper)',
                marginTop: '0.8rem',
              }}>{b.note}</div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div style={{
          marginTop: '4rem',
          padding: '3.5rem',
          background: 'var(--ink)',
          borderRadius: '8px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'DM Serif Display', serif",
            fontStyle: 'italic',
            fontSize: '1.4rem',
            color: 'var(--gold-light)',
            marginBottom: '0.5rem',
          }}>
            &ldquo;Mos hezitoni — na shkruani!&rdquo;
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginBottom: '2rem' }}>
            Çdo pyetje dhe çdo ide është mirë pritur.
          </p>
          <a
            href="https://wa.me/355688202706"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            aria-label="Na shkruani mesazh direkt në WhatsApp"
          >
            Na Shkruani në WhatsApp ↗
          </a>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: '6rem' }}>
          <p className="s-label-copper">Pyetje të shpeshta</p>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(1.8rem, 3vw, 3rem)',
            color: 'var(--ink)',
            marginBottom: '3rem',
          }}>
            Çfarë dëshironi të <em style={{ fontStyle: 'italic', color: 'var(--copper)' }}>Dini</em>
          </h2>

          <div role="list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                role="listitem"
                style={{
                  borderTop: '1px solid var(--sand)',
                  padding: '2rem 0',
                }}
              >
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '1.1rem',
                  color: 'var(--ink)',
                  marginBottom: '0.8rem',
                }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--warm-mid)', lineHeight: 1.8 }}>
                  {faq.a}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--sand)' }} />
          </div>
        </div>
      </div>
    </>
  )
}

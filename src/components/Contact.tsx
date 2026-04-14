const contactBlocks = [
  {
    icon: '📍',
    title: 'Adresa',
    content: (
      <>
        Shkodër, Shqipëri<br />
        <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
          Porosia mund të dërgohet kudo në Shqipëri
        </span>
      </>
    ),
  },
  {
    icon: '📱',
    title: 'Instagram & Kontakt',
    content: (
      <a
        href="https://instagram.com/minee_glow"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Vizitoni profilin tonë në Instagram"
      >
        @minee_glow
      </a>
      

    ),
  },
  {
    icon: '🕐',
    title: 'Orari i Punës',
    content: (
      <>
        E Hënë – E Premte: 09:00 – 18:00<br />
        E Shtunë: 10:00 – 15:00
      </>
    ),
  },
]

export default function Contact() {
  return (
    <section id="kontakt">
      <p className="s-label-copper">Na gjeni</p>
      <h2>
        Na Kontaktoni<br />
        <em>me Kënaqësi</em>
      </h2>

      <div className="contact-info-grid" role="list">
        {contactBlocks.map((block) => (
          <div key={block.title} className="ci-block" role="listitem">
            <span className="ci-ico" aria-hidden="true">{block.icon}</span>
            <div className="ci-ttl">{block.title}</div>
            <div className="ci-val">{block.content}</div>
          </div>
        ))}
      </div>

      <div className="contact-note" role="complementary" aria-label="Porosit tani">
        <p>
          &ldquo;Dëshironi diçka të personalizuar?
          Na dërgoni mesazh dhe e krijojmë bashkë.&rdquo;
        </p>
        <a
          href="https://instagram.com/minee_glow"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Na kontaktoni në Instagram për porosi"
        >
          Porosi tani ↗
        </a>
      </div>
    </section>
  )
}

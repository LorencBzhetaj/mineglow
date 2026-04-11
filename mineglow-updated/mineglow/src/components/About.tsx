import Image from 'next/image'

const stats = [
  { n: '500+', l: 'Produkte të shitura' },
  { n: '5+', l: 'Vite eksperiencë' },
  { n: '100%', l: 'Punime me dorë' },
]

export default function About() {
  return (
    <section id="pse-ne">
      <div className="about-grid">
        {/* Image Stack */}
        <div className="about-img-stack">
          <div className="about-img-main">
            <div style={{ position: 'relative', paddingBottom: '130%', borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src="/images/about-main.png"
                alt="Mine Glow — punime artizanale me perla"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
          <div className="about-img-accent">
            <div style={{ position: 'relative', paddingBottom: '100%', borderRadius: '12px', overflow: 'hidden' }}>
              <Image
                src="/images/about-accent.png"
                alt="Detaj — çantë me perla Mine Glow"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">
          <p className="s-label-rose">Historia jonë</p>
          <h2>
            Arte Artizanale nga<br />
            <em>Zemra e Shkodrës</em>
          </h2>
          <p>
            Mine Glow lindi nga dashuria për artin artizanal shqiptar. Çdo produkt
            është krijuar me dorë, me kujdes dhe me respekt të thellë për traditën
            e punimeve me perla që ka rrënjë të thella në kulturën shkodrane.
          </p>
          <blockquote className="pull-quote">
            &ldquo;Çdo perël që vendos, tregon një histori — histori e duarve,
            e kohës dhe e dashurisë për artin.&rdquo;
          </blockquote>
          <p>
            Produktet tona janë 100% të punuara me dorë. Nuk përdorim prodhim
            masiv. Çdo çantë, portofol ose aksesor është unik dhe merr kohën e
            duhur për t&apos;u kryer me përsosmëri.
          </p>

          <div className="about-stats" role="list" aria-label="Statistika Mine Glow">
            {stats.map((s) => (
              <div key={s.l} role="listitem">
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

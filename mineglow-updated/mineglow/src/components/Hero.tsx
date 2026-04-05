import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Faqja kryesore Mine Glow">
      <div className="hero-bg">
        <Image
          src="/images/hero.png"
          alt="Çantë artizanale me perla nga Mine Glow"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <span className="hero-tag">Artizanat Shqiptar · Shkodër</span>
        <h1>
          Çanta &amp; Aksesore<br />
          <em>me Perla</em>
        </h1>
        <p className="hero-sub">
          Elegancë e vërtetë e mbajtur në duar — çdo çantë, portofol dhe aksesore nga Mine Glow është krijim unik, i bërë me dashuri dhe kujdes.
        </p>
        <div className="hero-ctas">
          <Link href="/shop" className="btn-gold">
            Shiko Koleksionin
          </Link>
          <Link href="/#kontakt" className="btn-ghost-white">
            Na Kontakto
          </Link>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-line" />
        <span>Zbrit</span>
      </div>
    </section>
  )
}

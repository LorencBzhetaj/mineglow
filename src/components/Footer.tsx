import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-brand">
        <Link href="/" aria-label="Mine Glow — Kryefaqja">
          <span>Mine Glow</span>
        </Link>
      </div>
      <p>© {year} Mine Glow. Të gjitha të drejtat e rezervuara.</p>
      <p style={{ fontSize: '0.65rem', letterSpacing: '0.08em', opacity: 0.5 }}>
        Punime artizanale · Shkodër, Shqipëri
      </p>
    </footer>
  )
}

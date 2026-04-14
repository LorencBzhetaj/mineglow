'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Nëse jemi në shop ose faqe tjetër, logo dhe Kryefaqja shkojnë te /#hero
  const homeHref = pathname === '/' ? '#hero' : '/'

  return (
    <nav className={scrolled ? 'scrolled' : ''} id="nav">
      <div className="nav-brand">
        <Link href={homeHref} aria-label="Mine Glow — Kryefaqja">
          <Image
            src="/images/logo.png"
            alt="Mine Glow Logo"
            width={48}
            height={48}
            style={{ borderRadius: '50%', display: 'block' }}
            priority
          />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link href={homeHref}>Kryefaqja</Link></li>
        <li><Link href={pathname === '/' ? '#sherbimet' : '/#sherbimet'}>Shërbimet</Link></li>
        <li><Link href={pathname === '/' ? '#pse-ne' : '/#pse-ne'}>Pse Ne</Link></li>
        <li><Link href="/shop">Dyqani</Link></li>
        <li><Link href={pathname === '/' ? '#kontakt' : '/#kontakt'}>Kontakt</Link></li>
      </ul>
      <a
        href="https://instagram.com/minee_glow"
        className="nav-ig"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Na ndiqni në Instagram"
      >
        ↗ Instagram
      </a>
    </nav>
  )
}

'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)
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

      <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        <li><Link href={homeHref} onClick={handleLinkClick}>Kryefaqja</Link></li>
        <li><Link href={pathname === '/' ? '#sherbimet' : '/#sherbimet'} onClick={handleLinkClick}>Shërbimet</Link></li>
        <li><Link href={pathname === '/' ? '#pse-ne' : '/#pse-ne'} onClick={handleLinkClick}>Pse Ne</Link></li>
        <li><Link href="/shop" onClick={handleLinkClick}>Dyqani</Link></li>
        <li><Link href={pathname === '/' ? '#kontakt' : '/#kontakt'} onClick={handleLinkClick}>Kontakt</Link></li>
      </ul>

      
       <a href="https://instagram.com/minee_glow"
        className="nav-ig"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Na ndiqni në Instagram"
      >
        ↗ Instagram
      </a>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Hap menunë"
      >
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </button>
    </nav>
  )
}
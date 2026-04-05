import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--parchment)',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <p style={{
        fontSize: '0.65rem',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: 'var(--copper)',
        marginBottom: '1rem',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        Faqja nuk u gjet
      </p>
      <h1 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 'clamp(4rem, 10vw, 9rem)',
        fontWeight: 400,
        color: 'var(--ink)',
        lineHeight: 1,
        marginBottom: '1rem',
      }}>
        404
      </h1>
      <p style={{
        fontFamily: "'DM Serif Display', serif",
        fontStyle: 'italic',
        fontSize: '1.5rem',
        color: 'var(--copper)',
        marginBottom: '0.8rem',
      }}>
        Kjo faqe nuk ekziston
      </p>
      <p style={{
        color: 'var(--warm-mid)',
        fontSize: '0.88rem',
        marginBottom: '2.5rem',
        maxWidth: '360px',
      }}>
        Ndoshta faqja u zhvendos ose URL-ja është e gabuar.
      </p>
      <Link href="/" className="btn-gold">
        ← Kthehu në Kryefaqe
      </Link>
    </div>
  )
}
